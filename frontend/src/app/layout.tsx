import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL('https://smatconcept.com'),
  title: {
    default: "SMAT Concept | Leading Technology Solutions Provider in Africa",
    template: "%s | SMAT Concept",
  },
  description:
    "Transform your business with SMAT Concept's cutting-edge technology solutions. Specializing in Data Digitalization, Smart Agriculture, IoT, Networking & Security, and Energy Solutions across Africa. 5+ years experience, 150+ projects delivered.",
  keywords: [
    "data digitalization africa",
    "smart agriculture nigeria",
    "iot solutions africa",
    "networking security nigeria",
    "solar energy solutions lagos",
    "document management system",
    "smart farming technology",
    "technology solutions africa",
    "digital transformation",
    "enterprise technology",
  ],
  authors: [{ name: "SMAT Concept & Innovative Solutions Ltd" }],
  creator: "SMAT Concept",
  publisher: "SMAT Concept & Innovative Solutions Ltd",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://smatconcept.com",
    siteName: "SMAT Concept",
    title: "SMAT Concept | Leading Technology Solutions Provider in Africa",
    description:
      "Transform your business with cutting-edge technology solutions. Data Digitalization • Smart Agriculture • Networking & Security • IoT • Energy Solutions",
    images: [
      {
        url: "/data-digitalization.png",
        width: 1200,
        height: 630,
        alt: "SMAT Concept Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SMAT Concept | Leading Technology Solutions Provider in Africa",
    description:
      "Transform your business with cutting-edge technology solutions across Africa.",
    images: ["/data-digitalization.png"],
    creator: "@smatconcept",
  },
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
  verification: {
    // Add these when you set up:
    // google: 'your-google-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://smatconcept.com/#organization",
        name: "SMAT Concept & Innovative Solutions Ltd",
        alternateName: "SMAT Concept",
        url: "https://smatconcept.com",
        logo: {
          "@type": "ImageObject",
          url: "https://smatconcept.com/logo.png",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+234-810-123-5007",
          contactType: "customer service",
          email: "info@smatconcept.com",
          areaServed: ["NG", "Africa"],
          availableLanguage: ["en"],
        },
        sameAs: [
          // Add your social media profiles when available
          // "https://facebook.com/smatconcept",
          // "https://twitter.com/smatconcept",
          // "https://linkedin.com/company/smatconcept",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lagos",
          addressCountry: "NG",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://smatconcept.com/#website",
        url: "https://smatconcept.com",
        name: "SMAT Concept",
        publisher: {
          "@id": "https://smatconcept.com/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://smatconcept.com/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://smatconcept.com/#localbusiness",
        name: "SMAT Concept & Innovative Solutions Ltd",
        image: "https://smatconcept.com/logo.png",
        telephone: "+234-810-123-5007",
        email: "info@smatconcept.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lagos",
          addressCountry: "NG",
        },
        geo: {
          "@type": "GeoCoordinates",
          // Add your actual coordinates
          latitude: 6.5244,
          longitude: 3.3792,
        },
        url: "https://smatconcept.com",
        priceRange: "$$",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "08:00",
            closes: "18:00",
          },
        ],
      },
      {
        "@type": "Service",
        serviceType: "Technology Solutions",
        provider: {
          "@id": "https://smatconcept.com/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "Nigeria",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Technology Services",
          itemListElement: [
            {
              "@type": "OfferCatalog",
              name: "Data Digitalization",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Document Digitalization & OCR",
                  },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Smart Agriculture",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "IoT Agriculture Solutions",
                  },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Networking & Security",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Network Infrastructure & Cybersecurity",
                  },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "IoT Solutions",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "IoT Devices & Automation",
                  },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Energy Solutions",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Solar Energy & Battery Systems",
                  },
                },
              ],
            },
          ],
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-slate-50">{children}</body>
    </html>
  );
}
