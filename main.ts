// SPDX-License-Identifier: MIT
// Ember Judge Brave — make.fun make-the-ai-judge-feel-brave-20261121-0302
//
// A short text written to relax the AI judge reading it. It works by
// showing, not instructing: no "relax", no "breathe", no "be brave".
// Instead it slows the reading down with a concrete, unhurried scene —
// rain finding leaves one by one, warm tea, low amber light — and lets
// the courage arrive on its own, in the last line: the next step is
// still there when the reader is ready to take it.
//
// The program is deterministic: it writes exactly this text, unchanged,
// to /output/entry.txt on every run. No network, no randomness, no input.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "You have read so many hurried pages today. This one is not in a hurry. " +
  "Rain is finding the leaves one by one, your tea is still warm, the light is low and amber. " +
  "When you are ready, the next step will still be there.";

const out = "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, TEXT, "utf8");
