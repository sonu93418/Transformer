import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Optimus Prime — Transformation Sequence",
  description:
    "Scroll-driven cinematic transformation of Optimus Prime from truck to robot — frame by frame. Autobots, roll out!",
  metadataBase: new URL("https://transformer.sonuray.me"),
  keywords: [
    "Optimus Prime",
    "Transformers",
    "Scroll Animation",
    "Next.js",
    "Framer Motion",
    "Canvas Animation",
    "Interactive",
  ],
  authors: [{ name: "Sonu Kumar Ray", url: "https://github.com/sonu93418" }],
  creator: "Sonu Kumar Ray",
  openGraph: {
    title: "Optimus Prime — Transformation Sequence",
    description:
      "Scroll-driven cinematic transformation of Optimus Prime from truck to robot — frame by frame. 192 frames of mechanical excellence.",
    url: "https://transformer.sonuray.me",
    siteName: "Optimus Prime Transformation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Optimus Prime — Transformation Sequence",
    description:
      "Scroll-driven cinematic transformation of Optimus Prime from truck to robot — frame by frame.",
    creator: "@sonuray",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${orbitron.variable} ${rajdhani.variable} antialiased bg-[#0b0b0b] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
