import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Terms — LioranDB",
  description: "Terms for using the LioranDB website and related resources.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms"
      intro="These terms apply to use of the LioranDB website, public information pages and linked community resources."
    >
      <h2>Use of the website</h2>
      <p>
        You may browse and use the LioranDB website for lawful purposes, including
        learning about the product, reviewing documentation and following public
        development activity.
      </p>

      <h2>No warranty</h2>
      <p>
        The website and all information on it are provided on an “as is” and “as
        available” basis without guarantees of completeness, uptime, accuracy or
        fitness for a particular purpose.
      </p>

      <h2>Product status</h2>
      <p>
        Statements about LioranDB V2 describe a product under development. Internal
        benchmark numbers, roadmap notes and pre-alpha dates are informational and
        should not be interpreted as service-level commitments or production
        guarantees.
      </p>

      <h2>Intellectual property</h2>
      <p>
        LioranDB branding, site content and related materials remain the property
        of their respective owners unless explicitly stated otherwise. Product
        usage rights are governed by the separate LioranDB license.
      </p>

      <h2>Third-party links</h2>
      <p>
        This site may link to GitHub, Discord, documentation hosting and other
        third-party resources. LioranDB is not responsible for the content,
        policies or availability of external services.
      </p>

      <h2>Changes</h2>
      <p>
        These terms may be updated as the project evolves. Continued use of the
        site after updates means you accept the latest published version.
      </p>
    </LegalPage>
  );
}
