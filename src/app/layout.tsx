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
    default: "Revanth Kumar",
    template: "%s | Revanth Kumar",
  },
  description: "Portfolio of Revanth Kumar, a Full Stack MERN Developer and AI Engineer specializing in building scalable web applications, AI-powered systems, and data science solutions. Expert in React, Node.js, Python, TensorFlow, and cloud technologies.",

  // Keywords for SEO
  keywords: [
    "Revanth Kumar",
    "Full Stack Developer",
    "MERN Stack Developer",
    "AI Engineer",
    "Data Science",
    "Machine Learning",
    "React Developer",
    "Node.js Developer",
    "Python Developer",
    "Web Development",
    "Software Engineer",
    "Deepvibe IT Solutions",
    "Portfolio",
    "AI Solutions",
    "Cloud Computing",
    "AWS",
    "Docker",
    "MongoDB",
    "TypeScript",
    "Next.js Developer",
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

  // Icons with circular profile
  icons: {
    icon: [
      { url: "/profile pic.ico", sizes: "any" },
      { url: "/profile pic.ico", sizes: "16x16", type: "image/x-icon" },
      { url: "/profile pic.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    shortcut: "/profile pic.ico",
    apple: [
      { url: "/profile pic.ico", sizes: "180x180" },
    ],
  },

  // Manifest
  manifest: "/site.webmanifest",

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://revanthkumar.dev",
    siteName: "Revanth Kumar Portfolio",
    title: "Revanth Kumar | Full Stack Developer & AI Engineer",
    description: "Full Stack MERN Developer and AI Engineer building scalable web applications and intelligent systems. Specializing in React, Node.js, Python, Machine Learning, and Cloud Technologies.",
    images: [
      {
        url: "/profile pic.jpeg",
        width: 1200,
        height: 630,
        alt: "Revanth Kumar - Full Stack Developer & AI Engineer",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Revanth Kumar | Full Stack Developer & AI Engineer",
    description: "Full Stack MERN Developer and AI Engineer specializing in scalable web applications and AI solutions.",
    creator: "@revanthkumar",
    images: ["/profile pic.jpeg"],
  },

  // Verification (add your verification codes)
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Alternate languages (if applicable)
  alternates: {
    canonical: "https://revanthkumar.dev",
  },

  // Category
  category: "technology",

  // Other metadata
  metadataBase: new URL("https://revanthkumar.dev"),

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
              "url": "https://revanthkumar.dev",
              "jobTitle": "Full Stack Developer & AI Engineer",
              "sameAs": [
                "https://github.com/RevanthKumar66",
                "https://www.linkedin.com/in/revanthkumar66/",
                "https://x.com/Revanth_Kumar46/"
              ],
              "knowsAbout": ["Web Development", "Artificial Intelligence", "React", "Node.js", "Python", "Machine Learning"],
              "description": "Full Stack MERN Developer and AI Engineer building scalable web applications and intelligent systems."
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
              "url": "https://revanthkumar.dev",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://revanthkumar.dev/blogs?search={search_term_string}",
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
