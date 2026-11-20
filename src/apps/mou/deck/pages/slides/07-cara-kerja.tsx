import { SectionKicker, SlideCanvas, SlideFooter } from '../../components/slide-kit';

const weddingSteps = [
  {
    number: '01',
    title: 'Persiapan',
    detail: 'Konsultasi, timeline, dan koordinasi kebutuhan acara.',
    color: 'var(--color-mouk-1d56c5)',
  },
  {
    number: '02',
    title: 'Rundown',
    detail: 'Penyusunan alur acara dan briefing tim.',
    color: 'var(--color-mouk-246bb6)',
  },
  {
    number: '03',
    title: 'Koordinasi',
    detail: 'Vendor, keluarga, dan tamu sesuai ruang lingkup.',
    color: 'var(--color-mouk-167cad)',
  },
  {
    number: '04',
    title: 'Hari-H',
    detail: 'Mengatur alur dan mengawasi jalannya acara.',
    color: 'var(--color-mouk-155187)',
  },
];

export default function CaraKerjaSlide() {
  return (
    <SlideCanvas className="bg-mouk-0a3158 px-[86px] pt-[76px] text-mouk-paper">
      <div className="flex items-end justify-between">
        <div>
          <SectionKicker light>Wedding Organizer Management</SectionKicker>
          <h1 className="mt-6 max-w-[1200px] text-[76px] font-extrabold leading-[1.02] tracking-normal">
            Hari pernikahan,
            <span className="text-mouk-8bd2ff"> dikelola dengan terarah.</span>
          </h1>
        </div>
        <p className="mb-2 max-w-[360px] text-[22px] leading-[1.4] text-mouk-paper/65">
          Manajemen acara dan koordinasi dari persiapan hingga hari pelaksanaan.
        </p>
      </div>

      <div className="relative mt-[82px] grid grid-cols-4 gap-6">
        <div className="absolute left-[10%] right-[10%] top-[39px] h-[2px] bg-mouk-paper/20" />
        {weddingSteps.map((item) => (
          <article key={item.number} className="relative">
            <div
              className="relative z-10 grid h-[80px] w-[80px] place-items-center rounded-full border-[7px] border-mouk-0a3158 text-[22px] font-extrabold text-mouk-paper"
              style={{ backgroundColor: item.color }}
            >
              {item.number}
            </div>
            <h2 className="mt-8 text-[36px] font-extrabold leading-tight tracking-normal">
              {item.title}
            </h2>
            <p className="mt-4 max-w-[350px] text-[24px] leading-[1.4] text-mouk-paper/70">
              {item.detail}
            </p>
          </article>
        ))}
      </div>

      <div className="absolute bottom-[138px] left-[86px] right-[86px] flex items-center justify-between rounded-[26px] border border-mouk-paper/15 bg-mouk-paper/[0.06] px-8 py-6">
        <p className="text-[23px] font-semibold text-mouk-paper/80">
          Vendor spesialis dipilih terpisah; tim WO membantu koordinasinya.
        </p>
        <span className="rounded-full bg-mouk-70c5ff px-6 py-3 text-[17px] font-extrabold uppercase tracking-normal text-mouk-082c50">
          Diskusikan kebutuhan
        </span>
      </div>
      <SlideFooter number="09" dark />
    </SlideCanvas>
  );
}