import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal/legal-page";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us — LioranDB",
  description:
    "Contact information, support channels, and operating hours for LioranDB and Lioran Developer Solutions.",
};

export default function ContactPage() {
  return (
    <LegalPage
      title="Contact Us"
      intro="Get in touch with the LioranDB engineering team and founder for technical support, managed database provisioning, billing inquiries, and enterprise architecture consulting."
    >
      <div className="legal-highlight">
        <p>
          <strong>Direct Founder &amp; Engineering Support:</strong> We provide hands-on, direct developer support from our core engineering team led by Founder &amp; CTO Swaraj Puppalwar.
        </p>
      </div>

      <h2>Official Contact Information</h2>
      <table>
        <tbody>
          <tr>
            <th>Business Entity</th>
            <td>{siteConfig.legalEntity} (Lioran Group)</td>
          </tr>
          <tr>
            <th>Founder &amp; CTO</th>
            <td>Swaraj Puppalwar</td>
          </tr>
          <tr>
            <th>Technical Support Email</th>
            <td>
              <Link href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</Link>
            </td>
          </tr>
          <tr>
            <th>Business &amp; Enterprise Email</th>
            <td>
              <Link href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</Link>
            </td>
          </tr>
          <tr>
            <th>Customer Dashboard</th>
            <td>
              <Link href={siteConfig.appUrl} target="_blank">{siteConfig.appUrl}</Link>
            </td>
          </tr>
          <tr>
            <th>Primary Website</th>
            <td>
              <Link href={siteConfig.url}>{siteConfig.url}</Link>
            </td>
          </tr>
          <tr>
            <th>Operating Jurisdiction</th>
            <td>Maharashtra, India</td>
          </tr>
        </tbody>
      </table>

      <h2>Support Schedule &amp; Working Hours</h2>
      <ul>
        <li>
          <strong>Support Operating Window:</strong> Monday to Friday, <strong>6:00 PM to 10:00 PM IST (4 hours nightly)</strong>.
        </li>
        <li>
          <strong>Weekends &amp; Holidays:</strong> Closed on Saturdays and Sundays. Support requests received during non-business hours are prioritized the next business evening.
        </li>
        <li>
          <strong>Typical Response Time:</strong> Within 4 to 12 hours during business operational days.
        </li>
      </ul>

      <h2>Developer Community &amp; Real-Time Channels</h2>
      <p>
        For fast community support, architecture discussions, and pre-alpha development updates:
      </p>
      <ul>
        <li>
          <strong>Discord Community:</strong> Join our active developer channel at{" "}
          <Link href={siteConfig.discordUrl} target="_blank" rel="noreferrer">
            {siteConfig.discordUrl}
          </Link>
        </li>
        <li>
          <strong>GitHub Organization:</strong> Track development and open source issues at{" "}
          <Link href={siteConfig.orgGithubUrl} target="_blank" rel="noreferrer">
            {siteConfig.orgGithubUrl}
          </Link>
        </li>
        <li>
          <strong>Founder GitHub:</strong>{" "}
          <Link href={siteConfig.founderGithubUrl} target="_blank" rel="noreferrer">
            {siteConfig.founderGithubUrl}
          </Link>
        </li>
      </ul>
    </LegalPage>
  );
}

