import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Welcome Ceylon Tours | Sri Lanka Travel & Holidays",
  description: "Welcome Ceylon Tours is your trusted Negombo tour operator. Explore the beauty of Sri Lanka with our custom tour packages and holidays.",
  keywords: "Welcome Ceylon Tours, Sri Lanka tours, Negombo tour operator, Sri Lanka travel, holiday in Sri Lanka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        {children}
        <Script src="https://unpkg.com/swiper@7/swiper-bundle.min.js" strategy="beforeInteractive" />
        <Script src="/js/script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
