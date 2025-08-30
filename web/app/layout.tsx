import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

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
      <body>
        <header className="w-full bg-gray-50 shadow-md py-4">
          <Link href="/" className="block mx-auto w-fit">
            <h1 className="text-center text-2xl font-bold text-gray-900 font-sans">
              MiniMarket
            </h1>
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
