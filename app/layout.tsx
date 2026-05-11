import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Mongkol Jiramongkolrat — Product Manager",
  description:
    "Product Manager bridging business strategy and technology across Southeast Asia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="bg-white text-slate-800 antialiased">{children}</body>
    </html>
  );
}
