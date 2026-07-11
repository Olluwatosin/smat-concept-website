import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on AI, data analysis, web development, IoT, and digital transformation for African businesses from the SMAT Concept team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | SMAT Concept",
    description:
      "Insights on AI, data analysis, web development, IoT, and digital transformation for African businesses from the SMAT Concept team.",
    url: "/blog",
  },
};

export default function Page() {
  return <Client />;
}
