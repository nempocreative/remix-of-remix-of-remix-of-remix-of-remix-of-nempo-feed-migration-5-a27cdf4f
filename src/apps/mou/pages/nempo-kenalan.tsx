import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { clampSlide, slides } from '../deck/slides';

export default function NempoKenalanPage() {
  const [slide, setSlide] = useState(1);
  const current = slides[slide - 1];
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.target as HTMLElement)?.closest('a,button,input,select,textarea')) return;
      if (['ArrowRight', 'PageDown', ' '].includes(event.key)) {
        event.preventDefault(); setSlide((value) => clampSlide(value + 1));
      } else if (['ArrowLeft', 'PageUp'].includes(event.key)) {
        event.preventDefault(); setSlide((value) => clampSlide(value - 1));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  if (!current) return null;
  return <main className="kenalan-workspace">
    <div className="kenalan-toolbar"><div><p className="eyebrow">Presentasi Nempo</p><h1>Kenalan dengan Nempo</h1></div><p className="kenalan-counter" aria-live="polite">Slide {slide} dari {slides.length}</p></div>
    <div className="kenalan-frame-wrap" onClick={(event) => {
      if ((event.target as HTMLElement)?.closest('a,button')) return;
      setSlide((value) => clampSlide(value + 1));
    }}><current.Component /></div>
    <div className="kenalan-controls" aria-label="Navigasi slide">
      <Button variant="unstyled" size="unstyled" className="button" onClick={() => setSlide(clampSlide(slide - 1))} disabled={slide === 1}><ArrowLeft size={15} /><span>Sebelumnya</span></Button>
      <span className="kenalan-counter">{current.title}</span>
      <Button variant="unstyled" size="unstyled" className="button primary" onClick={() => setSlide(clampSlide(slide + 1))} disabled={slide === slides.length}><span>Berikutnya</span><ArrowRight size={15} /></Button>
    </div>
  </main>;
}