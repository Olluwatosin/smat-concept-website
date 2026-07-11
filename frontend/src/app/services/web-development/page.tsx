import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Web Development",
  description:
    "Fast, beautiful, revenue-generating websites and web apps built with Next.js by SMAT Concept.",
  alternates: { canonical: "/services/web-development" },
  openGraph: {
    title: "Web Development | SMAT Concept",
    description:
      "Fast, beautiful, revenue-generating websites and web apps built with Next.js by SMAT Concept.",
    url: "/services/web-development",
  },
};

export default function Page() {
  return <Client />;
}
