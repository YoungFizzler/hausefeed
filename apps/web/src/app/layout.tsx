import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../index.css";
import Providers from "@/components/providers";
import Header1 from "@/components/header";
import Footer4Col from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { buildMetadata } from "@/site.config";

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="min-h-svh flex flex-col">
            <Header1 />
            <main className="flex-1 flex flex-col items-stretch justify-start">
              <div className="container-wrapper">
                {children}
              </div>
            </main>
            <Footer4Col />
          </div>
        </Providers>
      </body>
    </html>
  );
}
