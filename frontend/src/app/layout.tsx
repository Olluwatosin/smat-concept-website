import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMAT Concept & Innovative Solutions Ltd",
  description: "Your fastest route to the digital world.",
  icons: { icon: "/logo.png" }, // temporary favicon using your logo
  openGraph: {
    title: "SMAT Concept & Innovative Solutions Ltd",
    description: "Data Digitalization • Smart Agriculture • Networking & Security • IoT • Energy",
    url: "http://localhost:3000",
    siteName: "SMAT Concept",
    images: [{ url: "/data-digitalization.png", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50">{children}</body>
    </html>
  );
}
