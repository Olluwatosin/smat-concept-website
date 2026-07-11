import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Digital Skills Training",
  description:
    "Practical digital skills and technology training programmes delivered by SMAT Concept.",
  alternates: { canonical: "/services/digital-training" },
  openGraph: {
    title: "Digital Skills Training | SMAT Concept",
    description:
      "Practical digital skills and technology training programmes delivered by SMAT Concept.",
    url: "/services/digital-training",
  },
};

export default function Page() {
  return <Client />;
}
