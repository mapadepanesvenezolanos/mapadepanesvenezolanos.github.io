---
description: Generate a detailed requirements plan in plans/ with TDD philosophy
---

Create a detailed implementation plan for: $ARGUMENTS

## Process

1. **Understand** — analyze the request, identify all requirements and edge cases
2. **Research** — search the codebase for relevant files, patterns, and dependencies
3. **Plan document** — create `plans/<auto-number>-<feature-slug>-<YYYY-MM-DD>.md` with:
   - Objective (1 sentence)
   - Requirements (numbered list, prioritized)
   - Architecture decisions (what changes, where, why)
   - File changes (new files, modified files, with paths)
   - TDD flow (tests first, then implementation)
   - Verification steps (how to confirm it works)
4. **Tests first** — write failing tests before any implementation
5. **Implement** — code the solution following the plan
6. **Verify** — run tests, confirm all pass

## Plan File Naming

Auto-number is the next sequential number in plans/. Date is today's date.

```
plans/001-feature-slug-2026-07-18.md
plans/002-another-feature-2026-07-19.md
```

## Plan Document Format

```markdown
# <Feature Name>

## Objective
[1 sentence]

## Requirements
1. [requirement] — priority: high/medium/low
2. ...

## Architecture
- Files to create: ...
- Files to modify: ...
- Decisions: ...

## TDD Flow
1. Write tests → FAIL
2. Implement → PASS
3. Refactor → still PASS

## Verification
- [ ] Tests pass
- [ ] CI validation passes
- [ ] Documentation updated
```

## Rules
- Always create the plan document BEFORE writing code
- Tests MUST fail before implementation (red-green-refactor)
- Update AGENTS.md/README.md if adding new agents/skills/scripts
- Cross-platform: Node.js only, no shell dependencies
- Allow user to review plan. Do not execute unless told.
- Update documentation.
- Ask user if it wants to commit and push the changes