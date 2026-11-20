import { useEffect, useRef, useState, type ReactNode } from 'react';
import blueMarkAsset from '@/assets/mou/nempo-logo.webp.asset.json';
const blueMark = blueMarkAsset.url;
import slideManifest from '../data/slides-manifest.json';

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 1080;
const TOTAL_SLIDES = String(slideManifest.length).padStart(2, '0');

export function SlideCanvas({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const updateScale = () => setScale(node.clientWidth / DESIGN_WIDTH);
    const observer = new ResizeObserver(updateScale);
    observer.observe(node);
    updateScale();
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mou-deck-canvas"><section
      className={`relative overflow-hidden ${className}`}
      style={{
        width: DESIGN_WIDTH,
        height: DESIGN_HEIGHT,
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
      }}
    >
      {children}
    </section></div>
  );
}

export function BrandLockup({ inverse = false }: { inverse?: boolean }) {
  if (inverse) {
    return (
      <div className="flex items-center gap-3">
        <img
          src={blueMark}
          alt=""
          className="h-[60px] w-[60px] rounded-[17px] bg-mouk-paper p-[4px] object-contain"
        />
        <span className="text-[32px] font-extrabold tracking-normal text-mouk-paper">
          nempo.id
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <img src={blueMark} alt="" className="h-[60px] w-[60px] object-contain" />
      <span className="text-[32px] font-extrabold tracking-normal text-mouk-1d56c5">
        nempo.id
      </span>
    </div>
  );
}

export function SlideFooter({
  number,
  dark = false,
  leftInset = 92,
}: {
  number: string;
  dark?: boolean;
  leftInset?: number;
}) {
  return (
    <div
      className={`absolute bottom-[40px] right-[76px] flex items-center justify-between text-[16px] font-bold uppercase tracking-normal ${
        dark ? 'text-mouk-paper/55' : 'text-mouk-687789'
      }`}
      style={{ left: leftInset }}
    >
      <span>Nempo.id x Kala Muda</span>
      <span>{number} / {TOTAL_SLIDES}</span>
    </div>
  );
}

export function SectionKicker({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 text-[18px] font-bold uppercase tracking-normal ${
        light ? 'text-mouk-8bd2ff' : 'text-mouk-1d56c5'
      }`}
    >
      <span
        className={`h-[3px] w-[34px] rounded-full bg-mouk-70c5ff`}
      />
      {children}
    </div>
  );
}

export function RoundedPhoto({
  src,
  alt,
  className = '',
  position = 'center',
}: {
  src: string;
  alt: string;
  className?: string;
  position?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full object-cover ${className}`}
      style={{ objectPosition: position }}
    />
  );
}