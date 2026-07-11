import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Document Digitalization",
  description:
    "Digitise and organise your records with SMAT Concept's secure document digitalization services.",
  alternates: { canonical: "/services/document-digitalization" },
  openGraph: {
    title: "Document Digitalization | SMAT Concept",
    description:
      "Digitise and organise your records with SMAT Concept's secure document digitalization services.",
    url: "/services/document-digitalization",
  },
};

export default function Page() {
  return <Client />;
}
