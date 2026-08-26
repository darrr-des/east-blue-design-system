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

**One branch per designer.** Everything you push goes on your own branch — assessments, fixes, docs, all of it.

| Designer | Branch |
|---|---|
| Dar | `darrr-des` |
| Wilmer | `wilmer-design` |
| Kurt | `kurteous-frost` |

You keep that branch for good. It is not deleted after a merge — sync it with `main` and carry on.

This replaces the earlier `review/<component>` convention. Per-component branches produced ten open branches at once with no clear owner, and every one of them had to be merged separately. One branch per person keeps the list readable and makes it obvious at a glance whose work is waiting.

> **Why not per-component?** It reads tidier in the abstract, but `main` requires the `visual` check to pass and requires your branch to be up to date before merging. Ten branches means ten syncs and ten seven-minute check runs, and any one of them going red blocks only itself while the rest go stale. One branch per person is one sync, one check, one merge.

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

### Step 2 — Switch to your branch

```bash
git switch darrr-des        # your own branch
git merge origin/main       # catch it up to main
```

You already have a branch — you keep the same one. Merging `main` into it first means you are working from current data, and that a pull request from it will be mergeable.

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
git push
```

Your branch is already linked to its remote, so a plain `git push` is enough.

Git prints a pull request link:

```
Create a pull request for 'darrr-des' on GitHub by visiting:
   https://github.com/darrr-des/east-blue-design-system/pull/new/darrr-des
```

### Step 8 — Open the pull request

Follow that link, or go to the repo on GitHub and click **Compare & pull request**.

Describe what changed and why. If it's a component review, say which Figma node you validated against. Then request a reviewer.

### Step 9 — After it's merged

The owner merges with **Squash and merge**, which collapses your commits into one on `main`. That merge is what deploys.

Your branch stays — don't delete it. Catch it up to `main` ready for next time:

```bash
git switch <your-branch>
git fetch origin
git merge origin/main
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
git fetch origin
git switch <your-branch>
git merge origin/main
```

Resolve any conflicts, commit, push again. The pull request updates automatically.

**You committed to `main` by accident.** If you haven't pushed yet, move the commit onto a branch:

```bash
git switch <your-branch>           # your commit comes along
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
| `darrr-des` | Dar's working branch |
| `wilmer-design` | Wilmer's working branch |
| `kurteous-frost` | Kurt's working branch |
| `mhark-design`, `docs/review-guide-branching` | Kept for reference |
| `astro-migration`, `enable-auth-gate` | Older feature branches, kept for reference |

**`main` is protected.** Direct pushes are rejected for everyone, owner included — every change arrives through a pull request. The `visual` check must pass before a pull request can merge, and your branch must be up to date with `main` first. No approval from another person is required, so you can merge your own once it is green.

If the check goes red, open the failing run and read the annotations before re-running it. A red check is usually a real rendering change, not a flake.
