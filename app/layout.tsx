import type { Metadata } from "next";
import {Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "iSnippetsCrafters",
  description: "Building Seamless Code Snippet Management for Developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/sr-logo.png" sizes="any" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
