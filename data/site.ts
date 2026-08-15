export const siteConfig = {
  name: "LioranDB",
  title: "LioranDB — A Developer-First Document Database Developed in India",
  description:
    "LioranDB V2 pre-alpha is launched on 16 August 2026. Build with the Rust-powered high-performance database developed in India. Alpha launch coming on 23 October 2026.",
  url: "https://liorandb.com",
  docsUrl: "https://docs.liorandb.com",
  studioUrl: "https://studio.liorandb.com",
  discordUrl: "https://discord.gg/WsWWThjPMp",
  v1GithubUrl: "https://github.com/LioranGroupOfficial",
  orgGithubUrl: "https://github.com/LioranGroupOfficial",
  founderGithubUrl: "https://github.com/UltronTheAI",
  founderImage: "https://avatars.githubusercontent.com/u/79976106?v=4",
  companyUrl: "https://lioransolutions.com",
  preAlphaDate: "16 August 2026",
  alphaLaunchDate: "23 October 2026",
} as const;

export const navItems = [
  ["Product", "#product"],
  ["V2", "#v2"],
  ["Studio", "external:studio"],
  ["Benchmarks", "#benchmarks"],
  ["Why India", "#why-india"],
  ["Founder", "#founder"],
  ["FAQ", "#faq"],
] as const;

export const heroCode = `users.find({ age: 18 })`;

export const heroOutput = `$ users.find({ age: 18 })
[
  {
    name: "Aarav",
    age: 18,
    plan: "pro"
  }
]`;

export const installCommands = {
  docker: "docker run -d --name liorandb -p 27018:27018 -p 27019:27019 -p 27201:27201 -v ldb-data:/var/lib/liorandb/data liorandb/liorandb:pre-alpha",
  cli: "npm i -g @liorandb/cli@1.0.4",
  driver: "npm i @liorandb/driver@2.0.4",
} as const;

export const getStartedSteps = [
  "Start Docker container",
  "Install CLI",
  "Login as admin",
  "Install driver",
  "Write your first query",
  "Deploy to production",
] as const;

export const getStartedCode = `import { LioranDBClient } from "@liorandb/driver";

type User = {
  _id?: string;
  email: string;
  active: boolean;
  age: number;
};

const password = encodeURIComponent("Q7m!Z2x@L9p#R4vK");
const uri = \`liorandb://admin:\${password}@127.0.0.1:27018/default\`;
const client = await LioranDBClient.connect(uri);

try {
  const db = client.db("default");
  const users = db.collection<User>("users");
  
  const insertResult = await users.insertOne({
    email: "ada@example.com",
    active: true,
    age: 31,
  });
  
  const user = await users.findOne({email: "ada@example.com"});
  const activeUsers = await users.find({active: true}).limit(10).toArray();
  
  console.log({
    insertedId: insertResult.insertedId,
    user,
    activeCount: activeUsers.length,
  });
} finally {
  await client.close();
}`;

export const getStartedOutput = `{
  "insertedId": "01K2EXAMPLE",
  "user": {
    "_id": "01K2EXAMPLE",
    "email": "ada@example.com",
    "active": true,
    "age": 31
  },
  "activeCount": 1
}`;

export const apiExplorerTabs = [
  {
    id: "connect",
    label: "Connect",
    code: `import { LioranDBClient } from "@liorandb/driver";

const client = await LioranDBClient.connect(
  "liorandb://admin:password@127.0.0.1:27018/default"
);`,
    output: `// Connected successfully
Client ready to use`,
  },
  {
    id: "insert",
    label: "Insert",
    code: `const users = db.collection("users");

await users.insertOne({
  email: "user@example.com",
  active: true,
  age: 25,
});`,
    output: `{
  "acknowledged": true,
  "insertedId": "01K2ABC123"
}`,
  },
  {
    id: "query",
    label: "Query",
    code: `const user = await users.findOne({
  email: "user@example.com"
});

console.log(user);`,
    output: `{
  "_id": "01K2ABC123",
  "email": "user@example.com",
  "active": true,
  "age": 25
}`,
  },
  {
    id: "index",
    label: "Index",
    code: `await users.createIndex("email");
await users.createTextIndex("email");

const textResults = await users.find({
  $text: { $search: "user" }
}).toArray();`,
    output: `{
  "ok": true,
  "index": "email_1"
}`,
  },
  {
    id: "aggregate",
    label: "Aggregate",
    code: `const pipeline = [
  { $match: { active: true } },
  { $group: { _id: null, count: { $sum: 1 } } }
];

const result = await users.aggregate(pipeline).toArray();`,
    output: `[
  {
    "_id": null,
    "count": 42
  }
]`,
  },
] as const;

export const features = [
  ["Embedded database", "Run directly inside your Node.js process.", "node app.ts"],
  ["Documents", "Store application data naturally without rigid tables.", '{ "plan": "pro" }'],
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
  { label: "Reads/sec", value: 34987, suffix: "" },
  { label: "p50 latency", value: 4.3, suffix: "ms" },
  { label: "p99 latency", value: 31.7, suffix: "ms" },
  { label: "Dataset size", value: 100, suffix: "M docs" },
  { label: "Index health", value: 98.4, suffix: "%" },
] as const;

export const benchmarkDetails = {
  hardware: {
    device: "HP OMEN Gaming Laptop",
    processor: "Intel Core Ultra 7 (14th Generation)",
    cores: "16 Physical Cores",
    memory: "24 GB DDR5 @ 5600 MT/s",
    storage: "NVMe PCIe SSD",
    os: "Windows",
  },
  configuration: {
    language: "Rust",
    nodes: 4,
    partitions: 8,
    workerThreads: 32,
    batchSize: 256,
  },
  features: [
    "Secondary Indexes",
    "Full-Text Search",
    "Write-Ahead Log (WAL)",
    "MVCC",
    "Parallel Read & Write Execution",
  ],
  results: {
    writePerformance: {
      title: "Write Performance",
      throughput: "23K to 25K writes/sec",
      description: "Sustained write throughput across millions of documents with stable WAL group commit behavior.",
      logs: [
        "https://www.liorandb.com/benchmark_ldb/write/writes_log_1m.txt",
        "https://www.liorandb.com/benchmark_ldb/write/writes_log_10m.txt",
        "https://www.liorandb.com/benchmark_ldb/write/writes_other_log_1m.txt",
        "https://www.liorandb.com/benchmark_ldb/write/writes_other_log_10m.txt",
      ],
    },
    readPerformance: {
      title: "Read Performance",
      highlights: ["Primary Key Lookups", "Secondary Index Queries", "Range Queries", "Pagination", "Full Text Search"],
      description: "Low millisecond latency, high parallel throughput, and stable performance under concurrency.",
      logs: [
        "https://www.liorandb.com/benchmark_ldb/read/reads_log_1m.txt",
        "https://www.liorandb.com/benchmark_ldb/read/reads_log_10m.txt",
        "https://www.liorandb.com/benchmark_ldb/read/reads_other_log_1m.txt",
        "https://www.liorandb.com/benchmark_ldb/read/reads_other_log_10m.txt",
      ],
    },
    mixedWorkload: {
      title: "Mixed Workload (Soak Test)",
      target: "~35K Total Operations/sec",
      writeOps: "~10K writes/sec",
      readOps: "~25K reads/sec",
      description: "Continuous mixed workload testing for long-running stability rather than peak numbers.",
      log: "https://www.liorandb.com/benchmark_ldb/soak/soak_10m.txt",
    },
    crashRecovery: {
      title: "Crash Recovery Test",
      description: "Repeated forced crashes during active writes to verify WAL recovery, metadata consistency, duplicate prevention, and missing document detection.",
      log: "https://www.liorandb.com/benchmark_ldb/crash/crash_test_1m_9c.txt",
    },
  },
  logsUrl: "https://dev.to/ultrontheai/liorandb-v2-pre-alpha-benchmark-summary-4nfb",
} as const;

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
    title: "V2 pre-alpha • Launched",
    items: [
      "Rust storage engine",
      "B+ tree and MVCC",
      "LSM secondary indexes",
      "Text inverted index",
      "Crash recovery",
      "Docker deployment",
    ],
  },
  {
    title: "V2 Alpha • 23 October 2026",
    items: [
      "Larger dataset testing",
      "Driver ecosystem",
      "gRPC and REST APIs",
      "Managed deployment templates",
      "Production hardening",
      "Performance optimization",
    ],
  },
  {
    title: "V2 Future",
    items: [
      "Replication and clustering",
      "Sharding and partitioning",
      "Advanced monitoring",
      "Backup and restore",
      "Enterprise features",
      "Community contributions",
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
    "LioranDB is a developer-first document database developed in India. V2 is a high-performance Rust-powered engine launched as pre-alpha on 16 August 2026.",
  ],
  [
    "Is LioranDB production-ready?",
    "LioranDB V2 pre-alpha is launched and available for developers to evaluate. This is an early release. Teams should test it carefully against their own reliability, durability and workload requirements. Alpha launch is scheduled for 23 October 2026.",
  ],
  [
    "When will LioranDB V2 launch?",
    "The V2 pre-alpha is now live as of 16 August 2026. Alpha launch is planned for 23 October 2026.",
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
      ["Docs", siteConfig.docsUrl],
      ["V2 GitHub", siteConfig.v1GithubUrl],
      ["Discord", siteConfig.discordUrl],
      ["Roadmap", "#roadmap"],
    ],
  },
  {
    title: "Community",
    links: [
      ["Join Discord", siteConfig.discordUrl],
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
