import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Goodwill & Impact",
  description:
    "How SMAT Concept gives back — community initiatives, training, and technology-for-good projects across Africa.",
  alternates: { canonical: "/goodwill" },
  openGraph: {
    title: "Goodwill & Impact | SMAT Concept",
    description:
      "How SMAT Concept gives back — community initiatives, training, and technology-for-good projects across Africa.",
    url: "/goodwill",
  },
};

export default function Page() {
  return <Client />;
}
