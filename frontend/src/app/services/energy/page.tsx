import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Energy Solutions",
  description:
    "Reliable solar and energy solutions engineered by SMAT Concept for homes and businesses.",
  alternates: { canonical: "/services/energy" },
  openGraph: {
    title: "Energy Solutions | SMAT Concept",
    description:
      "Reliable solar and energy solutions engineered by SMAT Concept for homes and businesses.",
    url: "/services/energy",
  },
};

export default function Page() {
  return <Client />;
}
