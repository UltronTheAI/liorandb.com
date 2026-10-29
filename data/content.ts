export const siteConfig = {
  name: "LioranDB",
  title: "LioranDB — Document storage, built for engineers.",
  description:
    "A Rust-powered document database for backend applications, practical operations, transparent performance engineering, and official JavaScript and TypeScript SDK support.",
  url: "https://liorandb.com",
  appUrl: "https://app.liorandb.com",
  docsUrl: "https://docs.liorandb.com",
  studioUrl: "https://studio.liorandb.com",
  orgGithubUrl: "https://github.com/LioranGroupOfficial",
  githubRepo: "LioranGroupOfficial/Liorandb",
  githubUrl: "https://github.com/LioranGroupOfficial/Liorandb",
  discordUrl: "https://discord.gg/WsWWThjPMp",
  companyUrl: "https://lioransolutions.com",
  supportEmail: "support@liorandb.com",
  contactEmail: "contact@lioransolutions.com",
  legalEntity: "Lioran Developer Solutions",
  supportHours: "6:00 PM – 10:00 PM IST (Mon to Fri, Sat & Sun off)",
  preAlphaDate: "16 August 2026",
  alphaLaunchDate: "23 October 2026",
} as const;

export type NavGroup = {
  label: string;
  href: string;
  items: ReadonlyArray<{ label: string; href: string; external?: boolean }>;
};

export const navGroups: ReadonlyArray<NavGroup> = [
  {
    label: "Product",
    href: "/features",
    items: [
      { label: "Features", href: "/features" },
      { label: "Architecture", href: "/architecture" },
      { label: "Cloud", href: "/cloud" },
      { label: "Deployment", href: "/deployment" },
    ],
  },
  {
    label: "Developers",
    href: "/developers",
    items: [
      { label: "Getting started", href: "/developers" },
      { label: "Drivers", href: "/drivers" },
      { label: "Documentation", href: siteConfig.docsUrl, external: true },
      { label: "Studio", href: siteConfig.studioUrl, external: true },
    ],
  },
  {
    label: "Resources",
    href: "/community",
    items: [
      { label: "Changelog", href: "/changelog" },
      { label: "Community", href: "/community" },
      { label: "GitHub", href: siteConfig.githubUrl, external: true },
    ],
  },
  {
    label: "Benchmarks",
    href: "/benchmarks",
    items: [
      { label: "Results", href: "/benchmarks" },
      { label: "Methodology", href: "/benchmarks/methodology" },
    ],
  },
];

export const navItems = [
  ["Product", "/features"],
  ["Developers", "/developers"],
  ["Benchmarks", "/benchmarks"],
  ["Pricing", "/pricing"],
  ["Docs", siteConfig.docsUrl],
] as const;

export const footerColumns = [
  {
    title: "Product",
    links: [["Features", "/features"], ["Architecture", "/architecture"], ["Cloud", "/cloud"], ["Deployment", "/deployment"]],
  },
  {
    title: "Developers",
    links: [["Get started", "/developers"], ["Drivers", "/drivers"], ["Documentation", siteConfig.docsUrl], ["Studio", siteConfig.studioUrl]],
  },
  {
    title: "Resources",
    links: [["Benchmarks", "/benchmarks"], ["Methodology", "/benchmarks/methodology"], ["Changelog", "/changelog"], ["Community", "/community"], ["GitHub", siteConfig.githubUrl]],
  },
  {
    title: "Legal",
    links: [["Terms", "/terms"], ["Privacy", "/privacy"], ["Cookies", "/cookies"], ["Refund policy", "/refund"], ["Shipping", "/shipping"], ["License", "/license"]],
  },
] as const;

export const installCommands = {
  docker:
    "docker run -d --name liorandb -p 27018:27018 -p 27019:27019 -p 27201:27201 -v ldb-data:/var/lib/liorandb/data liorandb/liorandb:pre-alpha",
  cli: "npm install -g @liorandb/cli",
  driver: "npm install @liorandb/driver",
} as const;

export const localDeveloperWorkflow = `${installCommands.docker}\n\n${installCommands.driver}\nnode index.ts`;

export const getStartedCode = `import { LioranDBClient } from "@liorandb/driver";

const client = await LioranDBClient.connect(
  process.env.LIORANDB_URI ??
    "liorandb://admin:password@127.0.0.1:27018/default",
);

try {
  const users = client.db("default").collection("users");
  await users.insertOne({ email: "ada@example.com", active: true, age: 31 });
  const user = await users.findOne({ email: "ada@example.com" });
  console.log(user);
} finally {
  await client.close();
}`;

export const featureGroups = [
  { title: "Document API", description: "Collections, familiar query operators, updates, pagination, and aggregation for application data.", status: "documented", details: ["MongoDB-style document model", "JavaScript and TypeScript SDK", "Collections and indexes"] },
  { title: "Storage engine", description: "A Rust-based engine with WAL and checkpoint paths exposed as part of the V2 architecture direction.", status: "implemented / pre-alpha", details: ["Rust engine", "WAL and checkpoints", "Persistent local storage"] },
  { title: "Search and indexing", description: "Secondary and text indexing are available in documented V2 test paths; workload-specific behavior matters.", status: "available in test paths", details: ["Secondary indexes", "Text index", "Compaction and recovery paths"] },
  { title: "Operations", description: "Run locally with Docker, connect through the dashboard, or review managed deployment options.", status: "documented", details: ["Docker quickstart", "CLI package", "Managed provisioning"] },
  { title: "Transport", description: "The official docs describe JavaScript and TypeScript SDK, gRPC, and REST access paths. Verify endpoint details against the docs for your version.", status: "version-sensitive", details: ["JavaScript / TypeScript SDK", "gRPC endpoint", "REST endpoint"] },
  { title: "Recovery", description: "WAL replay and recovery are part of the documented V2 test surface; durability semantics depend on the configured path.", status: "tested / pre-alpha", details: ["WAL replay", "Crash-recovery test artifacts", "Checkpoint lifecycle"] },
] as const;

export const architectureFlow = [
  ["01", "Client request", "JavaScript / TypeScript SDK, REST, or gRPC"],
  ["02", "Document API", "Collections, filters, updates, and query execution"],
  ["03", "Storage paths", "Primary storage plus configured secondary/text indexes"],
  ["04", "Durability", "WAL and checkpoint lifecycle"],
  ["05", "Persistent state", "Local or managed deployment storage"],
] as const;

export type BenchmarkStatus = "observed" | "calculated" | "unrecorded";
export type BenchmarkMetric = { id: string; label: string; value: number | null; display: string; unit: string; status: BenchmarkStatus; note: string };

export const benchmarkData = {
  title: "Local development workload",
  evidenceStatus: "user-reported development measurement; raw artifacts for the matched comparison are pending publication",
  sourceNotes: [
    "Observed on an HP Omen Windows laptop. Exact CPU, SSD, Windows build, MongoDB version, and Docker environment were not recorded in the supplied result set. The comparison reports approximately 4 GiB of RAM for the MongoDB run, but the measurement method and whether this means host capacity or process usage were not recorded.",
    "The LioranDB and MongoDB values below are scoped to the supplied local comparison and are not certified independent benchmarks or representative production performance.",
    "The repository contains related LioranDB logs, but they use different workload configurations; they are linked as adjacent evidence, not treated as the matched comparison source.",
  ],
  workload: {
    documents: "10,000,000",
    collection: "Single collection",
    documentShape: "{ username, age }",
    liorandbIndexes: "Secondary and text indexes disabled",
    liorandbBatch: "512",
    liorandbWorkers: "1 worker thread as reported",
    liorandbNodes: "1 internal node",
    liorandbPartitions: "1 partition",
    durability: "WAL enabled; checkpointing enabled",
  },
  liorandb: { peakWrites: 300000, averageWrites: 277777.78, writeSeconds: 36, reads: 35000, memoryGiB: 3.5, imageMb: 45 },
  mongodb: { documentShape: "{ username, age }", indexes: "Secondary and text indexes disabled", writes: 25000, writeSeconds: 400, reads: 16000, memoryGiB: 4, imageMb: 164, environment: "Official MongoDB installation on the same Windows laptop; not Atlas" },
  comparisons: { peakWriteRatio: 12, ingestionSpeedup: 11.11, readRatio: 2.1875, imageRatio: 3.6444, imageReductionPercent: 72.6 },
  metrics: [
    { id: "peak-write", label: "Peak raw writes", value: 300000, display: "300K", unit: "docs/sec", status: "observed", note: "LioranDB peak/observed rate in the supplied local result." },
    { id: "average-write", label: "Full-run average", value: 277777.78, display: "277,778", unit: "docs/sec", status: "calculated", note: "10,000,000 documents divided by 36 seconds." },
    { id: "completion-time", label: "10M completion", value: 36, display: "36", unit: "seconds", status: "observed", note: "End-to-end insertion time reported for LioranDB." },
    { id: "read-throughput", label: "Observed reads", value: 35000, display: "35K", unit: "reads/sec", status: "observed", note: "Query shape, indexing, thread count, cache state, and durability settings were not recorded." },
  ] satisfies ReadonlyArray<BenchmarkMetric>,
  artifacts: [
    { label: "Related LioranDB write log", href: "/benchmark_ldb/write/writes_log_10m.txt" },
    { label: "Related LioranDB read log", href: "/benchmark_ldb/read/reads_log_10m.txt" },
    { label: "Crash-recovery artifact", href: "/benchmark_ldb/crash/crash_test_1m_9c.txt" },
  ],
} as const;

export const driverMatrix = [
  { name: "JavaScript", packageName: "@liorandb/driver", install: "npm install @liorandb/driver", status: "official SDK", href: siteConfig.docsUrl },
  { name: "TypeScript", packageName: "@liorandb/driver", install: "npm install @liorandb/driver", status: "official SDK", href: siteConfig.docsUrl },
  { name: "CLI", packageName: "@liorandb/cli", install: "npm install -g @liorandb/cli", status: "documented tooling", href: siteConfig.docsUrl },
] as const;

export const pricingPlans = [
  { id: "starter", name: "Starter", price: "₹1", unit: "/ hour", monthly: "~₹720 / month at 720 hours", description: "For testing, prototypes, and lightweight development instances.", highlights: ["Up to 100K documents", "3,000 total ops/sec", "No automated backups"], features: ["1,000 writes/sec + 2,000 reads/sec", "Managed instance", "MongoDB-compatible driver and JavaScript / TypeScript SDK", "gRPC and REST endpoint access", "Community and email support"], cta: "Open dashboard" },
  { id: "dedicated", name: "Dedicated Server", price: "₹8", unit: "/ hour", monthly: "~₹5,760 / month at 720 hours", description: "For production workloads that need isolated compute and daily snapshots.", highlights: ["Up to 1M documents", "45,000 total ops/sec", "Daily automated snapshots"], features: ["10,000 writes/sec + 35,000 reads/sec", "Dedicated single-node cloud compute and NVMe storage", "MongoDB-compatible driver and JavaScript / TypeScript SDK", "gRPC and REST endpoint access", "Workload review and indexing assistance", "Support: 6:00 PM–10:00 PM IST, Mon–Fri"], cta: "Request deployment" },
] as const;

export const changelogEntries = [
  { date: "2026-10-23", tag: "V2 alpha", title: "Alpha release track opened", body: "The V2 alpha track is now the reference point for compatibility and deployment updates. Check the maintained docs for version-specific commands." },
  { date: "2026-08-16", tag: "V2 pre-alpha", title: "Rust engine pre-alpha released", body: "The V2 Rust engine became available for local Docker evaluation, driver work, and development benchmarking." },
] as const;
