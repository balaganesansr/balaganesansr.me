import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import { SITE_META, IDENTITY } from "@/constants/content";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { Spotlight } from "@/components/providers/Spotlight";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_META.url),
  title: {
    default: SITE_META.title,
    template: `%s | ${IDENTITY.name}`,
  },
  description: SITE_META.description,
  applicationName: IDENTITY.name,
  category: "technology",
  keywords: [
    "IT support",
    "Technical support",
    "IT helpdesk",
    "System administration",
    "Hardware troubleshooting",
    "Network troubleshooting",
    "Windows and Linux administration",
    "Remote support",
    "Balaganesan SR",
  ],
  authors: [{ name: IDENTITY.name, url: SITE_META.url }],
  creator: IDENTITY.name,
  publisher: IDENTITY.name,
  alternates: { canonical: SITE_META.url },
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: SITE_META.title,
    description: SITE_META.description,
    url: SITE_META.url,
    siteName: IDENTITY.name,
    locale: "en_US",
    type: "profile",
    firstName: IDENTITY.firstName,
    lastName: IDENTITY.lastName,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_META.title,
    description: SITE_META.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: IDENTITY.name,
  givenName: IDENTITY.firstName,
  url: SITE_META.url,
  email: `mailto:${IDENTITY.email}`,
  telephone: IDENTITY.phone,
  jobTitle: "IT & Technical Support Executive",
  description: SITE_META.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karaikudi",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Mount Zion College of Engineering and Technology (Anna University)",
  },
  worksFor: {
    "@type": "Organization",
    name: "ZedIndex",
  },
  sameAs: [IDENTITY.github, IDENTITY.linkedin],
  knowsAbout: [
    "IT Support",
    "Technical Support",
    "Windows Administration",
    "Linux Server Administration",
    "Networking and Firewalls",
    "Hardware Troubleshooting",
    "Cloud Servers",
    "Software Development",
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f2e9" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0806" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable} grain antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var q=new URLSearchParams(location.search).get("theme");var t=q||localStorage.getItem("theme");if(t==="dark"){document.documentElement.dataset.theme="dark";}}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <div className="grid-bg" aria-hidden />
        <Spotlight />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
