import { describe, expect, it } from 'vitest';
import { clampSlide, slides } from './slides';

describe('migrated Nempo presentation navigation', () => {
  it('preserves all sixteen source slides in order', () => {
    expect(slides.map((slide) => slide.position)).toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
    expect(slides[15]?.id).toBe('kenalan-yuk');
  });
  it('cannot move outside the sixteen-slide presentation', () => {
    expect(clampSlide(0)).toBe(1);
    expect(clampSlide(17)).toBe(16);
    expect(clampSlide(8)).toBe(8);
  });
});