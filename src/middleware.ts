import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { languages, fallbackLng } from './app/i18n/settings';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if path already has a locale
  const pathnameHasLocale = languages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Get language preferences in order
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  const acceptLanguage = request.headers.get('accept-language');
  
  // Parse accept-language header to get browser preferences
  let browserLocale = fallbackLng;
  if (acceptLanguage) {
    const browserPreferences: string[] = acceptLanguage
    .split(',')
    .map(lang => lang?.split(';')[0]?.split('-')[0])
    .filter((lang): lang is string => lang !== undefined && lang !== '');
    
    // Find first supported language from browser preferences
    browserLocale = browserPreferences.find(lang => 
      languages.includes(lang)) ?? fallbackLng;
  }

  // Choose language in priority order
  const locale = cookieLocale ?? browserLocale ?? fallbackLng;

  return NextResponse.redirect(
    new URL(
      `/${locale}${pathname === '/' ? '' : pathname}`,
      request.url
    )
  );
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
};