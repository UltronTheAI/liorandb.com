import { ArrowDown } from "lucide-react";
import { architectureFlow } from "@/data/content";

export function ArchitectureDiagram() {
  return <div className="architecture-diagram" aria-label="LioranDB request and storage flow diagram">{architectureFlow.map(([number, title, detail], index) => <div key={number} className="architecture-step"><div className="architecture-step__number">{number}</div><div><p className="font-semibold text-[var(--color-ink)]">{title}</p><p className="mt-1 text-sm leading-6 text-[var(--color-body)]">{detail}</p></div>{index < architectureFlow.length - 1 && <ArrowDown className="architecture-step__arrow" size={16} aria-hidden="true" />}</div>)}</div>;
}
