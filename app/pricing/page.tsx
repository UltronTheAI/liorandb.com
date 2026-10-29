import type { Metadata } from "next";
import { TechnicalPricingPage } from "@/components/site/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Current hourly terms for LioranDB managed infrastructure, with capacity and support distinctions made explicit.",
};

export default function PricingPage() {
  return <TechnicalPricingPage />;
}
