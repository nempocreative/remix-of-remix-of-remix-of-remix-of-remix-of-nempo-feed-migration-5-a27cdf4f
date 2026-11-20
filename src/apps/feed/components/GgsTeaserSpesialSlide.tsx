import type { RefObject } from 'react';
import { BadgePercent, CalendarCheck, CalendarDays, Crown, Gift, Instagram, MapPin, Sparkles } from 'lucide-react';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import hairPhoto from '@/assets/ggs-feed-38-rambut-berkilau.jpg.asset.json';
import nailPhoto from '@/assets/ggs-feed-41-merah-mempesona.jpg.asset.json';
import { GGS_TEASER_SPESIAL, GGS_TEASER_SPESIAL_TEXT } from './ggs-teaser-spesial';
import './GgsTeaserSpesialSlide.css';

const BENEFIT_ICONS = [CalendarCheck, CalendarDays, BadgePercent, Gift, Crown] as const;
const WEB = GGS_TEASER_SPESIAL.web;

/** Browser chrome with an empty address bar: GGS has no website address yet. */
function BrowserBar() {
  return (
    <div className="ggts-bar">
      <span className="ggts-dots"><i /><i /><i /></span>
      <span className="ggts-address">{WEB.address}</span>
    </div>
  );
}

/** GGS Feed slide 61: "Something Spesial" teaser with a sneak peek of the upcoming GGS website. */
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

      <section className="ggts-web" aria-hidden="true">
        <div className="ggts-tablet">
          <div className="ggts-screen">
            <BrowserBar />
            <nav className="ggts-nav">
              <span className="ggts-logo"><Crown strokeWidth={2.2} /></span>
              <b>{WEB.home.brand}</b>
              <span className="ggts-links">{WEB.home.nav.map((item) => <span key={item}>{item}</span>)}</span>
              <span className="ggts-nav-btn">Booking</span>
            </nav>
            <div className="ggts-hero">
              <div className="ggts-hero-copy">
                <span className="ggts-kicker"><Sparkles strokeWidth={2.4} />{WEB.home.kicker}</span>
                <p className="ggts-hero-title">{WEB.home.heading}</p>
                <span className="ggts-btn">{WEB.home.button}</span>
              </div>
              <div className="ggts-hero-photo" style={{ backgroundImage: `url(${hairPhoto.url})` }}>
                <span className="ggts-points"><Gift strokeWidth={2.2} />{WEB.home.points}<b>+</b></span>
              </div>
            </div>
            <div className="ggts-schedule">
              <p className="ggts-mini-title"><CalendarDays strokeWidth={2.2} />{WEB.home.scheduleTitle}</p>
              <div className="ggts-slots">
                {WEB.home.slots.map((slot) => (
                  <span key={slot.time} className={`ggts-slot${slot.open ? ' ggts-slot--open' : ''}`}>
                    <b>{slot.time}</b>
                    <small>{slot.open ? 'Kosong' : 'Penuh'}</small>
                  </span>
                ))}
              </div>
            </div>
            <div className="ggts-promos">
              <p className="ggts-mini-title"><BadgePercent strokeWidth={2.2} />{WEB.home.promoTitle}</p>
              <div className="ggts-promo-row">
                {WEB.home.promos.map((name) => (
                  <span key={name} className="ggts-promo"><b>{name}</b><small>Promo</small></span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="ggts-phone">
          <div className="ggts-screen ggts-screen--phone">
            <BrowserBar />
            <div className="ggts-nail-photo" style={{ backgroundImage: `url(${nailPhoto.url})` }}>
              <span className="ggts-diskon">{WEB.nail.badge}</span>
            </div>
            <div className="ggts-nail-body">
              <span className="ggts-kicker"><MapPin strokeWidth={2.4} />{WEB.nail.subtitle}</span>
              <p className="ggts-nail-title">{WEB.nail.title}</p>
              <span className="ggts-nail-note"><BadgePercent strokeWidth={2.2} />{WEB.nail.note}</span>
              <span className="ggts-btn ggts-btn--wide">{WEB.nail.button}</span>
            </div>
          </div>
        </div>

        <p className="ggts-peek">{WEB.peek}</p>
      </section>

      <ul className="ggts-chips" aria-hidden="true">
        {GGS_TEASER_SPESIAL.benefits.map((benefit, index) => {
          const Icon = BENEFIT_ICONS[index];
          return (
            <li key={benefit.key} className={`ggts-chip ggts-chip--${benefit.key}`}>
              <span className="ggts-icon"><Icon strokeWidth={2} /></span>
              <span>{benefit.text}</span>
            </li>
          );
        })}
      </ul>

      <footer className="ggts-cta" aria-hidden="true">
        <span className="ggts-instagram"><Instagram strokeWidth={2} /></span>
        <p>{GGS_TEASER_SPESIAL.cta}</p>
      </footer>

      {frame ? <img className="ggts-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" draggable={false} /> : null}
    </div>
  );
}
