
import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My personal site",
  description: "A personal website created by Jian Marc Dumadag for educational purposes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-800">
        <nav className="flex gap-6 bg-white p-5 shadow">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/projects" className="hover:text-blue-500">Projects</Link>
        </nav>

        <main className="mx-auto max-w-4xl p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
