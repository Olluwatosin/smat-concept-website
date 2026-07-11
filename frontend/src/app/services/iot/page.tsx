import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "IoT Solutions",
  description:
    "Custom IoT device design, sensor networks, and real-time monitoring platforms built by SMAT Concept.",
  alternates: { canonical: "/services/iot" },
  openGraph: {
    title: "IoT Solutions | SMAT Concept",
    description:
      "Custom IoT device design, sensor networks, and real-time monitoring platforms built by SMAT Concept.",
    url: "/services/iot",
  },
};

export default function Page() {
  return <Client />;
}
