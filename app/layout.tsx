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
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}