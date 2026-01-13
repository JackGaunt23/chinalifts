import type { Metadata, Viewport } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The China Effect | Elite Training Program",
  description: "Transform your physique with The China Effect - a comprehensive strength and hypertrophy program inspired by elite Chinese weightlifting methods.",
  keywords: ["fitness", "workout", "training", "strength", "hypertrophy", "weightlifting", "China Effect"],
  authors: [{ name: "The China Effect" }],
  openGraph: {
    title: "The China Effect | Elite Training Program",
    description: "Transform your physique with elite training methods",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${oswald.variable} ${inter.variable} antialiased bg-black text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
