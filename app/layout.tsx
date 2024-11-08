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
        <link rel="icon" href="/assets/withmac.png" type="image/png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}