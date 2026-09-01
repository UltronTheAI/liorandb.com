import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal/legal-page";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Cancellation and Refund Policy — LioranDB",
  description:
    "Cancellation and Strict No-Refund Policy for LioranDB managed database hosting and developer infrastructure services.",
};

export default function RefundPage() {
  return (
    <LegalPage
      title="Cancellation and Refund Policy"
      intro="This Cancellation and Refund Policy governs all subscriptions, managed hosting plans, and developer infrastructure services purchased on liorandb.com and app.liorandb.com from Lioran Developer Solutions."
    >
      <div className="legal-warning">
        <p>
          <strong>Summary of Strict No-Refund Policy:</strong> All subscription payments, managed database hosting fees, and infrastructure provisioning charges are <strong>strictly non-refundable</strong> once a database instance has been allocated or provisioned. Please review your workload requirements carefully before subscribing.
        </p>
      </div>

      <h2>1. Rationale for Our No-Refund Policy</h2>
      <p>
        LioranDB provides dedicated cloud database hosting and developer infrastructure services (such as our Developer Starter plan at ₹5,000/month). Upon successful payment and onboarding approval:
      </p>
      <ul>
        <li>Dedicated compute nodes, high-speed NVMe storage, and memory allocations are instantly reserved and dedicated to your workload.</li>
        <li>Automated snapshot backup systems, monitoring telemetry, and Write-Ahead Log (WAL) partitions are initialized.</li>
        <li>Direct founder and core engineering resources are assigned to configure, monitor, and support your database setup.</li>
      </ul>
      <p>
        Because these third-party cloud infrastructure costs and engineering hours are incurred immediately and cannot be recovered, we enforce a strict <strong>No Refund</strong> policy on all active subscriptions and setup fees.
      </p>

      <h2>2. Subscription Cancellation Process</h2>
      <p>
        We believe in complete transparency and customer control. You are never locked into long-term contracts, and you may cancel your subscription at any time:
      </p>
      <ol>
        <li>
          <strong>How to Cancel:</strong> You can cancel your subscription directly from your customer dashboard at{" "}
          <Link href={siteConfig.appUrl} target="_blank">https://app.liorandb.com</Link> under <em>Account Settings &gt; Billing</em>, or by emailing our support team at{" "}
          <Link href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</Link>.
        </li>
        <li>
          <strong>Effective Date of Cancellation:</strong> Cancellation stops the automatic recurring renewal for subsequent billing periods. Your managed database service will remain active and fully accessible until the end of your current paid 30-day billing cycle.
        </li>
        <li>
          <strong>No Prorated Refunds:</strong> We do not offer partial, pro-rata, or mid-cycle refunds for early termination or unused days within an active billing period.
        </li>
        <li>
          <strong>Data Export &amp; Decommissioning:</strong> Customers are responsible for exporting all required data and snapshots prior to the expiration date. Once the billing cycle ends and the subscription is terminated, the associated database instances and data disks will be scheduled for permanent decommissioning.
        </li>
      </ol>

      <h2>3. Exceptions: Duplicate Charges &amp; Gateway Errors</h2>
      <p>
        While standard service fees are non-refundable, we provide full support for bona fide payment gateway technical errors:
      </p>
      <ul>
        <li>
          <strong>Duplicate Transactions:</strong> If your card or bank account was inadvertently charged more than once for the same billing cycle due to a technical timeout or payment gateway glitch during checkout, please notify us within <strong>7 calendar days</strong> of the transaction.
        </li>
        <li>
          <strong>Resolution Timeline:</strong> Please send an email to{" "}
          <Link href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</Link> with your registered email address, transaction timestamps, and the <strong>Razorpay Payment ID</strong>.
        </li>
        <li>
          <strong>Refund Processing:</strong> Upon verification of duplicate charges, our billing team will issue a full refund for the duplicate amount directly to your original payment method via Razorpay within <strong>5 to 7 business days</strong> (bank processing times may vary).
        </li>
      </ul>

      <h2>4. Support Schedule &amp; Billing Inquiries</h2>
      <p>
        If you have any questions regarding your invoice, subscription status, or plan upgrades, our support team is available during our standard operating window:
      </p>
      <ul>
        <li><strong>Support Window:</strong> Monday through Friday, <strong>6:00 PM to 10:00 PM IST (4 hours daily)</strong>.</li>
        <li><strong>Weekend Schedule:</strong> Closed on Saturdays and Sundays. Queries received over the weekend are answered on Monday evening.</li>
        <li><strong>Support Email:</strong> <Link href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</Link></li>
        <li><strong>Customer Portal:</strong> <Link href={siteConfig.appUrl} target="_blank">{siteConfig.appUrl}</Link></li>
      </ul>

      <h2>5. Governing Law</h2>
      <p>
        This Cancellation and Refund Policy is governed by and construed in accordance with the laws of India. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in Maharashtra, India.
      </p>
    </LegalPage>
  );
}

