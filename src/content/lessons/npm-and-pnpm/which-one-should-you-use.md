---
title: Which one should you use?
description: Choose npm or pnpm based on the shape of your project instead of vague internet preferences.
course: npm-and-pnpm
order: 8
status: published
---

The practical answer is to choose the tool that fits the repository and the people working in it.

## A simple recommendation

Choose `npm` when:

- you are learning and want the default tool first
- the project is small or straightforward
- you want the path most people already expect
- there is no strong reason to introduce another package manager

Choose `pnpm` when:

- your team has decided to standardize on it
- the repository uses workspaces or is likely to grow into a monorepo
- you care about pnpm's install model and disk efficiency
- you want its command style and workflow conventions

If you are starting a personal learning project, either choice can work. What matters most is understanding the concepts clearly and then staying consistent within that repository.

## The best path for a new learner

For a person who is new to the ecosystem, `npm` is still the best first package manager to understand.

That is not because pnpm is harder in principle. It is because `npm` establishes the baseline ideas:

- `package.json`
- `node_modules`
- dependencies and devDependencies
- lockfiles
- scripts

Once those ideas are clear, pnpm becomes a tool choice rather than a source of confusion.

## The rule that matters most on a team

> Use one package manager per repository.

Do not mix:

- `package-lock.json`
- `pnpm-lock.yaml`
- `npm install` and `pnpm install` in the same project

Mixing package managers makes the dependency state harder to reason about and usually creates noisy, avoidable diffs.

## Final advice

If you are starting from zero, learn the concepts with `npm`, then evaluate `pnpm` with those concepts already in place.

If you are joining an existing project, use the package manager that project already uses.

If you are creating a team project, decide early, document the choice, and keep the lockfile in version control from the beginning.
