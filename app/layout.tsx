import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GASPARDPCHT - Web and Mobile Developer",
  description: "Portfolio of GASPARDPCHT, showcasing web and mobile development projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/assets/withmac.png" type="image/png" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="GASPARDPCHT - Web and Mobile Developer" />
        <meta property="og:description" content="Discover the portfolio of GASPARDPCHT, a showcase of my web and mobile development projects." />
        <meta property="og:image" content="https://www.gaspardpcht.com/assets/withmac.png" />
        <meta property="og:url" content="https://www.gaspardpcht.com" />
        <meta property="og:type" content="website" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "GASPARDPCHT Portfolio",
            "description": "Explore the portfolio of GASPARDPCHT, a web and mobile developer showcasing various projects.",
            "url": "https://www.gaspardpcht.com",
            "image": "https://www.gaspardpcht.com/assets/withmac.png"
          })}
        </script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}