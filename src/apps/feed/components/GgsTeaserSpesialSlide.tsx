import type { RefObject } from 'react';
import { BadgePercent, CalendarCheck, CalendarDays, Crown, Gift, Instagram } from 'lucide-react';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import { GGS_TEASER_SPESIAL, GGS_TEASER_SPESIAL_TEXT } from './ggs-teaser-spesial';
import './GgsTeaserSpesialSlide.css';

const BENEFIT_ICONS = [CalendarCheck, CalendarDays, BadgePercent, Gift, Crown] as const;

/** GGS Feed slide 61: tomorrow's customer teaser with the five announced benefits. */
export function GgsTeaserSpesialSlide({ exportRef, frame = true }: { exportRef?: RefObject<HTMLElement | null>; frame?: boolean }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggts-root"
      role="img"
      aria-label={`GGS Hair Studio — ${GGS_TEASER_SPESIAL_TEXT}`}
    >
      <span className="ggts-orbit ggts-orbit--one" aria-hidden="true" />
      <span className="ggts-orbit ggts-orbit--two" aria-hidden="true" />
      <Crown className="ggts-spark ggts-spark--left" aria-hidden="true" />
      <Crown className="ggts-spark ggts-spark--right" aria-hidden="true" />

      <header className="ggts-head" aria-hidden="true">
        <h2 className="ggts-title">
          <span className="ggts-something">Something</span>
          <span className="ggts-special">Spesial!</span>
        </h2>
        <p className="ggts-audience">{GGS_TEASER_SPESIAL.audience}</p>
      </header>

      <section className="ggts-card" aria-hidden="true">
        <p className="ggts-card-label">SIAP-SIAP, CUSTOMER GGS!</p>
        <ul className="ggts-list">
          {GGS_TEASER_SPESIAL.benefits.map((benefit, index) => {
            const Icon = BENEFIT_ICONS[index];
            return (
              <li key={benefit.key} className="ggts-item">
                <span className="ggts-icon"><Icon strokeWidth={1.9} /></span>
                <span className="ggts-benefit">{benefit.text}</span>
              </li>
            );
          })}
        </ul>
      </section>

      <footer className="ggts-cta" aria-hidden="true">
        <span className="ggts-instagram"><Instagram strokeWidth={2} /></span>
        <p>{GGS_TEASER_SPESIAL.cta}</p>
      </footer>

      {frame ? <img className="ggts-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" draggable={false} /> : null}
    </div>
  );
}
