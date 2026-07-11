import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Smart Farming & Precision Agriculture",
  description:
    "IoT-powered precision agriculture solutions for the modern African farm from SMAT Concept.",
  alternates: { canonical: "/services/smart-farming" },
  openGraph: {
    title: "Smart Farming & Precision Agriculture | SMAT Concept",
    description:
      "IoT-powered precision agriculture solutions for the modern African farm from SMAT Concept.",
    url: "/services/smart-farming",
  },
};

export default function Page() {
  return <Client />;
}
