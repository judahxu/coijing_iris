import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import ChatWidget from "../components/ChatWidget";

export const metadata: Metadata = {
  title: "可爱鲸 - 用智能体重塑企业未来",
  description: "专注于开发智能体（AI Agents）的科技公司",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
