import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Data Analysis & Insights",
  description:
    "Turn raw business data into strategic, actionable intelligence with SMAT Concept's data analysis, dashboards, and predictive modelling.",
  alternates: { canonical: "/services/data-analysis" },
  openGraph: {
    title: "Data Analysis & Insights | SMAT Concept",
    description:
      "Turn raw business data into strategic, actionable intelligence with SMAT Concept's data analysis, dashboards, and predictive modelling.",
    url: "/services/data-analysis",
  },
};

export default function Page() {
  return <Client />;
}
