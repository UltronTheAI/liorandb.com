import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal/legal-page";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms and Conditions — LioranDB",
  description:
    "Terms and Conditions governing the use of LioranDB database software, managed cloud infrastructure, and customer dashboard.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      intro="These Terms and Conditions govern your access to and use of the LioranDB website (liorandb.com), the customer dashboard (app.liorandb.com), software drivers, and managed database developer infrastructure provided by Lioran Developer Solutions."
    >
      <div className="legal-highlight">
        <p>
          <strong>Notice:</strong> By accessing our website, creating an account on the customer dashboard (
          <Link href={siteConfig.appUrl} target="_blank">app.liorandb.com</Link>), or subscribing to our managed database hosting services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
        </p>
      </div>

      <h2>1. About LioranDB &amp; Legal Entity</h2>
      <p>
        LioranDB is a developer-first document database system and cloud database infrastructure platform engineered by <strong>{siteConfig.legalEntity}</strong> (operating under Lioran Group), founded and led by Swaraj Puppalwar.
      </p>
      <p>
        <strong>Business Description:</strong> LioranDB provides high-performance document database software, client drivers, and managed cloud database hosting / developer infrastructure services. Customers use our infrastructure to store, query, and manage their own application data.
      </p>
      <div className="legal-warning">
        <p>
          <strong>Clarification on Service Nature:</strong> LioranDB is strictly a database management software system and cloud infrastructure provider for application developers. LioranDB does <em>NOT</em> provide, broker, scrape, or sell contact lists, tele-caller datasets, personal leads, or marketing directories.
        </p>
      </div>

      <h2>2. Customer Dashboard &amp; Service Workflow</h2>
      <p>
        Our managed database services operate under a verified onboarding and provisioning workflow designed to ensure performance stability and resource isolation:
      </p>
      <ol>
        <li>
          <strong>Account &amp; Database Request:</strong> The customer signs up at{" "}
          <Link href={siteConfig.appUrl} target="_blank">https://app.liorandb.com</Link> and submits a managed database request specifying their application architecture, expected operations per second (ops/sec), and dataset size.
        </li>
        <li>
          <strong>Workload Evaluation:</strong> Our engineering team reviews the request to verify sizing, query shapes, and network configuration.
        </li>
        <li>
          <strong>Secure Activation:</strong> Upon approval, the customer initiates their monthly subscription via our authorized payment gateway partner (Razorpay).
        </li>
        <li>
          <strong>Digital Provisioning:</strong> Dedicated server instances, connection URIs, security credentials, and backup policies are provisioned digitally and made accessible via the dashboard.
        </li>
      </ol>

      <h2>3. Pricing Plans &amp; Subscription Terms</h2>
      <p>
        LioranDB offers transparent managed infrastructure tiers billed on a recurring monthly subscription basis:
      </p>
      <ul>
        <li>
          <strong>Developer Starter Plan (₹5,000 / month):</strong> Includes up to 45,000 total operations/second (10,000 write ops/sec and 35,000 read ops/sec), dataset capacity under 1,000,000 documents, daily automated snapshot backups, direct founder and core engineering support, basic feature requests, and single-node dedicated cloud provisioning.
        </li>
        <li>
          <strong>Growth &amp; Custom Scale Plan (Custom Quote):</strong> Designed for multi-million document workloads, throughput exceeding 45,000 ops/sec, multi-node clustering, replication, custom backup schedules, and private VPC network peering.
        </li>
      </ul>
      <p>
        All prices are quoted in Indian Rupees (INR) unless explicitly specified otherwise. Subscriptions renew automatically every 30 days unless canceled by the customer prior to the renewal date.
      </p>

      <h2>4. Support Schedule &amp; Communication Channels</h2>
      <p>
        We take pride in offering direct founder and core database engineer support:
      </p>
      <ul>
        <li>
          <strong>Support Hours:</strong> Monday through Friday, <strong>6:00 PM to 10:00 PM IST (4 hours daily)</strong>.
        </li>
        <li>
          <strong>Weekend Policy:</strong> Closed on Saturdays and Sundays. Inquiries received during weekends or public holidays are addressed during the next business operating window.
        </li>
        <li>
          <strong>Official Support Channels:</strong> Customer Dashboard (<Link href={siteConfig.appUrl} target="_blank">app.liorandb.com</Link>), official email (<Link href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</Link>), and our verified Discord developer community.
        </li>
      </ul>

      <h2>5. Payment Processing &amp; Billing</h2>
      <p>
        Payments for subscriptions and managed services are processed securely via our payment gateway partner, <strong>Razorpay</strong>, and other RBI-compliant banking networks. By providing payment details, you authorize recurring monthly billing for your active subscriptions.
      </p>
      <p>
        We do not store your credit/debit card numbers or sensitive banking credentials on our servers. All transaction processing adheres to PCI-DSS compliance standards managed by our payment processor.
      </p>

      <h2>6. Cancellation &amp; Strict No-Refund Policy</h2>
      <p>
        Because managed database instances require immediate, irrevocable allocation of dedicated cloud computing resources, persistent SSD storage, memory, network routing, and engineering time upon provisioning:
      </p>
      <ul>
        <li>
          <strong>Strict No-Refund Policy:</strong> All subscription fees, server setup charges, and service payments are strictly <strong>non-refundable</strong> once a database instance has been provisioned.
        </li>
        <li>
          <strong>Subscription Cancellation:</strong> You may cancel your subscription renewal at any time directly through the customer dashboard (<Link href={siteConfig.appUrl} target="_blank">app.liorandb.com</Link>) or by writing to <Link href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</Link>. Cancellation stops future renewals at the end of your current paid billing period.
        </li>
      </ul>
      <p>
        For detailed terms regarding cancellations and duplicate transaction resolutions, please read our dedicated{" "}
        <Link href="/refund">Cancellation and Refund Policy</Link>.
      </p>

      <h2>7. Customer Responsibilities &amp; Fair Usage</h2>
      <p>
        When using LioranDB software, client drivers, and hosting infrastructure, you agree:
      </p>
      <ul>
        <li>To provide accurate business and contact information during registration and KYC verification.</li>
        <li>To safeguard your database administrative credentials, connection strings, and dashboard passwords.</li>
        <li>Not to use the infrastructure for unlawful activities, distributing malware, phishing, spamming, denial-of-service attacks, or storing prohibited materials under Indian law.</li>
        <li>Not to attempt unauthorized reverse engineering, tampering, or stress testing of shared multi-tenant management systems.</li>
      </ul>

      <h2>8. Intellectual Property</h2>
      <p>
        All rights, title, and interest in and to the LioranDB storage engine, V2 Rust architecture, TypeScript drivers, branding, trademarks, logos, documentation, and website content belong exclusively to <strong>{siteConfig.legalEntity}</strong>.
      </p>
      <p>
        You retain full, exclusive ownership of all application data, documents, and records that you store inside your LioranDB instances.
      </p>

      <h2>9. Pre-Alpha Software Notice &amp; Service Availability</h2>
      <p>
        LioranDB V2 is currently in public pre-alpha (launched {siteConfig.preAlphaDate}, with Alpha scheduled for {siteConfig.alphaLaunchDate}). While we adhere to rigorous durability testing and crash recovery benchmarks, pre-alpha software is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis for developer evaluation, workload feedback, and architecture validation.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, {siteConfig.legalEntity}, its founder, contributors, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or loss of profits, revenue, data, or business opportunities arising out of or related to your use of our services.
      </p>

      <h2>11. Governing Law &amp; Dispute Resolution</h2>
      <p>
        These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Maharashtra, India.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        If you have any questions or require clarification regarding these Terms and Conditions, please contact us:
      </p>
      <ul>
        <li><strong>Business Entity:</strong> {siteConfig.legalEntity} (Lioran Group)</li>
        <li><strong>Founder &amp; CTO:</strong> Swaraj Puppalwar</li>
        <li><strong>Support Email:</strong> <Link href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</Link></li>
        <li><strong>Business Inquiries:</strong> <Link href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</Link></li>
        <li><strong>Website:</strong> <Link href={siteConfig.url}>{siteConfig.url}</Link></li>
        <li><strong>Customer Dashboard:</strong> <Link href={siteConfig.appUrl} target="_blank">{siteConfig.appUrl}</Link></li>
      </ul>
    </LegalPage>
  );
}
