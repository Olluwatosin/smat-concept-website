import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected projects and case studies from SMAT Concept across AI, data analytics, web, IoT, and automation.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio | SMAT Concept",
    description:
      "Selected projects and case studies from SMAT Concept across AI, data analytics, web, IoT, and automation.",
    url: "/portfolio",
  },
};

export default function Page() {
  return <Client />;
}
