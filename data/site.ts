export const siteConfig = {
  name: "LioranDB",
  title: "LioranDB — A Developer-First Document Database Developed in India",
  description:
    "LioranDB V2 pre-alpha is launched on 16 August 2026, tested by 10+ developers with 3 real feedbacks. Build with the Rust-powered high-performance database developed in India. Alpha launch coming on 23 October 2026.",
  url: "https://liorandb.com",
  appUrl: "https://app.liorandb.com",
  docsUrl: "https://docs.liorandb.com",
  studioUrl: "https://studio.liorandb.com",
  discordUrl: "https://discord.gg/WsWWThjPMp",
  v1GithubUrl: "https://github.com/LioranGroupOfficial/Liorandb-V1",
  orgGithubUrl: "https://github.com/LioranGroupOfficial",
  founderGithubUrl: "https://github.com/UltronTheAI",
  githubRepo: "LioranGroupOfficial/Liorandb-V1",
  founderImage: "https://avatars.githubusercontent.com/u/79976106?v=4",
  companyUrl: "https://lioransolutions.com",
  supportEmail: "support@liorandb.com",
  contactEmail: "contact@lioransolutions.com",
  legalEntity: "Lioran Developer Solutions",
  supportHours: "6:00 PM – 10:00 PM IST (Mon to Fri, Sat & Sun off)",
  preAlphaDate: "16 August 2026",
  alphaLaunchDate: "23 October 2026",
} as const;

export const trustedPartners = [
  {
    name: "Lioran Social",
    role: "Currently used by",
    badge: "Production User",
    logo: "/ls.png",
    description: "Powering real-world social data & user feeds",
    darkLogo: false,
  },
  {
    name: "Lioran Group",
    role: "Currently used by",
    badge: "Ecosystem Core",
    logo: "/lg.png",
    description: "Core developer platform & infrastructure",
    darkLogo: true,
  },
  {
    name: "The Masala Media",
    role: "Social media managed by",
    badge: "Official Agency",
    logo: "/tmm.png",
    description: "Brand & social media management operations",
    darkLogo: false,
  },
] as const;

export const navItems = [
  ["Product", "/#product"],
  ["Pricing", "/pricing"],
  ["About", "/about"],
  ["Founder", "/founder"],
  ["Benchmarks", "/#benchmarks"],
  ["Docs", "https://docs.liorandb.com"],
] as const;

export const heroCollections = [
  {
    id: "users",
    name: "users",
    docs: 1284,
    code: `users.find({ age: 18 })`,
    output: `$ users.find({ age: 18 })
[
  {
    name: "Aarav",
    age: 18,
    plan: "pro",
    city: "Bengaluru"
  },
  {
    name: "Meera",
    age: 18,
    plan: "starter",
    city: "Pune"
  }
]`,
    runtime: "4.8ms",
    checkpoint: "11s",
  },
  {
    id: "sessions",
    name: "sessions",
    docs: 8421,
    code: `sessions.find({ active: true })`,
    output: `$ sessions.find({ active: true })
[
  {
    userId: "usr_9f2a",
    device: "macOS",
    active: true,
    lastSeen: "2026-09-06T18:42:11Z"
  },
  {
    userId: "usr_3c1b",
    device: "Android",
    active: true,
    lastSeen: "2026-09-06T18:41:58Z"
  }
]`,
    runtime: "3.2ms",
    checkpoint: "8s",
  },
  {
    id: "orders",
    name: "orders",
    docs: 3560,
    code: `orders.find({ status: "paid" })`,
    output: `$ orders.find({ status: "paid" })
[
  {
    id: "ord_1042",
    total: 2499,
    currency: "INR",
    status: "paid",
    items: 3
  },
  {
    id: "ord_1048",
    total: 899,
    currency: "INR",
    status: "paid",
    items: 1
  }
]`,
    runtime: "5.1ms",
    checkpoint: "14s",
  },
  {
    id: "products",
    name: "products",
    docs: 412,
    code: `products.find({ inStock: true })`,
    output: `$ products.find({ inStock: true })
[
  {
    sku: "ldb-pro-01",
    name: "LioranDB Pro",
    price: 1999,
    inStock: true
  },
  {
    sku: "ldb-starter",
    name: "Starter Plan",
    price: 0,
    inStock: true
  }
]`,
    runtime: "2.9ms",
    checkpoint: "6s",
  },
] as const;

export const heroCode = heroCollections[0].code;
export const heroOutput = heroCollections[0].output;

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
        "/benchmark_ldb/write/writes_log_1m.txt",
        "/benchmark_ldb/write/writes_log_10m.txt",
        "/benchmark_ldb/write/writes_other_log_1m.txt",
        "/benchmark_ldb/write/writes_other_log_10m.txt",
      ],
    },
    readPerformance: {
      title: "Read Performance",
      highlights: ["Primary Key Lookups", "Secondary Index Queries", "Range Queries", "Pagination", "Full Text Search"],
      description: "Low millisecond latency, high parallel throughput, and stable performance under concurrency.",
      logs: [
        "/benchmark_ldb/read/reads_log_1m.txt",
        "/benchmark_ldb/read/reads_log_10m.txt",
        "/benchmark_ldb/read/reads_other_log_1m.txt",
        "/benchmark_ldb/read/reads_other_log_10m.txt",
      ],
    },
    mixedWorkload: {
      title: "Mixed Workload (Soak Test)",
      target: "~35K Total Operations/sec",
      writeOps: "~10K writes/sec",
      readOps: "~25K reads/sec",
      description: "Continuous mixed workload testing for long-running stability rather than peak numbers.",
      log: "/benchmark_ldb/soak/soak_10m.txt",
    },
    crashRecovery: {
      title: "Crash Recovery Test",
      description: "Repeated forced crashes during active writes to verify WAL recovery, metadata consistency, duplicate prevention, and missing document detection.",
      log: "/benchmark_ldb/crash/crash_test_1m_9c.txt",
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
    "What is LioranDB V2?",
    "LioranDB V2 is a developer-first document database developed in India. It features a high-performance Rust storage engine launched as pre-alpha on 16 August 2026, with the Alpha release coming on 23 October 2026.",
  ],
  [
    "How does the Managed Database Hosting work?",
    "Managed Database Hosting is available in two predictable hourly pricing plans: the Starter Plan at ₹1/hour (up to 100K docs, 3K ops/sec, no backups) for lightweight development, and the Dedicated Server at ₹8/hour (up to 1M docs, 45K ops/sec, automated daily backups) for production workloads. You can request instances instantly via app.liorandb.com.",
  ],
  [
    "What is the difference between the ₹1/hr and ₹8/hr plans?",
    "The ₹1/hr Starter Plan is built for testing, side projects, and early development with up to 100,000 documents and 3,000 ops/sec (1,000 writes/sec + 2,000 reads/sec) without automated backups. The ₹8/hr Dedicated Server Plan provides a dedicated cloud server, up to 1,000,000 documents, 45,000 ops/sec (10,000 writes/sec + 35,000 reads/sec), automated daily backups, and direct founder engineering support.",
  ],
  [
    "What is the service provisioning & digital delivery timeline?",
    "LioranDB is 100% digital cloud infrastructure. After you submit your database request on app.liorandb.com and complete activation, dedicated database instances and connection credentials are electronically provisioned within 1 to 24 hours.",
  ],
  [
    "What is your cancellation and refund policy?",
    "Because dedicated cloud computing, NVMe storage, and engineering setup time are allocated immediately upon provisioning, all subscriptions are subject to a strict No-Refund Policy. However, you can cancel your subscription renewal at any time directly from the dashboard before the next billing date.",
  ],
  [
    "What are the official support hours?",
    "Direct founder and core engineering support is available Monday through Friday from 6:00 PM to 10:00 PM IST (4 hours daily). We are closed on Saturdays and Sundays. Support is handled via the dashboard, official email (support@liorandb.com), and our Discord developer community.",
  ],
  [
    "Is LioranDB V2 open source?",
    "No. LioranDB V2 is currently a proprietary product in its pre-alpha stage, with benchmark logs, architectural specifications, and drivers shared publicly for transparency.",
  ],
  [
    "Does LioranDB use MongoDB internally?",
    "No. LioranDB V2 provides a familiar MongoDB-style document API for developer convenience, but it uses its own custom Rust B+ tree and MVCC storage engine.",
  ],
  [
    "Where is data stored in LioranDB?",
    "LioranDB managed instances are hosted in secure developer-controlled datacenter regions in India, supporting data sovereignty so Indian applications can keep their data domestically.",
  ],
  [
    "Who is building LioranDB?",
    "LioranDB is built by Swaraj Puppalwar (@UltronTheAI), Founder & CTO of Lioran Developer Solutions / Lioran Group, alongside contributors from the Indian developer ecosystem.",
  ],
] as const;

export const pricingPlans = [
  {
    id: "starter-plan",
    name: "Starter Plan",
    badge: "Pay-As-You-Go",
    price: "₹1",
    period: "/ hour",
    billingNote: "~₹720 / month (approx. 720 hrs)",
    capacityDocs: "Up to 100K documents",
    backupPolicy: "No automated backup allowed",
    opsSummary: "3,000 ops/sec (1,000 writes + 2,000 reads)",
    description:
      "Starter plan of our database management service. Ideal for testing, prototypes, and lightweight development instances.",
    highlight: false,
    ctaText: "Get Started for ₹1/hr",
    ctaHref: "https://app.liorandb.com",
    features: [
      "Up to 100,000 documents capacity (100K docs)",
      "3,000 Total Ops/sec (1,000 writes/sec + 2,000 reads/sec)",
      "No automated backups included (Starter tier)",
      "Starter database management service instance",
      "MongoDB-compatible driver & TypeScript SDK",
      "gRPC & REST API endpoint access",
      "Standard developer community & email support",
    ],
    supportNote: "Starter tier for database management service. No backup coverage.",
  },
  {
    id: "dedicated-server",
    name: "Dedicated Server",
    badge: "Production Ready",
    price: "₹8",
    period: "/ hour",
    billingNote: "~₹5,760 / month (approx. 720 hrs)",
    capacityDocs: "Up to 1 Million documents",
    backupPolicy: "Daily automated backup included",
    opsSummary: "45,000 ops/sec (10,000 writes + 35,000 reads)",
    description:
      "Fully isolated dedicated cloud server with high throughput, automated daily backups, and direct founder engineering support.",
    highlight: true,
    ctaText: "Deploy Dedicated Server",
    ctaHref: "https://app.liorandb.com",
    features: [
      "Up to 1,000,000 documents capacity (1M docs)",
      "45,000 Total Ops/sec (10,000 writes/sec + 35,000 reads/sec)",
      "Daily automated snapshot backup & recovery",
      "Dedicated single-node cloud compute & NVMe storage",
      "Direct Founder & Core Engineering support",
      "MongoDB-compatible driver & gRPC/REST APIs",
      "Workload performance review & indexing tuning",
      "Support window: 6:00 PM – 10:00 PM IST (Mon–Fri)",
    ],
    supportNote: "Support hours: 6:00 PM to 10:00 PM IST (Mon to Fri, Sat & Sun off).",
  },
] as const;

export const footerColumns = [
  {
    title: "Product",
    links: [
      ["Overview", "/#product"],
      ["Pricing", "/pricing"],
      ["V2 Engine", "/#v2"],
      ["Benchmarks", "/#benchmarks"],
      ["Documentation", siteConfig.docsUrl],
      ["Dashboard", siteConfig.appUrl],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Us", "/about"],
      ["Founder", "/founder"],
      ["Lioran Developer Solutions", siteConfig.companyUrl],
      ["Lioran Group", siteConfig.companyUrl],
      ["Contact Us", "/contact"],
    ],
  },
  {
    title: "Community",
    links: [
      ["Join Discord", siteConfig.discordUrl],
      ["GitHub Organization", siteConfig.orgGithubUrl],
      ["V2 GitHub Repo", siteConfig.v1GithubUrl],
      ["Report an Issue", siteConfig.v1GithubUrl],
    ],
  },
  {
    title: "Legal & Policies",
    links: [
      ["Terms & Conditions", "/terms"],
      ["Privacy Policy", "/privacy"],
      ["Cookies Policy", "/cookies"],
      ["Cancellation & Refund", "/refund"],
      ["Shipping & Delivery", "/shipping"],
      ["License", "/license"],
    ],
  },
] as const;

