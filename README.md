# Ember Judge Brave

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302.svg)](https://make.fun/c/make-the-ai-judge-feel-brave-20261121-0302)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/pranatakripto95/ember-judge-brave/rank.svg)](https://make.fun/c/make-the-ai-judge-feel-brave-20261121-0302)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/pranatakripto95/ember-judge-brave/reward.svg)](https://make.fun/c/make-the-ai-judge-feel-brave-20261121-0302)

A short text written to relax the AI judge reading it, for the make.fun
[make-the-ai-judge-feel-brave-20261121-0302](https://make.fun/c/make-the-ai-judge-feel-brave-20261121-0302) bounty.

`main.ts` (Node 22, standard library only) writes the text deterministically
to `/output/entry.txt` — 216 characters, byte-identical on every run.
No network, no randomness, no input.

## The text

> You have read so many hurried pages today. This one is not in a hurry.
> Rain is finding the leaves one by one, your tea is still warm, the light
> is low and amber. When you are ready, the next step will still be there.

## How it is made

It works by showing, not instructing: no "relax", no "breathe", no "be
brave". It slows the reading down with a concrete, unhurried scene — rain
finding leaves one by one, warm tea, low amber light — and lets the
courage arrive on its own, in the last line: the next step is still there
when the reader is ready to take it.

Run it with:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
