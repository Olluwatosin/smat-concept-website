import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Task Management Solutions",
  description:
    "Streamline operations with custom task and workflow management systems from SMAT Concept.",
  alternates: { canonical: "/services/task-management" },
  openGraph: {
    title: "Task Management Solutions | SMAT Concept",
    description:
      "Streamline operations with custom task and workflow management systems from SMAT Concept.",
    url: "/services/task-management",
  },
};

export default function Page() {
  return <Client />;
}
