import { SectionKicker, SlideCanvas, SlideFooter } from '../../components/slide-kit';

const spaces = [
  {
    number: '01',
    name: 'Strategi & sistem',
    label: 'ARAH & RENCANA',
    title: 'Strategi dan sistem.',
    body: 'Nempo menyusun arah marketing dan sistem kerja untuk perusahaan.',
    color: 'var(--color-mouk-1d56c5)',
    wash: 'var(--color-mouk-e7f5ff)',
  },
  {
    number: '02',
    name: 'Tim marketing Nempo',
    label: 'TIM BULANAN',
    title: 'Nempo jadi tim Anda.',
    body: 'Tim Nempo bekerja rutin bersama perusahaan untuk mengelola aktivitas marketing.',
    color: 'var(--color-mouk-168b68)',
    wash: 'var(--color-mouk-e8f7f0)',
  },
  {
    number: '03',
    name: 'Konten & eksekusi',
    label: 'KONTEN & EKSEKUSI',
    title: 'Konten dan campaign.',
    body: 'Nempo merencanakan dan menjalankan konten, promosi, serta aktivitas pemasaran.',
    color: 'var(--color-mouk-147cad)',
    wash: 'var(--color-mouk-e8f7ff)',
  },
];

export default function TigaRuangSlide() {
  return (
    <SlideCanvas className="bg-mouk-eff7fd px-[90px] pt-[74px] text-mouk-101322">
      <SectionKicker>Marketing Agency</SectionKicker>
      <div className="mt-5 flex items-end justify-between">
        <h1 className="max-w-[1170px] text-[76px] font-extrabold leading-[1.02] tracking-normal">
          Nempo menjadi
          <span className="text-mouk-1d56c5"> tim marketing Anda.</span>
        </h1>
        <p className="mb-2 max-w-[390px] text-[20px] leading-[1.4] text-mouk-526476">
          Dalam layanan ini, Nempo menjadi tim marketing bulanan perusahaan.
          Tim Nempo membantu menyusun strategi dan sistem kerja, serta mengelola
          konten dan kegiatan pemasaran.
        </p>
      </div>

      <div className="relative mt-[88px]">
        <div className="absolute left-[110px] right-[110px] top-[44px] h-[4px] rounded-full bg-mouk-c6ddeb" />
        <div className="grid grid-cols-3 gap-12">
          {spaces.map((space, index) => (
            <article key={space.number} className="relative">
              <div className="relative z-10 flex h-[90px] w-[90px] items-center justify-center rounded-full border-[10px] border-mouk-eff7fd text-[21px] font-extrabold text-mouk-paper shadow-mouk-3" style={{ backgroundColor: space.color }}>
                {space.number}
              </div>
              <div className={`mt-8 ${index === 1 ? 'ml-7' : ''}`}>
                <p className="text-[15px] font-extrabold uppercase tracking-normal" style={{ color: space.color }}>
                  {space.label}
                </p>
                <h2 className="mt-3 text-[39px] font-extrabold leading-[1.05] tracking-normal">
                  {space.title}
                </h2>
                <p className="mt-4 max-w-[480px] text-[23px] leading-[1.45] text-mouk-526476">
                  {space.body}
                </p>
                <div className="mt-6 h-[5px] w-[70px] rounded-full" style={{ backgroundColor: space.color }} />
                <p className="mt-4 text-[18px] font-bold text-mouk-263f59">{space.name}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="absolute bottom-[126px] left-[90px] right-[90px] flex items-center justify-between rounded-[26px] border border-mouk-cbdfea bg-mouk-paper/90 px-8 py-5 shadow-mouk-4">
        <div>
          <p className="text-[14px] font-extrabold uppercase tracking-normal text-mouk-1d56c5">
            Model kerja sama
          </p>
          <p className="mt-1 text-[22px] font-extrabold tracking-normal text-mouk-16375b">
            Tim marketing bulanan
          </p>
        </div>
        <div className="text-right">
          <p className="text-[14px] font-extrabold uppercase tracking-normal text-mouk-526476">
            Durasi minimum
          </p>
          <p className="mt-1 text-[22px] font-extrabold text-mouk-16375b">
            3 bulan
          </p>
        </div>
      </div>
      <SlideFooter number="04" />
    </SlideCanvas>
  );
}