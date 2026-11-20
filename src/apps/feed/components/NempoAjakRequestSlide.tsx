import type React from 'react';
import type { RefObject } from 'react';
import { ChevronDown, MapPin, MessageCircle, Music2, UserPlus } from 'lucide-react';
import gscLogo from '@/assets/good-story-cafe-logo.jpg';
import saduliLogo from '@/assets/saduli-ragap-entertainment-logo-keyed.png';
import bgImage from '@/assets/nempo-feed-slide-50-bg.jpg';
import frameImage from '@/assets/nempo-feed-50-stage-truss-frame.webp';
import titleLettering from '@/assets/nempo-feed-50-title-graffiti-dj-large.png';
import { nempoAjakRequest as P } from './nempo-ajak-request';
import './NempoAjakRequestSlide.css';

type Light = { x: number; y: number; a: number; tone: 'pink' | 'gold'; d: number };
/** Moving-head spotlights on the truss frame (positions in cqw of the 3:4 artboard, a = aim in deg, 0 = straight down). */
const SPOTS: Light[] = [
  { x: 15.2, y: 6.9, a: -24, tone: 'pink', d: 0 },
  { x: 28.6, y: 6.5, a: -10, tone: 'gold', d: -0.75 },
  { x: 71.2, y: 6.5, a: 10, tone: 'gold', d: -1.5 },
  { x: 83.8, y: 6.9, a: 24, tone: 'pink', d: -2.25 },
  { x: 5.4, y: 24.3, a: -58, tone: 'gold', d: -0.5 },
  { x: 5.6, y: 48.2, a: -70, tone: 'pink', d: -1.25 },
  { x: 5.6, y: 78.6, a: -62, tone: 'gold', d: -2 },
  { x: 94.6, y: 24.3, a: 58, tone: 'gold', d: -2.5 },
  { x: 94.2, y: 48.2, a: 70, tone: 'pink', d: -1.75 },
  { x: 93.8, y: 78.6, a: 62, tone: 'gold', d: -1 },
];
/** LED par cans and spotlight lenses that blink. */
const LAMPS: Light[] = [
  ...SPOTS,
  { x: 38.2, y: 3.9, a: 0, tone: 'pink', d: -0.25 },
  { x: 54.7, y: 3.9, a: 0, tone: 'pink', d: -0.75 },
  { x: 4.3, y: 36.9, a: 0, tone: 'pink', d: -0.5 },
  { x: 4.3, y: 64.2, a: 0, tone: 'gold', d: 0 },
  { x: 95, y: 36.9, a: 0, tone: 'pink', d: 0 },
  { x: 94.6, y: 64.2, a: 0, tone: 'gold', d: -0.5 },
];
const lightStyle = (l: Light) =>
  ({ left: `${l.x}cqw`, top: `${l.y}cqw`, '--nar-a': `${l.a}deg`, animationDelay: `${l.d}s` }) as React.CSSProperties;

/**
 * NEMPO Feed slide 51: same green stage + lighting-truss frame as slide 50, asking followers whom they will bring
 * (answer in the comments) and which song from the request list they want.
 */
export function NempoAjakRequestSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const { title, partner, invite, request, date, venue } = P;
  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className="nar-root kmt-root"
      aria-label={`${invite.question} ${invite.lead} — ${invite.cta}. ${request.heading} ${request.songs.join(', ')}`}
    >
      <img className="nar-bg" src={bgImage} alt="" aria-hidden="true" width={1088} height={1440} draggable={false} />
      <span className="nar-beams" aria-hidden="true" />
      <span className="nar-glow" aria-hidden="true" />
      <span className="nar-spots" aria-hidden="true">
        {SPOTS.map((l, i) => (
          <span key={i} className={`nar-beam nar-beam--${l.tone}`} style={lightStyle(l)} />
        ))}
      </span>
      <img className="nar-frame" src={frameImage} alt="" aria-hidden="true" width={1152} height={1536} draggable={false} />
      <img className="nar-frame-chase" src={frameImage} alt="" aria-hidden="true" width={1152} height={1536} draggable={false} />
      <span className="nar-lamps" aria-hidden="true">
        {LAMPS.map((l, i) => (
          <span key={i} className={`nar-lamp nar-lamp--${l.tone}`} style={lightStyle(l)} />
        ))}
      </span>

      <header className="kmt-header nar-header">
        <span className="kmt-brand">
          <span className="kmt-logo"><img src="/nempo-feed/assets/nempo-new.webp" alt="Logo N resmi Nempo" draggable={false} /></span>
          <span className="kmt-name">
            <strong>NEMPO.ID</strong>
            <span><b>×</b> Kala Muda</span>
          </span>
        </span>
        <span className="nar-partners">
          <img className="nar-saduli" src={saduliLogo} alt="Saduli Ragap Entertainment" draggable={false} />
          <span className="nar-gsc"><img src={gscLogo} alt="Logo Good Story Cafe" draggable={false} /></span>
        </span>
      </header>

      <div className="nar-invite">
        <img className="nar-event" src={titleLettering} alt={`${title} & ${partner}`} width={1439} height={512} draggable={false} />
        <h2 className="nar-question" data-text={invite.question}>{invite.question}</h2>
        <p className="nar-lead">{invite.lead}</p>
        <div className="nar-comment">
          <span className="nar-comment-avatar" aria-hidden="true"><UserPlus /></span>
          <span className="nar-comment-text">
            <b>{invite.cta}</b>
            <small>Tag temanmu, pacar, atau gengmu</small>
          </span>
          <span className="nar-comment-icon" aria-hidden="true"><MessageCircle /></span>
        </div>
        <ChevronDown className="nar-arrow" aria-hidden="true" />
      </div>

      <div className="nar-panel">
        <span className="nar-ribbon"><span className="nar-ribbon-edge"><span className="nar-ribbon-fill">{request.heading}</span></span></span>
        <ol className="nar-songs">
          {request.songs.map((song, i) => (
            <li key={song} className="nar-song">
              <span className="nar-song-no">{i + 1}</span>
              <span className="nar-song-name">{song}</span>
              <Music2 className="nar-song-icon" aria-hidden="true" />
            </li>
          ))}
        </ol>
        <p className="nar-note">{request.note}</p>
      </div>

      <div className="nar-date">
        <b>{date.weekday}, {date.day} {date.month} {date.year}</b>
        <span><MapPin aria-hidden="true" />{venue.name}</span>
      </div>
    </section>
  );
}
