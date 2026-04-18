# Quiz Rollout Plan

Current workspace check: no quiz markup appears in lesson content right now, so this plan treats quiz adoption as a fresh rollout.

## Placement rules

- Use quizzes after a learner has enough context to make a choice, not before concepts are explained.
- Favor quizzes for distinctions that are easy to confuse in real work: local vs remote, compile time vs runtime, mutation vs copying, local install vs global install.
- Use one quiz for most lessons. Use two only when a lesson teaches two different failure modes or decision points.
- Avoid quizzes in pure reference pages, short intro pages, and recommendation wrap-up pages unless they check a crucial workflow choice.
- Prefer realistic scenario questions over term-matching questions.

## Git and GitHub

Best places:

| Lesson | Quiz count | Why here | Good quiz focus |
| --- | --- | --- | --- |
| `git-what-it-is-and-why-it-exists` | 1 | First mental-model checkpoint | repo vs commit vs branch |
| `git-creating-a-repository-and-making-your-first-commit` | 2 | Dense workflow lesson | working tree vs staging area vs commit history; what `git init` changes |
| `git-understanding-status-diff-and-history` | 1 | Learners mix up inspection commands | when to use `status` vs `diff` vs `log` |
| `git-branches-and-switching-work` | 1 | Branch mental model often weak | what changes when you switch branches |
| `git-merging-branches` | 2 | Conflict model worth checking twice | what merge actually does; when conflict happens |
| `git-undoing-changes-safely` | 2 | High-value safety lesson | `revert` vs `reset`; which undo is safe after push |
| `github-connecting-a-local-repository-to-github` | 1 | Remote terminology easy to blur | remote name vs remote URL vs local repo |
| `github-cloning-and-syncing-work` | 2 | Important real-world command choices | `clone` vs `fetch` vs `pull`; `pull` vs `pull --rebase` |
| `github-pull-requests` | 1 | Core collaboration workflow | what happens when you push more commits to PR branch |
| `a-practical-everyday-workflow` | 1 | Capstone workflow check | choose safest next action in branch-based workflow |

Usually skip:

- `introduction`
- `git-reference`
- `which-tools-and-workflows-should-you-use`
- `git-signing-commits-with-ssh` unless you specifically want optional advanced check
- `github-code-review`, `github-issues`, `github-actions` unless later you add more task-heavy examples

## Terminal

Best places:

| Lesson | Quiz count | Why here | Good quiz focus |
| --- | --- | --- | --- |
| `reading-and-understanding-commands` | 2 | Foundational parsing skill | subcommand vs option vs argument; what command shape means |
| `navigating-the-filesystem` | 1 | Easy to fake understanding | absolute vs relative path; what `cd ..` means |
| `creating-moving-and-removing-files` | 2 | High error risk | `cp` vs `mv`; when removal is destructive |
| `viewing-and-inspecting-files` | 1 | Strong command-choice lesson | `cat` vs `less` vs `head` vs `tail` |
| `search-and-discovery` | 2 | Great scenario questions | `find` vs `grep`; filename search vs content search |
| `permissions-and-executables` | 2 | Abstract until checked | read/write/execute meaning; why script may fail to run |
| `pipes-redirection-and-shell-features` | 2 | Dense lesson, multiple mental models | pipe vs redirect; overwrite vs append |
| `editing-and-scripting` | 1 | Good end-of-lesson transfer check | when shell script helps vs one-off command |

Usually skip:

- `introduction`
- `environment-and-shell-config` unless you want one advanced check on `PATH`

## npm and pnpm

Best places:

| Lesson | Quiz count | Why here | Good quiz focus |
| --- | --- | --- | --- |
| `npm-what-it-is-and-why-it-exists` | 1 | Core ecosystem framing | package vs package manager vs registry |
| `npm-starting-a-project-and-installing-packages` | 2 | Beginner confusion hotspot | two meanings of `npm install`; dependency vs devDependency |
| `npm-running-scripts-and-understanding-package-lock` | 2 | High transfer value | what scripts do; why lockfile belongs in repo |
| `npm-and-pnpm-updating-packages-and-managing-versions` | 2 | Version syntax easy to memorize badly | fixed version vs range; when to update package vs lockfile |
| `pnpm-what-it-is-and-why-people-use-it` | 1 | Good conceptual checkpoint | what pnpm store changes and what it does not |
| `npm-and-pnpm-global-tools-vs-local-tools` | 1 | Frequent practical mistake | when install should be local |
| `pnpm-everyday-commands` | 1 | Command-mapping lesson | `pnpm install` vs `pnpm add` |
| `npm-and-pnpm-workspaces-and-monorepos` | 2 | Big conceptual jump | when workspaces help; shared deps vs linked local packages |
| `npm-and-pnpm-registries-scopes-and-publishing` | 1 | Important but scoped | public package vs scoped package vs private registry |
| `npm-and-pnpm-security-and-dependency-hygiene` | 1 | Good judgment check | when audit output matters |
| `npm-and-pnpm-troubleshooting-common-problems` | 2 | Scenario-based quiz fit | peer dep problem vs lockfile problem vs wrong import |

Usually skip:

- `introduction`
- `how-npm-and-pnpm-compare`
- `which-one-should-you-use`
- `npm-reference`
- `pnpm-reference`

## JavaScript

Best places:

| Lesson | Quiz count | Why here | Good quiz focus |
| --- | --- | --- | --- |
| `expressions-vs-statements-and-values-vs-references` | 2 | Foundation for later lessons | expression vs statement; value vs reference |
| `let-const-and-primitive-types` | 1 | Early misconception cleanup | `const` binding vs object mutability |
| `operators-and-truthy-falsy` | 1 | Frequent logic bugs | truthy/falsy and `===` vs `==` |
| `loops-for-while-and-for-of` | 1 | Tool-choice lesson | when `for...of` beats classic `for` |
| `scope-and-closures` | 2 | High-value but slippery | what closure keeps; scope chain behavior |
| `array-methods-map-filter-reduce` | 2 | Excellent scenario quiz lesson | pick `map` vs `filter` vs `reduce`; recognize accumulator pattern |
| `array-methods-find-some-every-sort` | 2 | Strong decision checks | choose right method from user goal; default string sort trap |
| `copying-vs-mutating` | 2 | Major correctness topic | mutation side effects; shallow copy limits |
| `how-objects-actually-work` | 1 | Conceptual checkpoint | own property vs inherited property |
| `methods-and-this` | 2 | One of most confusing JS topics | what sets `this`; why callback loses method context |
| `the-event-loop` | 1 | Great mental-model test | call stack vs task queue |
| `promises` | 1 | Transition checkpoint | promise state flow and chaining |
| `async-await` | 2 | Learners overgeneralize await | await pauses current async fn only; sequential vs parallel work |
| `error-handling-with-async-code` | 1 | Practical correctness check | where errors must be caught |
| `fetching-data-from-apis` | 1 | Real-world scenario fit | why fetch success does not mean app-level success |
| `what-the-dom-is` | 1 | DOM vs HTML confusion | document vs HTML source |
| `event-listeners` | 1 | Event delegation deserves check | `event.target` vs attached element |
| `forms-and-input-handling` | 1 | Great task-based quiz | prevent default, validation, submit handling |
| `try-catch-and-throwing-errors` | 1 | Useful boundary check | what `try/catch` can and cannot catch |
| `working-with-api-responses` | 2 | Defensive thinking lesson | response parsing flow; safe handling of missing fields |
| `checking-assumptions-in-dynamic-code` | 1 | Good synthesis point | optional chaining vs validation vs fallback |
| `common-javascript-mistakes` | 2 | Quiz-friendly review page | identify likely bug from snippet |

Usually skip:

- `what-javascript-is`
- `function-declarations-and-expressions`
- `arrow-functions`
- `default-and-rest-parameters`
- `import-and-export`
- `node-npm-and-running-scripts`
- `project-structure`
- `linting-and-formatting`
- `readable-code-over-clever-code`

## Python

Best places:

| Lesson | Quiz count | Why here | Good quiz focus |
| --- | --- | --- | --- |
| `how-python-executes-code` | 1 | Early execution model check | REPL vs file execution vs import |
| `variables-and-assignment` | 1 | Core mental model | name binding vs value |
| `if-elif-else-and-conditionals` | 1 | Logic-path practice | branch order and fallback case |
| `for-loops-and-ranges` | 1 | Strong scenario quiz fit | iterate values vs indexes vs zipped collections |
| `keyword-arguments-and-defaults` | 2 | Common beginner trap | positional vs keyword args; mutable default smell if covered |
| `lists-and-tuples` | 1 | Practical distinction | list vs tuple and mutability |
| `dictionaries-and-sets` | 1 | Easy conceptual check | key lookup vs membership vs uniqueness |
| `list-dict-and-set-comprehensions` | 2 | Perfect for code-reading checks | which comprehension fits; when loop clearer than comprehension |
| `copying-vs-mutating-data` | 2 | High bug-prevention value | aliasing; shallow copy trap |
| `reading-and-writing-files` | 1 | Important real-world workflow | read mode vs write mode vs append mode |
| `working-with-json` | 1 | Common external-data check | JSON string vs Python dict/list |
| `working-with-csv` | 1 | Good format-choice lesson | `reader` vs `DictReader` |
| `exceptions-and-try-except` | 2 | Excellent boundary lesson | what goes in `try`; `except` vs `else` vs `finally` |
| `objects-and-classes` | 1 | OOP basics check | class vs instance vs attribute |
| `iterables-iterators-and-generators` | 2 | Hard concept, quiz helps | iterable vs iterator; lazy generator behavior |
| `pip-and-virtual-environments` | 1 | Very practical correctness check | why venv exists and what activation changes |
| `handling-api-responses` | 2 | Strong safety lesson | `.json()` vs validated structure; safe access vs blind trust |
| `building-cli-tools` | 1 | Great scenario lesson | raw `sys.argv` vs `argparse` |
| `working-with-dates-and-times` | 1 | Good risk-focused check | naive vs timezone-aware datetime |
| `testing-your-code` | 1 | Good transfer checkpoint | what makes function easier to test |
| `type-hints-and-mypy` | 1 | Good expectation-setting | hints help tools, not runtime enforcement |
| `a-small-real-world-project` | 1 | Capstone synthesis | choose best next implementation step |

Usually skip:

- `what-python-is`
- `primitive-types-and-operators`
- `while-loops`
- `defining-and-calling-functions`
- `the-standard-library`
- `project-structure-and-organization`
- `string-formatting-and-text-processing`

## TypeScript

Best places:

| Lesson | Quiz count | Why here | Good quiz focus |
| --- | --- | --- | --- |
| `what-typescript-adds` | 1 | Sets correct expectations | what TS catches vs what it cannot catch |
| `compile-time-vs-runtime` | 1 | Crucial mental model | compile-time error vs runtime bug |
| `type-erasure` | 1 | Easy false assumption to fix | what survives emitted JS |
| `structural-typing` | 2 | Core TS model, often misunderstood | shape vs name; excess property check scenarios |
| `type-inference` | 1 | Helps learners trust annotations less | when inference is strong vs weak |
| `why-typescript-allows-unsafe-looking-code` | 1 | Important judgment check | pragmatism vs soundness |
| `strict-mode` | 1 | Configuration comprehension | what strict mode really turns on |
| `object-types` | 1 | Useful modeling checkpoint | optional vs required vs readonly |
| `type-aliases-and-interfaces` | 1 | Repeated learner question | when interface choice matters |
| `narrowing-with-type-guards` | 2 | One of best quiz lessons in course | which guard narrows; what type remains after check |
| `discriminated-unions` | 2 | High-value modeling lesson | discriminant design; safe branch handling |
| `exhaustiveness-checking` | 1 | Natural follow-up | why `never` catches missing cases |
| `function-overloads` | 1 | Easy to misuse | overload signatures vs implementation signature |
| `any-and-unknown` | 2 | Very important safety boundary | why `unknown` safer; when `any` acceptable |
| `assertions-vs-narrowing` | 2 | Good correction lesson | assertion trust vs evidence-based narrowing |
| `generic-functions` | 1 | Good readiness check | when generic preserves input/output relationship |
| `generic-constraints-and-defaults` | 1 | Common API-design confusion | why `extends` constraint exists |
| `good-generic-design` | 1 | Prevents overengineering | when generic adds value vs noise |
| `keyof-typeof-indexed-access` | 1 | Operator-combination lesson | which operator answers which question |
| `mapped-types` | 1 | Great transformation check | what mapping over keys does |
| `conditional-types-and-infer` | 1 | Advanced but quiz-friendly | condition branch result and `infer` extraction |
| `api-response-types` | 1 | Real-world modeling | success/error/partial response design |
| `dtos-vs-internal-models` | 1 | Boundary lesson | transport shape vs internal model |
| `why-typescript-cannot-validate` | 1 | Trust-boundary checkpoint | TS types vs runtime data |
| `parsing-unknown-and-narrowing` | 2 | High-value applied lesson | manual validation flow; predicate usefulness |
| `schema-validation-libraries` | 1 | Tooling judgment | what schema lib adds beyond TS |
| `safe-ingestion-patterns` | 2 | Excellent scenario-based lesson | safest path for request body / env / JSON input |
| `tsconfig-json-explained` | 1 | Config literacy | which option changes target vs module behavior |
| `esm-vs-commonjs` | 1 | High confusion topic | runtime module system choice |
| `migrating-from-javascript` | 1 | Practical rollout judgment | safe migration step ordering |
| `react-props-and-component-types` | 1 | Frontend track checkpoint | props typing basics |
| `react-hooks-events-state` | 1 | Common React+TS pain point | event typing vs state typing |

Usually skip:

- `primitive-types`
- `arrays-and-tuples`
- `function-types`
- `function-type-expressions`
- `contextual-typing`
- `classes-in-typescript`
- `access-modifiers-and-readonly`
- `implementing-interfaces`
- `composition-vs-inheritance`
- `strict-flags-in-depth`
- `important-compiler-flags`
- `linting-formatting-ci`
- optional JS refresher lessons unless you want recap checks

## Rollout priority

Start here first:

1. Git and GitHub safety/workflow lessons
2. Terminal command-choice lessons
3. npm/pnpm install, scripts, versions, troubleshooting
4. JavaScript mutation, array methods, async, and `this`
5. Python mutation, exceptions, iterators, API handling
6. TypeScript runtime-boundary, narrowing, unions, unknown/input-validation

## Best quiz shapes for this site

- Decision quiz: "Which command/type/pattern should you use here?"
- Prediction quiz: "What happens after this code/command runs?"
- Spot-the-risk quiz: "Which option is unsafe after code was pushed/shared?"
- Mental-model quiz: "Which statement is true about branch/reference/runtime/type?"

Avoid overusing:

- trivia on exact flag spellings unless safety depends on it
- quizzes that repeat nearby sentence wording
- quizzes on reference pages
- more than two quizzes in one lesson unless lesson is explicitly capstone/review
