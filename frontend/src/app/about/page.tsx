import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet SMAT Concept & Innovative Solutions — our mission, team, and track record delivering AI, data, and digital infrastructure across Africa.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | SMAT Concept",
    description:
      "Meet SMAT Concept & Innovative Solutions — our mission, team, and track record delivering AI, data, and digital infrastructure across Africa.",
    url: "/about",
  },
};

export default function Page() {
  return <Client />;
}
