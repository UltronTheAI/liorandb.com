import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "License — LioranDB",
  description: "License terms for LioranDB.",
};

const licenseText = `LIORANDB LICENSE

Copyright (c) 2025 Swaraj Puppalwar
All rights reserved.

Permission is hereby granted to any person obtaining a copy of this software and associated documentation files (the "Software") to use, copy, modify, and distribute the Software for PERSONAL, NON-COMMERCIAL PURPOSES ONLY, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHOR OR COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

SPECIAL CONDITIONS FOR LIORANDB

Notwithstanding the general permission above, the following additional conditions apply specifically to LioranDB:

1. Personal Use
   Permission is granted to use the Software for personal projects, educational purposes, experimentation, and non-commercial development only.

2. Commercial and Production Use
   Any use of the Software for commercial purposes, including but not limited to:

* deployment in production environments,
* integration into paid products or services,
* hosting for third parties,
* resale or monetization of any form,

is strictly prohibited without obtaining a separate commercial license from the official LioranDB SaaS platform or direct written authorization from Swaraj Puppalwar or Lioran Group.

3. No Resale or Redistribution
   You may not sell, sublicense, redistribute, or repackage the Software as a standalone product or as part of any commercial offering without explicit written permission and a valid commercial agreement.

4. Ownership
   All intellectual property rights in the Software, including but not limited to source code, architecture, brand identity, and system design, remain the exclusive property of Swaraj Puppalwar and Lioran Group.

By using this Software, you agree to comply fully with this license and all associated conditions.

This license supersedes and replaces any previous licensing terms related to LioranDB.

© 2025 Swaraj Puppalwar & Lioran Group. All rights reserved.`;

export default function LicensePage() {
  return (
    <LegalPage
      title="LioranDB License"
      intro="These are the current licensing terms for LioranDB, including the non-commercial usage grant and the additional product-specific restrictions you provided."
    >
      <pre className="code-block code-scroll overflow-x-auto whitespace-pre-wrap p-5 font-mono text-sm leading-7">
        {licenseText}
      </pre>
    </LegalPage>
  );
}
