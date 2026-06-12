import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://smatconcept.com"),
  title: {
    default: "SMAT Concept & Innovative Solutions Ltd",
    template: "%s | SMAT Concept",
  },
  description:
    "Your fastest route to the digital world. AI workspace apps, data analysis, web development, smart farming, home automation, and more — built for African businesses.",
  keywords: [
    "SMAT Concept",
    "tech company Nigeria",
    "AI solutions Africa",
    "web development Nigeria",
    "smart farming IoT",
    "data analysis",
    "home automation CCTV",
  ],
  icons: { icon: "/mainlogo.png", apple: "/mainlogo.png" },
  openGraph: {
    title: "SMAT Concept & Innovative Solutions Ltd",
    description:
      "Transforming Africa through cutting-edge technology — AI · Data · Web · IoT · Automation",
    url: "https://smatconcept.com",
    siteName: "SMAT Concept",
    images: [{ url: "/mainlogo.png", width: 1200, height: 630, alt: "SMAT Concept" }],
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMAT Concept & Innovative Solutions Ltd",
    description: "Transforming Africa through cutting-edge technology.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#080B16] text-gray-100 antialiased font-sans">{children}</body>
    </html>
  );
}
