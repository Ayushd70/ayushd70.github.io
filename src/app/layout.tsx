import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayush Dubey — Software Engineer",
  description:
    "Software Engineer leading Flutter and on-device AI at Twin.shop. 4+ years building AI, SaaS, and SDK products.",
  keywords: [
    "Ayush Dubey",
    "Software Engineer",
    "Flutter Developer",
    "On-device AI",
    "Lead Engineer Flutter",
    "Twin.shop",
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
    title: "Ayush Dubey — Software Engineer",
    description:
      "Leading Flutter and on-device AI at Twin.shop. Builder of Manthan, SaaS apps, and open-source Flutter packages.",
    url: "https://ayushd70.dev",
    siteName: "Ayush Dubey",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Dubey — Software Engineer",
    description:
      "Leading Flutter and on-device AI at Twin.shop. Builder of Manthan and open-source Flutter packages.",
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
        className={`${plusJakarta.variable} ${ibmPlexMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
