import TechHeader from "../components/TechHeader";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How SMAT Concept collects, uses, and protects your personal information.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-xl font-bold text-white mb-4" style={{ color: "#D4AF37" }}>{title}</h2>
      <div className="text-gray-400 leading-relaxed space-y-3 text-sm">{children}</div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080B16]">
      <TechHeader />

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <div className="mb-12">
          <div className="section-badge mb-6">Legal</div>
          <h1 className="font-display text-4xl font-black text-white mb-3">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">Last updated: May 2025</p>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-12">
          <Section title="1. Who We Are">
            <p>SMAT Concept & Innovative Solutions Ltd (&quot;SMAT Concept&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a technology company registered in Nigeria. Our website is <strong className="text-white">smatconcept.com</strong> and we can be reached at <a href="mailto:smatconceptsolutions@gmail.com" className="underline" style={{ color: "#D4AF37" }}>smatconceptsolutions@gmail.com</a>.</p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We collect information you provide directly to us when you:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Fill out our contact form (name, email, phone, message)</li>
              <li>Send us an email or WhatsApp message</li>
              <li>Subscribe to our newsletter (if applicable)</li>
              <li>Engage us for a project</li>
            </ul>
            <p>We also automatically collect basic usage data (pages visited, time on site) through standard web analytics if integrated. We do not collect sensitive personal data.</p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Respond to your enquiries and provide services</li>
              <li>Send project-related communications</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
          </Section>

          <Section title="4. Data Storage & Security">
            <p>Your data is stored on secure servers. Contact form submissions are processed via Web3Forms and delivered to our email. We take reasonable technical and organisational measures to protect your information against unauthorised access.</p>
            <p>However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.</p>
          </Section>

          <Section title="5. Data Retention">
            <p>We retain contact enquiries and client communications for as long as necessary to provide services and comply with legal obligations. Project-related data is retained for a minimum of 3 years for business records.</p>
          </Section>

          <Section title="6. Your Rights">
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (subject to legal obligations)</li>
              <li>Withdraw consent for communications at any time</li>
            </ul>
            <p>To exercise these rights, contact us at <a href="mailto:smatconceptsolutions@gmail.com" className="underline" style={{ color: "#D4AF37" }}>smatconceptsolutions@gmail.com</a>.</p>
          </Section>

          <Section title="7. Cookies">
            <p>Our website may use essential cookies required for basic functionality. We do not currently use tracking or advertising cookies. If this changes, we will update this policy and notify visitors accordingly.</p>
          </Section>

          <Section title="8. Third-Party Services">
            <p>We use the following third-party services that may process data on our behalf:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong className="text-white">Web3Forms</strong> — contact form processing</li>
              <li><strong className="text-white">Vercel</strong> — website hosting</li>
              <li><strong className="text-white">Google Fonts</strong> — typography delivery</li>
            </ul>
            <p>Each of these services has their own privacy policies and data handling practices.</p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>We may update this privacy policy from time to time. We will notify you of significant changes by updating the &quot;Last updated&quot; date at the top of this page. Continued use of our website after changes constitutes acceptance of the updated policy.</p>
          </Section>

          <Section title="10. Contact Us">
            <p>For any privacy-related questions or requests:</p>
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
