import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Networking & Security",
  description:
    "Enterprise-grade networking, connectivity, and cybersecurity solutions from SMAT Concept.",
  alternates: { canonical: "/services/networking" },
  openGraph: {
    title: "Networking & Security | SMAT Concept",
    description:
      "Enterprise-grade networking, connectivity, and cybersecurity solutions from SMAT Concept.",
    url: "/services/networking",
  },
};

export default function Page() {
  return <Client />;
}
