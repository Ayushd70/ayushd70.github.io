import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayush Dubey",
  description:
    "Software Engineer with 4+ years' experience building scalable cross-platform apps, SaaS products, and AI integrations. Explore my portfolio.",
  keywords: [
    "Ayush Dubey",
    "Mobile Engineer",
    "Flutter Developer",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Ayush Dubey" }],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Ayush Dubey",
    description:
      "Software Engineer with 4+ years' experience building scalable cross-platform apps and SaaS products.",
    url: "https://ayushd70.dev",
    siteName: "Ayush Dubey",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Dubey",
    description:
      "Software Engineer with 4+ years' experience building scalable cross-platform apps and SaaS products.",
    creator: "@Ayushd70",
  },
  metadataBase: new URL("https://ayushd70.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
