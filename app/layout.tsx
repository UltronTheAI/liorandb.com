import type { Metadata } from "next";
import Script from "next/script";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "LioranDB",
    "Indian database",
    "NoSQL database",
    "document database",
    "Node.js database",
    "TypeScript database",
    "Rust database",
    "embedded database",
    "MongoDB alternative",
    "developer infrastructure India",
    "self-hosted database",
    "document database India",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "technology",
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Cross-platform",
  description: siteConfig.description,
  url: siteConfig.url,
  downloadUrl: siteConfig.docsUrl,
  softwareVersion: "V1 live, V2 in development",
  creator: {
    "@type": "Organization",
    name: "Lioran Developer Solutions",
  },
  foundingDate: "2025",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lioran Developer Solutions",
  url: siteConfig.companyUrl,
  sameAs: [
    siteConfig.orgGithubUrl,
    siteConfig.discordUrl,
  ],
  founder: {
    "@type": "Person",
    name: "Swaraj Puppalwar",
    sameAs: siteConfig.founderGithubUrl,
  },
  foundingDate: "2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
        <Script
          id="software-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
