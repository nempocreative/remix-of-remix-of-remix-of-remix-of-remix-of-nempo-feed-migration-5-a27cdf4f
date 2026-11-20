import { BrandLockup, SectionKicker, SlideCanvas, SlideFooter } from '../../components/slide-kit';

const consultationTopics = [
  'Layanan dan tujuan yang ingin dicapai.',
  'Target audiens, tanggal, atau lokasi acara.',
  'Referensi visual dan kebutuhan tim.',
];

const setupDetails = [
  'Tim menyusun konsep, ruang lingkup, dan rencana kerja.',
  'Detail dan timeline dibahas bersama sebelum mulai.',
  'Eksekusi mengikuti layanan yang disepakati.',
];

function ActionList({
  items,
  accent,
}: {
  items: string[];
  accent: string;
}) {
  return (
    <ul className="mt-7 space-y-5">
      {items.map((item, index) => (
        <li key={item} className="flex items-start gap-4">
          <span
            className="mt-[3px] grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full text-[15px] font-extrabold text-mouk-paper"
            style={{ backgroundColor: accent }}
          >
            {index + 1}
          </span>
          <span className="text-[23px] leading-[1.35] text-mouk-34485b">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function PeranKitaSlide() {
  return (
    <SlideCanvas className="bg-mouk-f7faff px-[84px] pt-[70px] text-mouk-101322">
      <div className="flex items-start justify-between">
        <div>
          <SectionKicker>Cara kerja sama</SectionKicker>
          <h1 className="mt-5 text-[74px] font-extrabold leading-[1.02] tracking-normal">
            Dari brief <span className="text-mouk-1d56c5">sampai eksekusi.</span>
          </h1>
        </div>
        <BrandLockup />
      </div>

      <div className="mt-[48px] grid grid-cols-2 gap-7">
        <article className="h-[610px] rounded-[34px] border border-mouk-d8eaf5 bg-mouk-paper p-[40px] shadow-mouk-5">
          <span className="rounded-full bg-mouk-e7f5ff px-5 py-3 text-[16px] font-extrabold uppercase tracking-normal text-mouk-1d56c5">
            01 · Brief & konsultasi
          </span>
          <h2 className="mt-7 max-w-[650px] text-[46px] font-extrabold leading-[1.08] tracking-normal">
            Ceritakan kebutuhan brand atau acara.
          </h2>
          <ActionList items={consultationTopics} accent="var(--color-mouk-1d56c5)" />
        </article>

        <article className="h-[610px] rounded-[34px] bg-mouk-0a3158 p-[40px] text-mouk-paper shadow-mouk-6">
          <span className="rounded-full bg-mouk-paper/10 px-5 py-3 text-[16px] font-extrabold uppercase tracking-normal text-mouk-a6e0ff">
            02 · Rencana & eksekusi
          </span>
          <h2 className="mt-7 max-w-[650px] text-[46px] font-extrabold leading-[1.08] tracking-normal">
            Tim Nempo menyiapkan rencana bersama Anda.
          </h2>
          <ul className="mt-7 space-y-5">
            {setupDetails.map((item, index) => (
              <li key={item} className="flex items-start gap-4">
                <span className="mt-[3px] grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full bg-mouk-70c5ff text-[15px] font-extrabold text-mouk-082c50">
                  {index + 1}
                </span>
                <span className="text-[23px] leading-[1.35] text-mouk-paper/80">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </article>
      </div>
      <SlideFooter number="15" />
    </SlideCanvas>
  );
}