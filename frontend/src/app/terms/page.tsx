import TechHeader from "../components/TechHeader";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using SMAT Concept services.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-xl font-bold mb-4" style={{ color: "#D4AF37" }}>{title}</h2>
      <div className="text-gray-400 leading-relaxed space-y-3 text-sm">{children}</div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#080B16]">
      <TechHeader />

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <div className="mb-12">
          <div className="section-badge mb-6">Legal</div>
          <h1 className="font-display text-4xl font-black text-white mb-3">Terms of Service</h1>
          <p className="text-gray-500 text-sm">Last updated: May 2025</p>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-12">
          <Section title="1. Acceptance of Terms">
            <p>By accessing or using the website at smatconcept.com.ng or engaging SMAT Concept & Innovative Solutions Ltd (&quot;SMAT Concept&quot;, &quot;we&quot;, &quot;us&quot;) for any service, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
          </Section>

          <Section title="2. Services">
            <p>SMAT Concept provides technology consulting, development, installation, training, and related services as described on our website. The specific scope, deliverables, timeline, and pricing for each engagement are agreed upon in a separate written proposal or service agreement.</p>
            <p>We reserve the right to decline any project at our discretion and without obligation to provide a reason.</p>
          </Section>

          <Section title="3. Payments & Fees">
            <p>Unless otherwise agreed in writing:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>50% of the agreed fee is due before work commences</li>
              <li>50% is due upon project completion and delivery</li>
              <li>All fees are quoted in Nigerian Naira (NGN) or as agreed</li>
              <li>Late payments may incur a 2% monthly fee after 14 days</li>
            </ul>
            <p>Fees for completed work are non-refundable unless SMAT Concept fails to deliver the agreed scope.</p>
          </Section>

          <Section title="4. Intellectual Property">
            <p>Upon receipt of full payment, all custom code, designs, and materials created specifically for your project become your property. SMAT Concept retains:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>The right to showcase the project in our portfolio (unless you request otherwise in writing)</li>
              <li>Ownership of any pre-existing tools, libraries, or frameworks used in your project</li>
            </ul>
            <p>Open-source components used in your project retain their original licenses.</p>
          </Section>

          <Section title="5. Client Responsibilities">
            <p>You agree to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Provide accurate, timely information required for the project</li>
              <li>Review and provide feedback within agreed timelines</li>
              <li>Ensure you have the right to share any content or data you provide to us</li>
              <li>Not use our services for unlawful purposes</li>
            </ul>
          </Section>

          <Section title="6. Confidentiality">
            <p>Both parties agree to keep confidential any proprietary information shared during the course of a project. This obligation survives the termination of our engagement by 3 years. We sign NDAs upon request before any sensitive information is shared.</p>
          </Section>

          <Section title="7. Limitation of Liability">
            <p>SMAT Concept is not liable for:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Business losses or lost profits</li>
              <li>Damages arising from your use of third-party services we integrate with</li>
            </ul>
            <p>Our total liability for any claim is limited to the fees paid for the specific service that gave rise to the claim.</p>
          </Section>

          <Section title="8. Termination">
            <p>Either party may terminate a project engagement with 14 days written notice. In the event of termination:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>You are liable for work completed up to the termination date</li>
              <li>We will deliver all completed work and materials to you</li>
              <li>The initial deposit is non-refundable</li>
            </ul>
          </Section>

          <Section title="9. Governing Law">
            <p>These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from these Terms or our services will be resolved through good-faith negotiation. If negotiation fails, disputes will be referred to arbitration in Lagos, Nigeria.</p>
          </Section>

          <Section title="10. Changes to Terms">
            <p>We may update these Terms from time to time. The &quot;Last updated&quot; date at the top indicates when the latest revision was made. Continued engagement with our services after changes constitutes acceptance of the revised Terms.</p>
          </Section>

          <Section title="11. Contact">
            <p>For questions about these Terms:</p>
            <ul className="list-none space-y-1">
              <li>Email: <a href="mailto:smatconceptsolutions@gmail.com" className="underline" style={{ color: "#D4AF37" }}>smatconceptsolutions@gmail.com</a></li>
              <li>Phone: <a href="tel:+2348101235007" className="underline" style={{ color: "#D4AF37" }}>+234 810 123 5007</a></li>
            </ul>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
