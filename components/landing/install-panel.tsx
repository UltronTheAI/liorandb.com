"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { CodeBlock } from "./code-block";
import { CopyButton } from "./copy-button";

type InstallPanelProps = {
  commands: Record<string, string>;
  steps: readonly string[];
  code: string;
  output: string;
};

type StepDetail = {
  title: string;
  subtitle: string;
  file1: {
    name: string;
    variant: "typescript" | "terminal" | "json";
    code: string;
  };
  file2: {
    name: string;
    variant: "typescript" | "terminal" | "json";
    code: string;
  };
};

const stepDetails: Record<number, StepDetail> = {
  0: {
    title: "Start Docker Container",
    subtitle: "Launch a standalone local LioranDB instance with default network ports",
    file1: {
      name: "docker-run.sh",
      variant: "terminal",
      code: `$ docker run -d --name liorandb \\
  -p 27018:27018 -p 27019:27019 -p 27201:27201 \\
  -v ldb-data:/var/lib/liorandb/data \\
  liorandb/liorandb:pre-alpha`,
    },
    file2: {
      name: "container-logs.txt",
      variant: "terminal",
      code: `✓ Container liorandb started (ID: 0a92d8f1e4)
✓ Storage engine initialized at /var/lib/liorandb/data
✓ Listening on REST: 27018, gRPC: 27019, Metrics: 27201
✓ Initial admin credentials generated:
  User: admin
  Password: Q7m!Z2x@L9p#R4vK`,
    },
  },
  1: {
    title: "Install LioranDB CLI",
    subtitle: "Install the official global developer CLI for database management",
    file1: {
      name: "terminal",
      variant: "terminal",
      code: `$ npm i -g @liorandb/cli@1.0.6
+ @liorandb/cli@1.0.6
added 1 package in 1.2s

$ liorandb --version
@liorandb/cli v1.0.6 (pre-alpha)`,
    },
    file2: {
      name: "cli-help.txt",
      variant: "terminal",
      code: `LioranDB CLI v1.0.6
Usage: liorandb <command> [options]

Commands:
  login      Authenticate with instance
  status     Inspect storage & WAL health
  query      Execute JSON document query
  backup     Trigger on-demand snapshot`,
    },
  },
  2: {
    title: "Login as Administrator",
    subtitle: "Authenticate session credentials with your running instance",
    file1: {
      name: "terminal",
      variant: "terminal",
      code: `$ liorandb login admin --password "Q7m!Z2x@L9p#R4vK" --host 127.0.0.1:27018
Connecting to liorandb://127.0.0.1:27018...
✓ Authentication successful
✓ Active session saved to ~/.liorandb/config.json`,
    },
    file2: {
      name: "session.json",
      variant: "json",
      code: `{
  "status": "authenticated",
  "user": "admin",
  "host": "127.0.0.1:27018",
  "engine": "Rust V2 (B+ Tree & MVCC)",
  "sessionExpiresIn": "30d"
}`,
    },
  },
  3: {
    title: "Install Node.js / TypeScript Driver",
    subtitle: "Add the official client library to your backend application project",
    file1: {
      name: "terminal",
      variant: "terminal",
      code: `$ npm install @liorandb/driver@2.0.4
+ @liorandb/driver@2.0.4
added 1 package in 0.75s`,
    },
    file2: {
      name: "package.json",
      variant: "json",
      code: `{
  "name": "my-startup-api",
  "dependencies": {
    "@liorandb/driver": "^2.0.4"
  }
}`,
    },
  },
  4: {
    title: "Write Your First Query",
    subtitle: "Connect, insert a document, and execute queries using the TypeScript driver",
    file1: {
      name: "index.ts",
      variant: "typescript",
      code: `import { LioranDBClient } from "@liorandb/driver";

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
  
  const user = await users.findOne({ email: "ada@example.com" });
  const activeUsers = await users.find({ active: true }).limit(10).toArray();
  
  console.log({
    insertedId: insertResult.insertedId,
    user,
    activeCount: activeUsers.length,
  });
} finally {
  await client.close();
}`,
    },
    file2: {
      name: "output.json",
      variant: "json",
      code: `{
  "insertedId": "01K2EXAMPLE",
  "user": {
    "_id": "01K2EXAMPLE",
    "email": "ada@example.com",
    "active": true,
    "age": 31
  },
  "activeCount": 1
}`,
    },
  },
  5: {
    title: "Deploy to Production",
    subtitle: "Run with durable storage volumes, restart policies, and health monitoring",
    file1: {
      name: "deploy-prod.sh",
      variant: "terminal",
      code: `$ docker run -d \\
  --name liorandb-prod \\
  --restart always \\
  -p 27018:27018 -p 27019:27019 \\
  -e LIORANDB_ENV=production \\
  -e LIORANDB_ADMIN_KEY="your-production-secret-key" \\
  -v /var/data/liorandb:/var/lib/liorandb/data \\
  liorandb/liorandb:latest`,
    },
    file2: {
      name: "production-status.txt",
      variant: "terminal",
      code: `✓ Production storage node active
✓ WAL group commit fsync interval: 2ms
✓ Automated daily snapshot policy configured
✓ Health probe: 200 OK (latency: 0.8ms)
✓ Ready for client connections on port 27018`,
    },
  },
};

export function InstallPanel({
  commands,
  steps,
}: InstallPanelProps) {
  const [activePkg, setActivePkg] = useState<string>(Object.keys(commands)[0]);
  const [activeStep, setActiveStep] = useState<number>(4);
  const reduceMotion = useReducedMotion();

  const currentStep = stepDetails[activeStep] ?? stepDetails[4];

  return (
    <div className="space-y-6">
      {/* Top Package Switcher Card */}
      <div className="card-base">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex max-w-full flex-wrap gap-1 rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-surface-strong)] p-1">
            {Object.keys(commands).map((pkg) => (
              <button
                key={pkg}
                type="button"
                onClick={() => setActivePkg(pkg)}
                className={`rounded-[var(--radius-md)] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition ${
                  activePkg === pkg
                    ? "bg-[var(--color-primary)] text-[var(--color-on-primary)] shadow-sm"
                    : "text-[var(--color-body)] hover:text-[var(--color-ink)]"
                }`}
              >
                {pkg}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between sm:justify-end gap-2">
            <span className="text-xs text-[var(--color-muted)]">Installation Command</span>
            <CopyButton text={commands[activePkg]} label="Copy installation command" />
          </div>
        </div>
        <CodeBlock code={commands[activePkg]} variant="terminal" className="min-w-0 max-w-full" />
      </div>

      {/* Main Grid for Build Path Steps & Preview */}
      <div className="grid min-w-0 gap-6 lg:grid-cols-[280px_1fr]">
        {/* Left Side: Steps list */}
        <div className="card-base min-w-0 flex flex-col justify-between">
          <div>
            <div className="mb-3 flex items-center justify-between">
              <p className="eyebrow">Build Path</p>
              <span className="font-mono text-[10px] text-[var(--color-muted)]">
                {activeStep + 1} / {steps.length}
              </span>
            </div>

            <div className="space-y-1.5" role="tablist" aria-label="Quickstart steps">
              {steps.map((step, index) => {
                const isSelected = activeStep === index;

                return (
                  <button
                    key={step}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveStep(index)}
                    className={`flex w-full items-center justify-between gap-2.5 rounded-[var(--radius-md)] border p-2.5 sm:p-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ink)] ${
                      isSelected
                        ? "border-[var(--color-ink)] bg-[var(--color-surface-strong)] text-[var(--color-ink)] font-semibold"
                        : "border-[var(--color-hairline)] bg-[var(--color-surface)] text-[var(--color-body)] hover:border-[var(--color-hairline-strong)] hover:text-[var(--color-ink)]"
                    }`}
                  >
                    <div className="min-w-0">
                      <span
                        className={`font-mono text-[10px] font-semibold uppercase tracking-widest ${
                          isSelected ? "text-[var(--color-ink)]" : "text-[var(--color-muted)]"
                        }`}
                      >
                        Step 0{index + 1}
                      </span>
                      <p className="mt-0.5 text-xs truncate sm:text-sm">{step}</p>
                    </div>
                    {isSelected ? (
                      <CheckCircle2 size={15} className="shrink-0 text-[var(--color-ink)]" />
                    ) : (
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-muted-soft)]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Step Preview Card */}
        <div className="card-base min-w-0 flex flex-col justify-between">
          <div>
            {/* Step Header */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[var(--color-hairline)]">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="badge-pill !text-[10px] !py-0.5 !px-2">
                    Step 0{activeStep + 1}
                  </span>
                  <h3 className="text-base font-semibold text-[var(--color-ink)] sm:text-lg">
                    {currentStep.title}
                  </h3>
                </div>
                <p className="mt-1 text-xs text-[var(--color-body)]">
                  {currentStep.subtitle}
                </p>
              </div>
              <CopyButton text={currentStep.file1.code} label="Copy code snippet" />
            </div>

            {/* Code / Output Panels */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`step-view-${activeStep}`}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="grid min-w-0 gap-4 md:grid-cols-[1.15fr_0.85fr]"
              >
                <div className="min-w-0">
                  <div className="mb-2 flex items-center justify-between text-xs font-mono text-[var(--color-muted)]">
                    <span className="truncate">{currentStep.file1.name}</span>
                    <span className="uppercase text-[10px] tracking-wider shrink-0">{currentStep.file1.variant}</span>
                  </div>
                  <CodeBlock
                    code={currentStep.file1.code}
                    variant={currentStep.file1.variant}
                  />
                </div>

                <div className="min-w-0">
                  <div className="mb-2 flex items-center justify-between text-xs font-mono text-[var(--color-muted)]">
                    <span className="truncate">{currentStep.file2.name}</span>
                    <span className="uppercase text-[10px] tracking-wider shrink-0">{currentStep.file2.variant}</span>
                  </div>
                  <CodeBlock
                    code={currentStep.file2.code}
                    variant={currentStep.file2.variant}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Clean Bottom Step Navigation */}
          <div className="mt-6 flex items-center justify-between pt-4 border-t border-[var(--color-hairline)]">
            <button
              type="button"
              disabled={activeStep === 0}
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              className="inline-flex items-center gap-1.5 rounded-[var(--radius-md)] border border-[var(--color-hairline-strong)] bg-[var(--color-surface-card)] px-3 py-2 text-xs font-medium text-[var(--color-ink)] transition hover:bg-[var(--color-surface-soft)] disabled:opacity-30 disabled:pointer-events-none"
            >
              <ArrowLeft size={13} />
              Previous Step
            </button>

            <span className="font-mono text-xs text-[var(--color-muted)]">
              Step {activeStep + 1} of {steps.length}
            </span>

            <button
              type="button"
              disabled={activeStep === steps.length - 1}
              onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
              className="inline-flex items-center gap-1.5 rounded-[var(--radius-md)] border border-[var(--color-hairline-strong)] bg-[var(--color-surface-card)] px-3 py-2 text-xs font-medium text-[var(--color-ink)] transition hover:bg-[var(--color-surface-soft)] disabled:opacity-30 disabled:pointer-events-none"
            >
              Next Step
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
