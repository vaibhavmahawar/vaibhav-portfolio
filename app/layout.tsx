import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = "https://vaibhavmahawar.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — AI Engineer & Computer Vision Researcher`,
    template: `%s | ${profile.name}`,
  },
  description: profile.description,
  keywords: [
    "Vaibhav Kumar Mahawar",
    "AI Engineer",
    "Computer Vision",
    "Machine Learning",
    "Multi-Agent AI",
    "Generative AI",
    "YOLO",
    "LangGraph",
    "RAG",
    "Software Engineer",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — AI Engineer & Computer Vision Researcher`,
    description: profile.description,
    siteName: `${profile.name} · Mission Control`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — AI Engineer`,
    description: profile.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body bg-background text-on-surface antialiased selection:bg-primary-fixed-dim/30 selection:text-primary-fixed-dim">
        {children}
      </body>
    </html>
  );
}
