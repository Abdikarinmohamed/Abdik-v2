import type { Metadata } from "next";
import { NTR } from "next/font/google";
import "./globals.css";

const ntr = NTR({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ntr",
});

export const metadata: Metadata = {
  title: "Abdikarin Mohamed | Software Engineer",
  description:
    "Software engineer focused on backend systems, product-minded engineering, and practical software tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ntr.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
