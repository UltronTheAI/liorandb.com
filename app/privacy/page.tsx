import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy — LioranDB",
  description: "Privacy information for the LioranDB website.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy"
      intro="This page describes the intended privacy posture for the LioranDB website and community touchpoints."
    >
      <h2>Overview</h2>
      <p>
        LioranDB is built with a simple principle: collect as little personal data
        as possible while still operating the website, documentation, community
        links and product communication channels.
      </p>

      <h2>Website usage</h2>
      <p>
        Visiting this site may result in standard server-side logs such as IP
        address, request path, browser metadata and timestamps. These logs are
        typically used for security, uptime and debugging.
      </p>

      <h2>External services</h2>
      <p>
        This website links to third-party services including GitHub, Discord and
        the hosted documentation site. Those services may collect data according to
        their own privacy policies once you leave this site.
      </p>

      <h2>Contact and community</h2>
      <p>
        If you contact the team, join the Discord community, open GitHub issues or
        otherwise communicate directly, the information you provide may be used to
        respond to you, improve the product and manage community participation.
      </p>

      <h2>Data sharing</h2>
      <p>
        LioranDB is not presented as selling personal information. Data may be
        disclosed when required for security, legal compliance, abuse prevention or
        protection of users, the project or its operators.
      </p>

      <h2>Policy updates</h2>
      <p>
        Privacy practices may evolve as the product matures. If this page is
        updated, the latest published version on the site should be treated as the
        current statement.
      </p>
    </LegalPage>
  );
}
