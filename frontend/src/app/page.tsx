import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: { absolute: "SMAT Concept & Innovative Solutions Ltd — Digital Solutions for Africa" },
  description:
    "SMAT Concept & Innovative Solutions Ltd — AI workspace apps, data analysis, web development, smart farming, home automation, IoT and more, built for African businesses.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "SMAT Concept & Innovative Solutions Ltd — Digital Solutions for Africa",
    description:
      "SMAT Concept & Innovative Solutions Ltd — AI workspace apps, data analysis, web development, smart farming, home automation, IoT and more, built for African businesses.",
    url: "/",
  },
};

export default function Page() {
  return <Client />;
}
