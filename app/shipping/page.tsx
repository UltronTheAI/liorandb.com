import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal/legal-page";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Shipping and Delivery Policy — LioranDB",
  description:
    "Shipping and Digital Delivery Policy for LioranDB managed database software and cloud infrastructure services.",
};

export default function ShippingPage() {
  return (
    <LegalPage
      title="Shipping &amp; Delivery Policy"
      intro="This Shipping &amp; Delivery Policy explains how LioranDB software, cloud database instances, and digital infrastructure services are provisioned and delivered to our customers."
    >
      <div className="legal-highlight">
        <p>
          <strong>Digital Service Provisioning Notice:</strong> LioranDB is a 100% digital SaaS and cloud developer infrastructure platform. We do not sell or ship physical products, hardware, or boxed media. No physical shipping is required.
        </p>
      </div>

      <h2>1. Mode of Delivery (Digital Provisioning)</h2>
      <p>
        All services provided by <strong>{siteConfig.legalEntity}</strong> (including database server instances, driver access, connection strings, and administrative consoles) are delivered entirely electronically via our online platform.
      </p>

      <h2>2. Delivery &amp; Provisioning Timelines</h2>
      <p>
        Our managed database services operate according to the following electronic delivery schedule:
      </p>
      <ul>
        <li>
          <strong>Account &amp; Dashboard Access:</strong> Immediate upon successful email verification and registration at{" "}
          <Link href={siteConfig.appUrl} target="_blank">https://app.liorandb.com</Link>.
        </li>
        <li>
          <strong>Managed Database Instance Provisioning:</strong> Following workload review and payment confirmation via Razorpay, dedicated database server instances, connection endpoints, and initial access credentials are electronically provisioned within <strong>1 to 24 hours</strong>.
        </li>
        <li>
          <strong>Client Drivers &amp; Software Packages:</strong> Freely downloadable and installable immediately via npm (`@liorandb/driver`, `@liorandb/cli`) and public Docker repositories.
        </li>
      </ul>

      <h2>3. Delivery Confirmation</h2>
      <p>
        Upon successful provisioning of your cloud database server:
      </p>
      <ol>
        <li>An electronic confirmation email containing deployment metadata and setup instructions will be sent to your registered email address.</li>
        <li>Your database endpoints, real-time performance telemetry, and management tools will automatically become active inside your dashboard at <Link href={siteConfig.appUrl} target="_blank">app.liorandb.com</Link>.</li>
      </ol>

      <h2>4. Delivery Issues or Delays</h2>
      <p>
        If you have completed your payment and your database instance has not been activated within 24 hours, or if you encounter any difficulties accessing your credentials, please contact our support team immediately:
      </p>
      <ul>
        <li><strong>Support Window:</strong> Monday through Friday, 6:00 PM to 10:00 PM IST (Sat &amp; Sun off)</li>
        <li><strong>Support Email:</strong> <Link href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</Link></li>
        <li><strong>Customer Portal:</strong> <Link href={siteConfig.appUrl} target="_blank">{siteConfig.appUrl}</Link></li>
      </ul>
    </LegalPage>
  );
}

