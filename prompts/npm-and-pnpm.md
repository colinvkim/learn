- partly with the help of chatgpt (april 4)
- used to refine an already made npm and pnpm course (initially made by codex)

We are working on improving the npm and pnpm course.

Please use the existing writing style and tone, in addition to the CONTENT-PREFERENCES.md file.

At minimum, someone should understand npm and pnpm's fundamental ideas after finishing the course:

what package.json is for - the difference between dependencies, devDependencies, and optionalDependencies - how to install, remove, update, and run packages - what lockfiles do and why CI should use frozen installs - how scripts work - how local vs global tools differ - how workspaces/monorepos work - how registries, scopes, and publishing work - how to manage security and version overrides - what is specific to pnpm: content-addressable store, symlinked node_modules, filters, catalogs, and workspace config. ￼

Can you make sure that a reader will understand those fundamentals after reading through the course?

⸻

In addition, please ensure that the course covers the following items. If it does not cover them, find a way to integrate them into the course.

⸻

Installing dependencies with npm

Goal: build basic fluency before introducing pnpm differences.

Teach: - npm install - npm add patterns via npm install pkg - -D, -O, global installs - uninstalling, updating, checking outdated packages - how npm chooses versions - how scripts are run via npm run

Also teach lockfile behavior early. npm documents that installs are influenced by lockfiles when present, and npm ci is intended for clean, frozen installs in CI.

⸻

pnpm fundamentals

Goal: show what changes/what's special about pnpm and why people choose pnpm.

Teach: - pnpm add, pnpm install, pnpm run - pnpm’s content-addressable store - symlinked / hard-linked node_modules - why pnpm is often faster and more space-efficient in multi-project setups - when pnpm compatibility issues appear and how nodeLinker=hoisted can help

This module should emphasize that pnpm is not “just npm with different commands.” It has a different storage and resolution model.

⸻

Security and dependency hygiene

Goal: make students safe and responsible maintainers.

Teach: - npm audit - when audit is useful and when it is noisy - transitive dependency risk - lockfile review habits - root overrides for pinning or replacing vulnerable versions - basic supply-chain caution: scripts, registries, and package trust - recent example of npm attacks and basic explanation (axios in 2026)

⸻

Troubleshooting and debugging package-manager problems

Goal: prepare someone for real dev friction.

Teach: - peer dependency errors - lockfile conflicts - when to delete node_modules and reinstall
