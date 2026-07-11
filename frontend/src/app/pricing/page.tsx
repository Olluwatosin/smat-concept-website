import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for SMAT Concept's technology services. Find a plan that fits your business and budget.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | SMAT Concept",
    description:
      "Transparent pricing for SMAT Concept's technology services. Find a plan that fits your business and budget.",
    url: "/pricing",
  },
};

export default function Page() {
  return <Client />;
}
