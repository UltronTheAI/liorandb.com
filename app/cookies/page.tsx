import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal/legal-page";
import { siteConfig } from "@/data/site";
import { CheckCircle2, ShieldCheck, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookies Policy — LioranDB",
  description:
    "Cookies Policy for LioranDB explaining our Zero-Cookie policy on liorandb.com and essential operational session cookies on app.liorandb.com.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookies Policy"
      intro="This Cookies Policy explains how Lioran Developer Solutions (operating as LioranDB) handles cookies, local storage, and session identifiers across our official website (liorandb.com) and our customer hosting dashboard (app.liorandb.com)."
    >
      <div className="legal-highlight">
        <p>
          <strong>Zero-Tracking Guarantee:</strong> On our official website (<strong>liorandb.com</strong>), we do <strong>NOT</strong> use any advertising cookies, marketing tracking pixels, or cross-site tracking scripts. Your browsing experience is completely private.
        </p>
      </div>

      <h2>1. Summary: How We Use Cookies</h2>
      <p>
        We believe in maximum privacy and minimal data storage. Our approach differs clearly between our public marketing website and our cloud application subdomain:
      </p>

      <div className="my-6 grid gap-4 grid-cols-1 md:grid-cols-2">
        <div className="rounded-[var(--radius-md)] border border-[var(--color-hairline-strong)] bg-[var(--color-surface)] p-4">
          <div className="flex items-center gap-2 font-semibold text-[var(--color-ink)]">
            <ShieldCheck size={18} className="text-emerald-600 dark:text-emerald-400" />
            <span>Official Website (liorandb.com)</span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-[var(--color-body)]">
            <strong>Zero Cookies Placed.</strong> We do not set, drop, or read any tracking cookies, third-party advertising cookies, or tracking pixels on the official website.
          </p>
        </div>

        <div className="rounded-[var(--radius-md)] border border-[var(--color-hairline-strong)] bg-[var(--color-surface)] p-4">
          <div className="flex items-center gap-2 font-semibold text-[var(--color-ink)]">
            <CheckCircle2 size={18} className="text-blue-600 dark:text-blue-400" />
            <span>App Subdomain (app.liorandb.com)</span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-[var(--color-body)]">
            <strong>Strictly Essential Cookies Only.</strong> On our app subdomain where we sell and manage database hosting, we use minimal session cookies strictly for user authentication, dashboard security, and payment processing.
          </p>
        </div>
      </div>

      <h2>2. Cookies on the Official Website (liorandb.com)</h2>
      <p>
        When you visit and browse the official LioranDB website (<Link href={siteConfig.url}>{siteConfig.url}</Link>):
      </p>
      <ul>
        <li>We do <strong>not</strong> use third-party marketing or ad tracking cookies (no Google Ads, no Meta/Facebook Pixel, no retargeting beacons).</li>
        <li>We do <strong>not</strong> track your browsing behavior across other websites or build advertising profiles.</li>
        <li>We do <strong>not</strong> monetize or sell your visitor information to data brokers.</li>
        <li>Your client theme preference (dark or light mode) is handled locally within your own browser without sending tracking data to our servers.</li>
      </ul>

      <h2>3. Cookies on the Customer App (app.liorandb.com)</h2>
      <p>
        On our customer dashboard at <Link href={siteConfig.appUrl} target="_blank">{siteConfig.appUrl}</Link>, where developers request, configure, and monitor managed database hosting instances:
      </p>
      <p>
        We use strictly <strong>essential and functional cookies / secure tokens</strong> that are technically required to provide the database hosting service:
      </p>
      <ul>
        <li>
          <strong>User Authentication &amp; Session Tokens:</strong> Secure HTTP-only session cookies that maintain your logged-in state when accessing your database instances and sensitive connection credentials.
        </li>
        <li>
          <strong>Cross-Site Request Forgery (CSRF) Protection:</strong> Security tokens designed to protect your account and prevent malicious websites from submitting unauthorized actions on your behalf.
        </li>
        <li>
          <strong>Payment &amp; Billing Handshake:</strong> Temporary transaction session tokens used during checkout integration with our authorized payment gateway partner (<strong>Razorpay</strong>).
        </li>
        <li>
          <strong>Dashboard State Preferences:</strong> Retaining active instance filters, selected telemetry metrics views, and interface configurations.
        </li>
      </ul>

      <h2>4. Cookie Classification Table</h2>
      <div className="my-6 overflow-x-auto rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-surface)]">
        <table className="w-full min-w-[540px] text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-[var(--color-hairline)] bg-[var(--color-surface-soft)] text-[var(--color-ink)] font-semibold">
              <th className="p-3">Domain</th>
              <th className="p-3">Cookie / Storage Key</th>
              <th className="p-3">Category</th>
              <th className="p-3">Purpose</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-hairline)] text-[var(--color-body)]">
            <tr>
              <td className="p-3 font-mono">liorandb.com</td>
              <td className="p-3 font-mono">None</td>
              <td className="p-3">None</td>
              <td className="p-3">Zero cookies used on the public official marketing website.</td>
            </tr>
            <tr>
              <td className="p-3 font-mono">app.liorandb.com</td>
              <td className="p-3 font-mono">__session_token</td>
              <td className="p-3 text-emerald-600 dark:text-emerald-400 font-semibold">Strictly Essential</td>
              <td className="p-3">Authenticates logged-in developers and verifies dashboard permissions.</td>
            </tr>
            <tr>
              <td className="p-3 font-mono">app.liorandb.com</td>
              <td className="p-3 font-mono">__csrf_token</td>
              <td className="p-3 text-emerald-600 dark:text-emerald-400 font-semibold">Strictly Essential</td>
              <td className="p-3">Protects against Cross-Site Request Forgery attacks.</td>
            </tr>
            <tr>
              <td className="p-3 font-mono">app.liorandb.com</td>
              <td className="p-3 font-mono">theme_preference</td>
              <td className="p-3">Functional</td>
              <td className="p-3">Remembers your dark/light theme mode preference.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>5. How You Can Manage or Disable Cookies</h2>
      <p>
        Most web browsers automatically accept cookies, but you can modify your browser settings to decline or delete cookies at any time:
      </p>
      <ul>
        <li><strong>Google Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data.</li>
        <li><strong>Mozilla Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Enhanced Tracking Protection &amp; Cookies.</li>
        <li><strong>Apple Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data.</li>
        <li><strong>Microsoft Edge:</strong> Settings &gt; Cookies and site permissions &gt; Manage and delete cookies.</li>
      </ul>
      <div className="legal-warning">
        <p>
          <strong>Important Note:</strong> Because cookies on <strong>app.liorandb.com</strong> are strictly essential for authentication and cryptographic security, blocking them will prevent you from logging into your customer dashboard and provisioning database instances.
        </p>
      </div>

      <h2>6. Changes to this Cookies Policy</h2>
      <p>
        We may update this Cookies Policy from time to time to reflect changes in our technology or legal requirements under applicable Indian data privacy regulations. Any updates will be posted on this page with an updated revision date.
      </p>

      <h2>7. Contact &amp; Questions</h2>
      <p>
        If you have any questions or require further clarification regarding our use of cookies or our zero-tracking policy, please contact our team:
      </p>
      <ul>
        <li><strong>Entity:</strong> {siteConfig.legalEntity} (Lioran Group)</li>
        <li><strong>Founder &amp; CTO:</strong> Swaraj Puppalwar</li>
        <li><strong>Support Email:</strong> <Link href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</Link></li>
        <li><strong>General Inquiries:</strong> <Link href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</Link></li>
        <li><strong>Official Website:</strong> <Link href={siteConfig.url}>{siteConfig.url}</Link></li>
        <li><strong>Customer Portal:</strong> <Link href={siteConfig.appUrl} target="_blank">{siteConfig.appUrl}</Link></li>
      </ul>
    </LegalPage>
  );
}
