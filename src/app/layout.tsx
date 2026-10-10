import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ToastProvider } from "@/components/ui/Toast";
import { profile } from "@/data/profile";
import { personJsonLd, websiteJsonLd } from "@/lib/structured-data";
import { themeColors, themeInitScript } from "@/lib/theme";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
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
    default: `${profile.name} | ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Software Engineer in Hyderabad, India, focused on full-stack development, backend engineering, enterprise applications, and scalable web experiences.",
  applicationName: profile.name,
  authors: [{ name: profile.name, url: profile.url }],
  creator: profile.name,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: profile.url,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: profile.url,
    siteName: profile.name,
    title: `${profile.name} | ${profile.title}`,
    description:
      "Software Engineer in Hyderabad, India, focused on full-stack development, backend engineering, enterprise applications, and scalable web experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.title}`,
    description:
      "Software Engineer in Hyderabad, India, focused on full-stack development, backend engineering, and enterprise applications.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
