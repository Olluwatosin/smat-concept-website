import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Our Products & Work",
  description:
    "Real products built in-house by SMAT Concept — Veriflow, EduTracker360, CivicDesk, SchoolPro Elite, EasyServe, ShopSight, DealerOS, and RentInDex — plus hands-on CCTV field installations.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Our Products & Work | SMAT Concept",
    description:
      "Real products built in-house by SMAT Concept — Veriflow, EduTracker360, CivicDesk, SchoolPro Elite, EasyServe, ShopSight, DealerOS, and RentInDex — plus hands-on CCTV field installations.",
    url: "/portfolio",
  },
};

export default function Page() {
  return <Client />;
}
