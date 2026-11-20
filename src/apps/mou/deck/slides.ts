import type { ComponentType } from 'react';
import manifest from './data/slides-manifest.json';

const modules = import.meta.glob<{ default: ComponentType }>('./pages/slides/*.tsx', { eager: true });
export const slides = manifest.toSorted((a, b) => a.position - b.position).map((entry) => {
  const filename = entry.filepath.split('/').pop();
  const module = modules[`./pages/slides/${filename}`];
  if (!module) throw new Error(`Missing presentation slide: ${entry.id}`);
  return { ...entry, Component: module.default };
});

export function clampSlide(position: number) {
  return Math.max(1, Math.min(manifest.length, position));
}