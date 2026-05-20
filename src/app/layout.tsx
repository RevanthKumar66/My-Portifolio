import type { Metadata, Viewport } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./mobile-optimizations.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-logo",
  display: "swap",
});

// Viewport configuration for responsive design
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

// SEO Optimized Metadata
export const metadata: Metadata = {
  // Basic Metadata
  title: {
    default: "Revanth Kumar | Full Stack Developer & AI Engineer",
    template: "%s | Revanth Kumar",
  },
  description: "Revanth Kumar is a Full Stack MERN Developer and AI Engineer specializing in React, Node.js, Next.js, NestJS, TypeScript, AI systems, scalable backend architecture, and modern web applications.",

  // Keywords for SEO
  keywords: [
    "Revanth Kumar",
    "revanth",
    "revanth kumar developer",
    "full stack developer",
    "software engineer",
    "MERN stack developer",
    "AI engineer",
    "Next.js developer",
    "React developer Hyderabad",
    "NestJS",
    "TypeScript"
  ],

  // Authors
  authors: [{ name: "Revanth Kumar" }],
  creator: "Revanth Kumar",
  publisher: "Revanth Kumar",

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons — profile picture used as favicon for Google Search
  icons: {
    icon: [
      { url: "/profile-pic1.jpg", sizes: "any", type: "image/jpeg" },
      { url: "/profile-pic1.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/profile-pic1.jpg", sizes: "16x16", type: "image/jpeg" },
    ],
    shortcut: "/profile-pic1.jpg",
    apple: [
      { url: "/profile-pic1.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
  },

  // Manifest
  manifest: "/site.webmanifest",

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://revanthkumar.co.in",
    siteName: "Revanth Kumar Portfolio",
    title: "Revanth Kumar | Full Stack Developer",
    description: "Full Stack MERN Developer and AI Engineer",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Revanth Kumar - Full Stack MERN Developer & AI Engineer",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Revanth Kumar",
    description: "Full Stack MERN Developer and AI Engineer",
    creator: "@Revanth_Kumar46",
    images: ["/og-image.jpg"],
  },

  // Verification (add your verification codes)
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Alternate languages (if applicable)
  alternates: {
    canonical: "/",
  },

  // Category
  category: "technology",

  // Other metadata
  metadataBase: new URL("https://revanthkumar.co.in"),

  // App links (if you have mobile apps)
  // appLinks: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Additional SEO tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Revanth Kumar" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Revanth Kumar",
              "url": "https://revanthkumar.co.in",
              "image": "https://revanthkumar.co.in/revanth-kumar-full-stack-mern-developer-ai-engineer.jpg",
              "sameAs": [
                "https://github.com/RevanthKumar66",
                "https://www.linkedin.com/in/revanthkumar66/",
                "https://x.com/Revanth_Kumar46/",
                "https://instagram.com/revanthkumar_66"
              ],
              "jobTitle": "Full Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance / Software Engineer"
              },
              "knowsAbout": ["React", "Next.js", "Node.js", "NestJS", "TypeScript", "AI Engineering", "System Design"],
              "description": "Revanth Kumar is a Full Stack MERN Developer and AI Engineer specializing in React, Node.js, Next.js, NestJS, TypeScript, AI systems, scalable backend architecture, and modern web applications."
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Who is Revanth Kumar?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Revanth Kumar is a professional Full Stack MERN Developer and AI Engineer specializing in React, Next.js, Node.js, NestJS, TypeScript, and building intelligent web systems."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What services does Revanth Kumar offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Revanth Kumar offers end-to-end full stack development (MERN stack, Next.js), AI/ML integration, database architecture, and custom software development services."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where is Revanth Kumar based?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Revanth Kumar is based in Hyderabad, India."
                  }
                }
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Revanth Kumar Portfolio",
              "url": "https://revanthkumar.co.in",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://revanthkumar.co.in/blogs?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${playfairDisplay.variable} font-sans antialiased bg-background text-foreground flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
