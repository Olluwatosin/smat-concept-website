import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SMAT Concept. Tell us about your project and our team responds within 24 hours via email, phone, or WhatsApp.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | SMAT Concept",
    description:
      "Get in touch with SMAT Concept. Tell us about your project and our team responds within 24 hours via email, phone, or WhatsApp.",
    url: "/contact",
  },
};

export default function Page() {
  return <Client />;
}
