import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What clients say about working with SMAT Concept — verified reviews across our technology services.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Testimonials | SMAT Concept",
    description:
      "What clients say about working with SMAT Concept — verified reviews across our technology services.",
    url: "/testimonials",
  },
};

export default function Page() {
  return <Client />;
}
