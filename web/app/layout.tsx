import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mini-Market: Anthony Monsalve ",
  description:
    "A simple e-commerce app built with Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
