import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about SMAT Concept's services, pricing, process, timelines, and support.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ | SMAT Concept",
    description:
      "Answers to common questions about SMAT Concept's services, pricing, process, timelines, and support.",
    url: "/faq",
  },
};

export default function Page() {
  return <Client />;
}
