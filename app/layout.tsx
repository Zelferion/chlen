import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Three Fiber Editor",
  description: "A tool that makes 3d modeling available in the browser",
=======
  title: "ура работает",
  description: "я считаю что это победа",
>>>>>>> 33f6a77163da370afd5d77733e45a1143a88617a
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
