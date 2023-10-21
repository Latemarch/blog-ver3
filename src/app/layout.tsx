import type { Metadata } from "next";
import { Noto_Serif_KR, Albert_Sans } from "next/font/google";

import "./globals.css";

const albert = Albert_Sans({ subsets: ["latin"], variable: "--font-albert" });
const notoKr = Noto_Serif_KR({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "500", "600", "700"],
  variable: "--font-notoKr",
});

export const metadata: Metadata = {
  generator: "Next.js",
  title: "LateMarch Blog",
  description: "Tech blog of LateMarch, Front-end Developer",
  referrer: "origin-when-cross-origin",
  applicationName: "DataFlagship",
  keywords: ["blog", "tech blog", "기술 블로그", "next.js"],
  authors: { name: "전준형", url: "latemarch.dev@gmail.com" },
  colorScheme: "dark",
  creator: "Latemarch",
  publisher: "Latemarch.dev",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "LateMarch - blog",
    siteName: "Main Page",
    description: "Blog of LateMarch, Front-end Developer",
    // image: { url: "/images/frontend.png", alt: "My blog image" },
    locale: "kr_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${albert.variable} ${notoKr.variable}`}>
        <div className="flex fixed inset-0 bg-blue-200 ">
          <div className="flex w-full h-full bg-gray-200 max-w-7xl mx-auto"></div>
        </div>
        <div className="flex fixed inset-0 ">
          <div className="flex w-full h-full max-w-7xl mx-auto text-black">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
