import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ToastProvider } from "@/components/ui/Toast";
import { profile } from "@/data/profile";
import { siteDescription, siteKeywords, siteTitle } from "@/lib/metadata";
import { siteJsonLd } from "@/lib/structured-data";
import { themeColors, themeInitScript } from "@/lib/theme";

// Self-hosted to avoid intermittent Vercel Turbopack failures from next/font/google
// when Google serves extensionless /l/font?kit= URLs (next.js#99114).
const inter = localFont({
  src: "./fonts/InterVariable.woff2",
  display: "swap",
  variable: "--font-inter",
  weight: "100 900",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: themeColors.light },
    { media: "(prefers-color-scheme: dark)", color: themeColors.dark },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: {
    default: siteTitle,
    template: `%s | ${profile.name}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: profile.url }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: profile.url,
    siteName: profile.name,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: profile.portrait.src,
        width: profile.portrait.width,
        height: profile.portrait.height,
        alt: profile.portrait.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [profile.portrait.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      id="top"
      data-scroll-behavior="smooth"
      className={`${inter.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-background font-sans text-text-primary antialiased">
        <div className="scroll-progress" aria-hidden="true" />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[80] focus:rounded-full focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:shadow-[var(--shadow-raised)]"
        >
          Skip to content
        </a>
        <ToastProvider>
          <Header />
          <main id="content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ToastProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </body>
    </html>
  );
}
