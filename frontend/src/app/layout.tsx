import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://smatconcept.com"),
  title: "SMAT Concept & Innovative Solutions Ltd",
  description: "Your fastest route to the digital world. Task Management, Web Development, Smart Farming, Home Automation, Document Digitalization & more.",
  icons: { icon: "/mainlogo.png" },
  openGraph: {
    title: "SMAT Concept & Innovative Solutions Ltd",
    description: "Transforming Africa through cutting-edge technology — Task Management · Web Development · Smart Farming · Home Automation · Document Digitalization",
    url: "https://smatconcept.com",
    siteName: "SMAT Concept",
    images: [{ url: "/mainlogo.png", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#080B16] text-gray-100 antialiased">{children}</body>
    </html>
  );
}
