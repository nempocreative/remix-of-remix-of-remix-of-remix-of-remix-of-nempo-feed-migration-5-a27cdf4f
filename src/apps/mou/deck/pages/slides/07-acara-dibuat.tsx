import { SectionKicker, SlideCanvas, SlideFooter } from '../../components/slide-kit';

const events = [
  {
    number: '01',
    title: 'NU National Fest',
    context: null,
    accent: 'var(--color-mouk-1d56c5)',
  },
  {
    number: '02',
    title: 'University Coffee Night',
    context: 'Domusa',
    accent: 'var(--color-mouk-147cad)',
  },
  {
    number: '03',
    title: 'Lalana Pagi',
    context: 'Kopi Jaya',
    accent: 'var(--color-mouk-43a9d4)',
  },
  {
    number: '04',
    title: 'Pesona Situ Bagendit',
    context: null,
    accent: 'var(--color-mouk-1d56c5)',
  },
  {
    number: '05',
    title: 'Temu Tarung',
    context: null,
    accent: 'var(--color-mouk-147cad)',
  },
  {
    number: '06',
    title: 'Night Out Maxi',
    context: null,
    accent: 'var(--color-mouk-43a9d4)',
  },
  {
    number: '07',
    title: 'Color the Beat',
    context: null,
    accent: 'var(--color-mouk-1d56c5)',
  },
  {
    number: '08',
    title: 'Riuh Rona',
    context: null,
    accent: 'var(--color-mouk-147cad)',
  },
  {
    number: '09',
    title: 'Grand Opening GGS',
    context: null,
    accent: 'var(--color-mouk-43a9d4)',
  },
];

export default function AcaraDibuatSlide() {
  return (
    <SlideCanvas className="bg-mouk-f5f9ff px-[82px] pt-[68px] text-mouk-101322">
      <header className="flex items-end justify-between border-b border-mouk-c9dbe9 pb-8">
        <div>
          <SectionKicker>Portofolio · Produksi acara</SectionKicker>
          <h1 className="mt-5 text-[72px] font-extrabold leading-[1.02] tracking-normal">
            Acara yang dibuat
          </h1>
        </div>
        <div className="mb-2 flex items-center gap-3 text-[16px] font-bold uppercase tracking-normal text-mouk-147cad">
          <span className="h-[3px] w-[34px] rounded-full bg-mouk-70c5ff" />
          Produksi Nempo
        </div>
      </header>

      <div className="mt-[30px] grid grid-cols-3 gap-5">
        {events.map((event) => (
          <article
            key={event.number}
            className="relative flex h-[232px] flex-col overflow-hidden rounded-[20px] border border-mouk-d6e4ed bg-mouk-paper px-7 pb-6 pt-5"
          >
            <div className="flex items-center gap-4">
              <span
                className="grid h-[48px] w-[48px] shrink-0 place-items-center rounded-full text-[15px] font-extrabold tracking-normal text-mouk-paper"
                style={{ backgroundColor: event.accent }}
              >
                {event.number}
              </span>
              <span className="h-px flex-1 bg-mouk-dce8f1" />
              <span className="text-[12px] font-extrabold uppercase tracking-normal text-mouk-738599">
                Acara
              </span>
            </div>

            <div className="mt-auto">
              <div
                className="mb-4 h-[4px] w-[54px] rounded-full"
                style={{ backgroundColor: event.accent }}
              />
              <h2 className="text-[34px] font-extrabold leading-[1.05] tracking-normal text-mouk-153653">
                {event.title}
              </h2>
              {event.context && (
                <div className="mt-3 flex items-baseline gap-3 border-t border-mouk-e2ebf1 pt-3">
                  <p className="text-[11px] font-extrabold uppercase tracking-normal text-mouk-147cad">
                    Konteks
                  </p>
                  <p className="text-[18px] font-semibold leading-[1.2] text-mouk-526476">
                    {event.context}
                  </p>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <SlideFooter number="08" />
    </SlideCanvas>
  );
}
