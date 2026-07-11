import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "AI Workspace Apps",
  description:
    "Custom internal tools supercharged with LLM integration and intelligent automation, built by SMAT Concept.",
  alternates: { canonical: "/services/ai-workspace" },
  openGraph: {
    title: "AI Workspace Apps | SMAT Concept",
    description:
      "Custom internal tools supercharged with LLM integration and intelligent automation, built by SMAT Concept.",
    url: "/services/ai-workspace",
  },
};

export default function Page() {
  return <Client />;
}
