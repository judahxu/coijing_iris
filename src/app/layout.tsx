import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import ChatWidget from "../components/ChatWidget";

export const metadata: Metadata = {
  metadataBase: new URL("https://iris.coijing.com/"),
  title: {
    default: "智能客服机器人",
    template: `%s | "智能客服机器人"`,
  },
  description: "基于大语言模型的新一代智能客服系统，为企业打造7*24小时全天候的智能服务能力",
  keywords: "智能客服,AI客服,客服机器人,在线客服系统,智能对话机器人",
  authors: [{ name: '可爱鲸' }],
  creator: '可爱鲸',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: "https://iris.coijing.com/",
    title: "智能客服机器人",
    description: "基于大语言模型的新一代智能客服系统，为企业打造7*24小时全天候的智能服务能力",
    siteName: "智能客服机器人",
    images: [{ url: "/og-image.jpg" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <ChatWidget />
      </body>
    </html>
  );
}
