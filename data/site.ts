export const siteConfig = {
  name: "LioranDB",
  title: "LioranDB — A Developer-First Document Database Built in India",
  description:
    "LioranDB is a developer-first JSON document database built in India. Explore the live Node.js embedded database and follow the Rust-powered V2 pre-alpha launching on 16 August 2026.",
  url: "https://liorandb.com",
  docsUrl: "https://db.lioransolutions.com",
  discordUrl: "https://discord.gg/WsWWThjPMp",
  v1GithubUrl: "https://github.com/LioranGroupOfficial/Liorandb/tree/core",
  orgGithubUrl: "https://github.com/LioranGroupOfficial",
  founderGithubUrl: "https://github.com/UltronTheAI",
  founderImage: "https://avatars.githubusercontent.com/u/79976106?v=4",
  companyUrl: "https://lioransolutions.com",
  preAlphaDate: "16 August 2026",
} as const;

export const navItems = [
  ["Product", "#product"],
  ["V1", "#v1"],
  ["V2", "#v2"],
  ["Benchmarks", "#benchmarks"],
  ["Why India", "#why-india"],
  ["Founder", "#founder"],
  ["FAQ", "#faq"],
] as const;

export const heroCode = `import { LioranManager } from "@liorandb/core";

const manager = new LioranManager({
  rootPath: "./data",
});

const db = await manager.db("startup");
const users = db.collection("users");

await users.insertOne({
  name: "Aarav",
  plan: "pro",
  region: "IN",
});

const user = await users.findOne({
  plan: "pro",
});

console.log(user);`;

export const heroOutput = `{
  "_id": "b2c6b5d8-6f3f-4d4b-8d52-2a1c6f6f9b0e",
  "name": "Aarav",
  "plan": "pro",
  "region": "IN",
  "__v": 1
}`;

export const installCommands = {
  npm: "npm install @liorandb/core",
  pnpm: "pnpm add @liorandb/core",
  yarn: "yarn add @liorandb/core",
} as const;

export const getStartedSteps = [
  "Create manager",
  "Open database",
  "Create collection",
  "Insert document",
  "Query document",
  "Close cleanly",
] as const;

export const getStartedCode = `import { LioranManager } from "@liorandb/core";

const manager = new LioranManager({
  rootPath: "./.liorandb",
});

const db = await manager.db("app");

const users = db.collection<{
  _id?: string;
  email: string;
  plan: "free" | "pro";
}>("users");

await users.insertOne({
  email: "founder@startup.in",
  plan: "free",
});

const found = await users.findOne({
  email: "founder@startup.in",
});

console.log(found);

await manager.close();`;

export const getStartedOutput = `{
  "_id": "b2c6b5d8-6f3f-4d4b-8d52-2a1c6f6f9b0e",
  "email": "founder@startup.in",
  "plan": "free",
  "__v": 1
}`;

export const apiExplorerTabs = [
  {
    id: "insert",
    label: "Insert",
    code: `await items.insertMany([
  { sku: "A", qty: 10 },
  { sku: "B", qty: 2 },
  { sku: "C", qty: 25 },
]);`,
    output: `{
  "acknowledged": true,
  "insertedCount": 3
}`,
  },
  {
    id: "query",
    label: "Query",
    code: `const item = await items.findOne({
  sku: "A",
});

console.log(item);`,
    output: `{
  "sku": "A",
  "qty": 10
}`,
  },
  {
    id: "update",
    label: "Update",
    code: `await items.updateOne(
  { sku: "B" },
  { $inc: { qty: 5 } }
);`,
    output: `{
  "matchedCount": 1,
  "modifiedCount": 1
}`,
  },
  {
    id: "pagination",
    label: "Pagination",
    code: `const page = await items.find(
  { qty: { $gte: 5 } },
  { limit: 2, offset: 0 }
);

console.log(
  page.map(item => ({
    sku: item.sku,
    qty: item.qty,
  }))
);`,
    output: `[
  { "sku": "A", "qty": 10 },
  { "sku": "B", "qty": 7 }
]`,
  },
  {
    id: "indexes",
    label: "Indexes",
    code: `await users.createIndex({
  email: 1,
  plan: 1,
});`,
    output: `{
  "ok": true,
  "index": "email_1_plan_1"
}`,
  },
  {
    id: "transactions",
    label: "Transactions",
    code: `await manager.transaction(async (tx) => {
  const orders = tx.collection("orders");
  const inventory = tx.collection("inventory");

  await orders.insertOne({ sku: "A", qty: 1 });
  await inventory.updateOne(
    { sku: "A" },
    { $inc: { qty: -1 } }
  );
});`,
    output: `{
  "committed": true,
  "operations": 2
}`,
  },
] as const;

export const features = [
  ["Embedded database", "Run directly inside your Node.js process.", "node app.ts"],
  ["JSON documents", "Store application data naturally without rigid tables.", '{ "plan": "pro" }'],
  ["MongoDB-style API", "Use familiar collections, queries and update operators.", "db.collection('users')"],
  ["Write-ahead log", "Protect committed data with durable operation logging.", "wal/segment-0001.log"],
  ["Collections", "Keep application domains isolated and organized.", "users  sessions  orders"],
  ["Query operators", "Use operators including $gte, $in, $set and $inc.", "{ qty: { $gte: 5 } }"],
  ["Pagination", "Page through results using limit and offset.", "{ limit: 20, offset: 0 }"],
  ["Snapshots and restore", "Create recoverable database snapshots.", "snapshots/2026-08-14"],
  ["Indexes", "Accelerate common application queries.", "email_1_plan_1"],
  ["Transactions", "Group related operations safely.", "BEGIN -> COMMIT"],
  ["Compaction", "Reclaim space and maintain storage efficiency.", "compact --rewrite"],
  ["Encryption support", "Protect stored data and rotate encryption keys.", "kms.rotateKey()"],
] as const;

export const storageRules = [
  "Uses process.env.LIORANDB_PATH when configured",
  "Otherwise uses ~/LioranDB/db",
  "Custom paths can be passed using rootPath",
] as const;

export const architectureFlow = [
  "Applications",
  "LioranDB Query Layer",
  "Transactions + MVCC",
  "Primary B+ Tree",
  "WAL + Checkpoints",
  "Page Cache",
  "Persistent Storage",
] as const;

export const architectureSideSystems = [
  "Secondary Index LSM",
  "Text Inverted Index",
  "Compaction",
  "Recovery",
  "Metrics",
  "Encryption",
] as const;

export const v2Cards = [
  "Rust storage engine",
  "MVCC transactions",
  "WAL and recovery",
  "B+ tree primary storage",
  "LSM secondary indexes",
  "Inverted text search",
] as const;

export const benchmarkMetrics = [
  { label: "Writes/sec", value: 25140, suffix: "" },
  { label: "Reads/sec", value: 19870, suffix: "" },
  { label: "p50 latency", value: 4.3, suffix: "ms" },
  { label: "p99 latency", value: 31.7, suffix: "ms" },
  { label: "Dataset size", value: 100, suffix: "M docs" },
  { label: "Index health", value: 98.4, suffix: "%" },
] as const;

export const indiaPillars = [
  [
    "Data sovereignty",
    "Give teams the option to keep application data on infrastructure they control, including infrastructure located in India.",
  ],
  [
    "Infrastructure independence",
    "Reduce dependency on a small number of foreign database and cloud vendors.",
  ],
  [
    "Built for Indian developers",
    "Simple deployment, transparent architecture, founder-led support and pricing designed with Indian startups in mind.",
  ],
] as const;

export const useCases = [
  ["SaaS platforms", "tenants, billing, feature_flags", "{ tenantId: 'acme' }", "Keep product data close to the app runtime."],
  ["AI applications", "runs, vectors_meta, prompts", "{ model: 'custom' }", "Log structured model activity without extra services."],
  ["CRM systems", "contacts, notes, pipelines", "{ ownerId: 'sales-1' }", "Iterate on schema as workflows evolve."],
  ["Internal developer tools", "jobs, tokens, audit", "{ status: 'queued' }", "Stay self-hosted for sensitive ops tooling."],
  ["APIs and backend services", "sessions, webhooks, caches", "{ region: 'IN' }", "Ship lightweight persistence directly in Node.js."],
  ["Local-first applications", "drafts, sync_queue, profiles", "{ device: 'laptop' }", "Keep data available close to the user."],
  ["Prototypes growing into real products", "leads, events, config", "{ stage: 'seed' }", "Start simple without throwing away the model later."],
  ["Data-intensive startup workloads", "orders, metrics, jobs", "{ qty: { $gte: 100 } }", "Track the path toward larger Rust-powered workloads."],
] as const;

export const roadmap = [
  {
    title: "V1 • Live",
    items: [
      "Embedded Node.js database",
      "JSON documents",
      "WAL",
      "MongoDB-style queries",
      "Indexes, transactions and snapshots",
    ],
  },
  {
    title: "V2 development • Current",
    items: [
      "Rust storage engine",
      "B+ tree and MVCC",
      "LSM secondary indexes",
      "Text inverted index",
      "Crash recovery",
      "Performance stabilization",
    ],
  },
  {
    title: "16 August 2026 • Pre-alpha",
    items: [
      "Early developer access",
      "Community testing",
      "Benchmark feedback",
      "API validation",
    ],
  },
  {
    title: "After pre-alpha",
    items: [
      "Larger dataset testing",
      "Driver ecosystem",
      "Managed deployment experiments",
      "Replication and clustering research",
      "Production hardening",
    ],
  },
] as const;

export const founderSkills = [
  "Rust",
  "TypeScript",
  "Storage engines",
  "Databases",
  "Distributed systems",
  "Developer infrastructure",
] as const;

export const faqs = [
  [
    "What is LioranDB?",
    "LioranDB is a developer-first JSON document database built in India. V1 is available as an embedded Node.js database, while V2 is a new high-performance engine under development in Rust.",
  ],
  [
    "Is LioranDB production-ready?",
    "LioranDB V1 is live and available for developers to evaluate. Teams should test it carefully against their own reliability, durability and workload requirements. V2 is under development and its August 2026 release will be a pre-alpha, not a production release.",
  ],
  [
    "When will LioranDB V2 launch?",
    "The V2 pre-alpha is planned for 16 August 2026.",
  ],
  [
    "Is LioranDB open source?",
    "The V1 source is publicly accessible on GitHub. Broader licensing claims should be verified against the repository’s current license.",
  ],
  [
    "Does LioranDB use MongoDB internally?",
    "No. LioranDB provides a familiar MongoDB-style document API, but it uses its own storage implementation.",
  ],
  [
    "Where is data stored in V1?",
    "LioranDB Embedded stores databases and collections in local directories. Developers may use the default path, an environment variable or a custom rootPath.",
  ],
  [
    "What language is V2 written in?",
    "The V2 storage engine is being developed in Rust.",
  ],
  [
    "Is LioranDB officially supported by the Indian government?",
    "No. LioranDB is an independent product. Its mission is aligned with the broader goal of strengthening India’s domestic developer infrastructure and giving teams more control over where their data is stored.",
  ],
  [
    "Can I join the pre-alpha?",
    "Yes. Join the Discord community to follow development and future pre-alpha announcements.",
  ],
  [
    "Who is building LioranDB?",
    "LioranDB is led by Swaraj Puppalwar, Founder & CTO of Lioran Group, alongside contributors and the Lioran Developer Solutions ecosystem.",
  ],
] as const;

export const footerColumns = [
  {
    title: "Product",
    links: [
      ["V1 Docs", siteConfig.docsUrl],
      ["V1 GitHub", siteConfig.v1GithubUrl],
      ["V2 Development", "#v2"],
      ["Roadmap", "#roadmap"],
    ],
  },
  {
    title: "Community",
    links: [
      ["Discord", siteConfig.discordUrl],
      ["GitHub Organization", siteConfig.orgGithubUrl],
      ["Report an Issue", siteConfig.v1GithubUrl],
    ],
  },
  {
    title: "Company",
    links: [
      ["Lioran Developer Solutions", siteConfig.companyUrl],
      ["Lioran Group", siteConfig.companyUrl],
      ["Founder", "#founder"],
    ],
  },
  {
    title: "Legal",
    links: [["License", "/license"], ["Privacy", "/privacy"], ["Terms", "/terms"]],
  },
] as const;
