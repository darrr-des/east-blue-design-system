import { defineConfig, devices } from '@playwright/test';

/**
 * Visual regression config for East Blue assessment.
 *
 * Strict pixel-diff policy — see .claude/plans/visual-regression-plan.md.
 * Each test screenshots a component preview and compares to a Figma-exported baseline.
 */
export default defineConfig({
  testDir: './tests',
  outputDir: './tests/.playwright-output',
  /* Self-baselines: Playwright captures our Chromium rendering as the
     canonical snapshot, then compares future runs against it. Figma exports
     under tests/figma-reference/ are a human review aid, not used here. */
  snapshotPathTemplate: '{testDir}/visual-baselines/{arg}{ext}',
  /* {arg} is a path joined from array form; {ext} adds .png. */
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  /* Retry transient failures (font-load timing, hydration race) up to 2x. */
  retries: 2,
  /* Cap parallelism so the dev server isn't overwhelmed. */
  workers: process.env.CI ? 2 : 4,
  reporter: [['list'], ['html', { open: 'never', outputFolder: './tests/.playwright-report' }]],
  /* Run dev server automatically. */
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
  use: {
    baseURL: 'http://localhost:4321',
    /* Pin viewport so screenshots are deterministic. */
    viewport: { width: 1440, height: 900 },
    /* Honour reduced-motion to silence Astro view-transitions for snapshot stability. */
    reducedMotion: 'reduce',
    trace: 'retain-on-failure',
  },
  /* Strict snapshot config — 0 pixel diff, no anti-alias forgiveness. */
  expect: {
    toHaveScreenshot: {
      maxDiffPixels: 0,
      threshold: 0,
      animations: 'disabled',
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], deviceScaleFactor: 2 },
    },
  ],
});
