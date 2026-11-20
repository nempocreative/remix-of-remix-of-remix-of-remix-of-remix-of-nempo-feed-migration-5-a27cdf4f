import { SectionKicker, SlideCanvas, SlideFooter } from '../../components/slide-kit';
import eventPhotoAsset from '@/assets/mou/karnaval.webp.asset.json';
const eventPhoto = eventPhotoAsset.url;

const eventFormats = [
  {
    title: 'Festival & konser',
    detail: 'Panggung, hiburan, dan pengalaman untuk audiens.',
    color: 'var(--color-mouk-1d56c5)',
    bg: 'var(--color-mouk-e8f3ff)',
  },
  {
    title: 'Sport event',
    detail: 'Pertandingan dan kegiatan olahraga untuk komunitas.',
    color: 'var(--color-mouk-147cad)',
    bg: 'var(--color-mouk-e8f7ff)',
  },
  {
    title: 'Touring & gathering',
    detail: 'Pengalaman bersama untuk komunitas atau perusahaan.',
    color: 'var(--color-mouk-356fbd)',
    bg: 'var(--color-mouk-edf3ff)',
  },
  {
    title: 'Pameran & expo',
    detail: 'Perkenalkan produk, layanan, dan brand kepada pengunjung.',
    color: 'var(--color-mouk-1675a2)',
    bg: 'var(--color-mouk-eaf7fa)',
  },
  {
    title: 'Corporate & community',
    detail: 'Acara perusahaan, komunitas, dan kolaborasi.',
    color: 'var(--color-mouk-2265aa)',
    bg: 'var(--color-mouk-eef5ff)',
  },
  {
    title: 'Brand activation',
    detail: 'Aktivasi brand yang mempertemukan produk dan audiens.',
    color: 'var(--color-mouk-176a76)',
    bg: 'var(--color-mouk-e7f7f8)',
  },
];

export default function MinatKomunitasSlide() {
  return (
    <SlideCanvas className="bg-mouk-f5f9ff text-mouk-101322">
      <div className="grid h-full grid-cols-[1.08fr_.92fr]">
        <div className="flex flex-col px-[86px] pb-[132px] pt-[78px]">
          <SectionKicker>Event Organizer</SectionKicker>
          <h1 className="mt-6 max-w-[900px] text-[75px] font-extrabold leading-[1.02] tracking-normal">
            Ruang untuk
            <span className="block text-mouk-1d56c5">acara apa pun.</span>
          </h1>
          <p className="mt-5 max-w-[700px] text-[23px] leading-[1.4] text-mouk-526476">
            Dari pengalaman publik hingga pertemuan yang lebih intim.
          </p>
          <div className="mt-9">
            {eventFormats.map((interest, index) => (
              <article key={interest.title} className="flex items-center gap-5 border-t border-mouk-d9e5ee py-[15px]">
                <span className="w-[43px] shrink-0 text-[15px] font-extrabold tracking-normal" style={{ color: interest.color }}>0{index + 1}</span>
                <h2 className="w-[300px] shrink-0 text-[24px] font-extrabold tracking-normal" style={{ color: interest.color }}>{interest.title}</h2>
                <p className="text-[17px] leading-[1.3] text-mouk-526476">{interest.detail}</p>
              </article>
            ))}
          </div>
          <p className="mt-auto pt-5 text-[17px] font-semibold text-mouk-526476">
            Format dan detail pelaksanaan dibahas sesuai tujuan acara.
          </p>
        </div>
        <div className="relative m-[34px] overflow-hidden rounded-[38px] bg-mouk-0a3158">
          <img src={eventPhoto} alt="Suasana festival dan perayaan di ruang publik" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: 'center' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-mouk-061e39/90 via-mouk-061e39/10 to-transparent" />
          <div className="absolute left-[38px] top-[38px] rounded-full border border-mouk-paper/40 bg-mouk-082c50/35 px-5 py-3 text-[15px] font-bold uppercase tracking-normal text-mouk-paper backdrop-blur-sm">
            Festival · Pameran · Aktivasi
          </div>
          <div className="absolute bottom-[54px] left-[46px] right-[46px] text-mouk-paper">
            <p className="text-[15px] font-bold uppercase tracking-normal text-mouk-a6e0ff">Event Organizer Nempo</p>
            <p className="mt-4 text-[45px] font-extrabold leading-[1.06] tracking-normal">
              Detail acara bergerak bersama.
            </p>
          </div>
        </div>
      </div>
      <SlideFooter number="06" />
    </SlideCanvas>
  );
}