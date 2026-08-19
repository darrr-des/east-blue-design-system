# Branching Guide — East Blue Design System

How to make a branch, get your work onto GitHub, and open a pull request. Written for a collaborator joining this repo fresh.

**The one rule that matters:** `main` auto-deploys to production. A merge into `main` ships the live site within a minute. Everything else — every branch, every push to a branch — is safe.

---

## Before you start (one time)

### 1. Get access

Ask the repo owner to add you: **Settings → Collaborators → Add people**, using your GitHub username. You need **Write** access to push branches.

### 2. Clone the repo

```bash
git clone https://github.com/darrr-des/east-blue-design-system.git
cd east-blue-design-system
```

### 3. Install and run

```bash
cd astro-site
npm install
npm run dev          # → http://localhost:4321
```

### 4. Set your identity

```bash
git config user.name "Your Name"
git config user.email "you@email.com"
```

> **Not comfortable in a terminal?** Use **GitHub Desktop** (desktop.github.com). It does everything below with buttons, and it's a perfectly valid way to work — nothing here requires the command line.

---

## Branch naming

Pick the prefix that matches what you're doing:

| Prefix | Use for | Example |
|---|---|---|
| `review/` | A component assessment | `review/segmented-control-button` |
| `fix/` | Correcting something broken | `fix/dropdown-token-paths` |
| `docs/` | Guides, README, methodology | `docs/screen-normalization` |
| `feat/` | New site functionality | `feat/search-filters` |

For component reviews, use the **component slug** — the same name as its data file. A review of `astro-site/src/data/components/empty-state.ts` goes on `review/empty-state`. One component, one branch, one pull request.

> **Gotcha — don't use a bare name as a namespace.** If a branch called `yourname` exists, git will refuse to create `yourname/anything`:
>
> ```
> fatal: cannot lock ref 'refs/heads/yourname/topic':
> 'refs/heads/yourname' exists
> ```
>
> Branch refs are files on disk, so a name can be a file *or* a folder — never both. Pick one style up front.

---

## The workflow

### Step 1 — Start from current `main`

```bash
git switch main
git pull
```

Always pull first. Branching from a stale `main` means resolving conflicts later.

### Step 2 — Create your branch

```bash
git switch -c review/empty-state
```

`-c` means "create". You're now on the new branch. It starts as an exact copy of `main`.

### Step 3 — Do the work

Edit files normally. For a component review, that's `astro-site/src/data/components/<slug>.ts` — see [COMPONENT-REVIEW-GUIDE.md](COMPONENT-REVIEW-GUIDE.md) for what to change.

### Step 4 — Build before you commit

```bash
cd astro-site && npm run build && cd ..
```

**Don't skip this.** A visual regression check does run on every pull request and must pass before it can merge, but it takes about seven minutes and only catches rendering drift. A local build catches schema and syntax errors in seconds. Find them here rather than waiting for CI.

### Step 5 — Stage only your files

```bash
git status                 # see what changed
git add astro-site/src/data/components/empty-state.ts
```

Name your files explicitly. Avoid `git add .` — this repo often has unrelated work-in-progress sitting in the working tree, and `.` sweeps all of it into your commit.

### Step 6 — Commit

```bash
git commit -m "review: update Empty State assessment"
```

Message format: `<prefix>: <what changed>` — `review:`, `fix:`, `docs:`, `feat:`, `chore:`.

### Step 7 — Push

```bash
git push -u origin review/empty-state
```

`-u` links your local branch to the remote one, so future pushes are just `git push`.

Git prints a pull request link:

```
Create a pull request for 'review/empty-state' on GitHub by visiting:
   https://github.com/darrr-des/east-blue-design-system/pull/new/review/empty-state
```

### Step 8 — Open the pull request

Follow that link, or go to the repo on GitHub and click **Compare & pull request**.

Describe what changed and why. If it's a component review, say which Figma node you validated against. Then request a reviewer.

### Step 9 — After it's merged

The owner merges with **Squash and merge**, which collapses your commits into one on `main`. That merge is what deploys.

Then clean up locally:

```bash
git switch main
git pull
git branch -d review/empty-state
```

---

## What deploys and what doesn't

| Action | Deploys? |
|---|---|
| Committing locally | No |
| Pushing a branch | No |
| Opening a pull request | No |
| Updating a pull request | No |
| **Merging a pull request into `main`** | **Yes — immediately** |
| Pushing directly to `main` | Blocked — `main` is protected |

A branch is a safe place to park unfinished work. Push freely; it's a backup, not a release.

---

## Things that trip people up

**Uncommitted changes follow you between branches.** Switching branches does not leave your edits behind — git carries them along. That's usually what you want when you realize mid-work that you should have branched: just `git switch -c new-branch` and commit there. To set them aside instead:

```bash
git stash        # shelve everything
git stash pop    # bring it back
```

**Never force-push `main`.** The production server does `git pull origin main`. A rewritten history makes that pull fail and wedges the deploy until someone SSHes in to fix it.

**Someone else merged while you were working.** Your branch is now behind. Catch it up:

```bash
git switch main && git pull
git switch review/empty-state
git merge main
```

Resolve any conflicts, commit, push again. The pull request updates automatically.

**You committed to `main` by accident.** If you haven't pushed yet, move the commit onto a branch:

```bash
git switch -c review/empty-state   # your commit comes along
git switch main
git reset --hard origin/main       # reset main to match GitHub
```

⚠️ `reset --hard` discards uncommitted changes in the working tree. Make sure the commit is safely on the branch first (`git log` on the branch to confirm).

---

## Quick reference

```bash
git branch                    # list local branches
git branch -a                 # include remote branches
git switch <name>             # move to an existing branch
git switch -c <name>          # create and move to a new branch
git status                    # what's changed
git log --oneline -5          # recent commits
git diff                      # unstaged changes
git diff --cached             # staged changes
git branch -m <old> <new>     # rename a branch
git branch -d <name>          # delete a merged branch
```

---

## Current repo state

Branches live on GitHub today:

| Branch | Purpose |
|---|---|
| `main` | Production — auto-deploys, protected |
| `wilmer-design`, `kurteous-frost` | Collaborator working branches |
| `darrr-des` | Owner's personal working branch |
| `astro-migration`, `enable-auth-gate` | Older feature branches, kept for reference |

**`main` is protected.** Direct pushes are rejected for everyone, owner included — every change arrives through a pull request. The `visual` check must pass before a pull request can merge, and your branch must be up to date with `main` first. No approval from another person is required, so you can merge your own once it is green.

If the check goes red, open the failing run and read the annotations before re-running it. A red check is usually a real rendering change, not a flake.
