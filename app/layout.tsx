import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GASPARDPCHT",
  description: "Portfolio GASPARDPCHT",
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
        <meta property="og:title" content="GASPARDPCHT" />
        <meta property="og:description" content="Découvrez mon portfolio GASPARDPCHT, un aperçu de mes projets en développement web et mobile." />
        <meta property="og:image" content="https://www.gaspardpcht.com/assets/withmac.png" />
        <meta property="og:url" content="https://www.gaspardpcht.com" />
        <meta property="og:type" content="website" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "GASPARDPCHT Portfolio",
            "description": "Découvrez mon portfolio et mes projets en développement web.",
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