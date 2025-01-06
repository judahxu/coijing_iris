import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import ChatWidget from "../../components/ChatWidget";
import { LanguageProvider } from '../i18n/LanguageContext';
import { fallbackLng, languages } from '../i18n/settings';

// Define interface for metadata translations
interface MetadataTranslations {
  title: string;
  titleTemplate: string;
  description: string;
  siteName: string;
}

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

async function getMetadataTranslations(locale: string): Promise<MetadataTranslations> {
  try {
    // Type the dynamic import
    const translations = await import(`@/app/i18n/locales/${locale}/metadata.json`) as { default: MetadataTranslations };
    return translations.default;
  } catch (error) {
    console.error('Failed to load translations:', error);
    const fallbackTranslations = await import(`@/app/i18n/locales/${fallbackLng}/metadata.json`) as { default: MetadataTranslations };
    return fallbackTranslations.default;
  }
}

type Props = {
  params: Promise<{ lang: string }>
  children: React.ReactNode
}

async function initLanguage(params: Props['params']): Promise<string> {
  const resolvedParams = await params;
  return languages.includes(resolvedParams.lang) ? resolvedParams.lang : fallbackLng;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const lang = await initLanguage(props.params);
  const t = await getMetadataTranslations(lang);

  return {
    title: {
      default: t.title,
      template: t.titleTemplate,
    },
    description: t.description,
    keywords: "智能客服,AI客服,客服机器人,在线客服系统,智能对话机器人",
    openGraph: {
      type: 'website',
      locale: lang === 'zh' ? 'zh_CN' : 'en_US',
      url: 'https://iris.coijing.com/',
      siteName: t.siteName,
      title: t.title,
      description: t.description,
    },
    icons: [{ rel: "icon", url: "/favicon.ico" }],
    alternates: {
      languages: Object.fromEntries(
        languages.map(lng => [lng, `/${lng}`])
      ),
    },
  };
}

export default async function RootLayout(props: Props) {
  const lang = await initLanguage(props.params);

  return (
    <LanguageProvider>
      <TRPCReactProvider>{props.children}</TRPCReactProvider>
      <ChatWidget />
    </LanguageProvider>
  );
}