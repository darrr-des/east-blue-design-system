import fs from 'node:fs';
import path from 'node:path';
import { url } from './url';

/**
 * Images found by file name rather than by a field in the component JSON:
 *   public/assets/covers/<slug>.png                     — the grid card's cover image
 *   public/assets/guidelines/<slug>-<n>-do.png          — Usage Guidelines pair n (1-based)
 *   public/assets/guidelines/<slug>-<n>-dont.png
 * Each is exported from the component's "[FOR EXPORT]" section in Figma. When the file
 * isn't there, the caller gets null and keeps its text-only / placeholder layout.
 */
export function publicAsset(rel: string): string | null {
  return fs.existsSync(path.resolve(process.cwd(), 'public', rel)) ? url(`/${rel}`) : null;
}

export const coverImage = (slug: string) => publicAsset(`assets/covers/${slug}.png`);

export const guidelineImage = (slug: string, n: number, side: 'do' | 'dont') =>
  publicAsset(`assets/guidelines/${slug}-${n}-${side}.png`);
