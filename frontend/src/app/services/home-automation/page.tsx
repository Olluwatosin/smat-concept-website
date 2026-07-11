import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Home Automation & CCTV",
  description:
    "Smart home automation, CCTV, and security systems designed and installed by SMAT Concept.",
  alternates: { canonical: "/services/home-automation" },
  openGraph: {
    title: "Home Automation & CCTV | SMAT Concept",
    description:
      "Smart home automation, CCTV, and security systems designed and installed by SMAT Concept.",
    url: "/services/home-automation",
  },
};

export default function Page() {
  return <Client />;
}
