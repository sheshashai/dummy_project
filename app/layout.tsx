import type { Metadata } from "next";
import { Michroma, Onest } from "next/font/google";
import "./globals.css";

const display = Michroma({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = Onest({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Tigan.AI Innovations",
  description: "AI assistants that learn how your business already works.",
  icons: { icon: "/logo.jpg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
