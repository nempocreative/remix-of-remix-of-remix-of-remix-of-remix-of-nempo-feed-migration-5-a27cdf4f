import { SectionKicker, SlideCanvas, SlideFooter } from '../../components/slide-kit';

const rows = [
  { package: 'Essential', wo: 'Rp2.500.000', live: 'Rp5.300.000', noLive: 'Rp4.300.000' },
  { package: 'Signature', wo: 'Rp4.000.000', live: 'Rp6.800.000', noLive: 'Rp5.800.000' },
  { package: 'Premium', wo: 'Rp6.000.000', live: 'Rp8.800.000', noLive: 'Rp7.800.000' },
];

export default function ContohTotalKombinasiSlide() {
  return (
    <SlideCanvas className="bg-mouk-f5f9ff px-[88px] pt-[68px] text-mouk-101322">
      <div className="flex items-end justify-between">
        <div>
          <SectionKicker>Simulasi total biaya · WO + adat Sunda</SectionKicker>
          <h1 className="mt-5 text-[70px] font-extrabold leading-[1.02] tracking-normal">
            WO dan pilihan adat,
            <span className="text-mouk-1d56c5"> dalam satu simulasi.</span>
          </h1>
        </div>
        <p className="mb-2 max-w-[390px] text-[21px] leading-[1.4] text-mouk-526476">
          Contoh total menggabungkan paket WO dengan tarif khusus vendor adat.
        </p>
      </div>

      <div className="mt-[52px] overflow-hidden rounded-[30px] border border-mouk-cddfe9 bg-mouk-paper shadow-mouk-8">
        <div className="grid grid-cols-[1.05fr_1fr_1.3fr_1.3fr] items-center bg-mouk-0a3158 px-8 py-6 text-mouk-paper">
          <div className="text-[15px] font-extrabold uppercase tracking-normal">Paket WO</div>
          <div className="text-[15px] font-extrabold uppercase tracking-normal">Harga WO</div>
          <div className="border-l border-mouk-paper/20 pl-8">
            <p className="text-[15px] font-extrabold uppercase tracking-normal text-mouk-a6e0ff">Total dengan live</p>
            <p className="mt-1 text-[14px] text-mouk-paper/60">Tarif adat Rp2.800.000</p>
          </div>
          <div className="border-l border-mouk-paper/20 pl-8">
            <p className="text-[15px] font-extrabold uppercase tracking-normal text-mouk-a6e0ff">Total tanpa live</p>
            <p className="mt-1 text-[14px] text-mouk-paper/60">Tarif adat Rp1.800.000</p>
          </div>
        </div>
        {rows.map((row, index) => (
          <div key={row.package} className={`grid grid-cols-[1.05fr_1fr_1.3fr_1.3fr] items-center px-8 py-[27px] ${index < rows.length - 1 ? 'border-b border-mouk-dce8f1' : ''} ${index === 1 ? 'bg-mouk-f2f8fc' : 'bg-mouk-paper'}`}>
            <div>
              <p className="text-[26px] font-extrabold tracking-normal">{row.package}</p>
              <p className="mt-1 text-[14px] font-semibold text-mouk-687789">Wedding Organizer</p>
            </div>
            <p className="text-[20px] font-bold text-mouk-526476">{row.wo}</p>
            <p className="border-l border-mouk-dce8f1 pl-8 text-[34px] font-extrabold tracking-normal text-mouk-1d56c5">{row.live}</p>
            <p className="border-l border-mouk-dce8f1 pl-8 text-[34px] font-extrabold tracking-normal text-mouk-147cad">{row.noLive}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-[1fr_1fr] gap-5">
        <div className="flex items-center gap-4 rounded-[18px] bg-mouk-e7f3fc px-6 py-5">
          <span className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full bg-mouk-1d56c5 text-[15px] font-extrabold text-mouk-paper">01</span>
          <p className="text-[17px] leading-[1.35] text-mouk-34485b">Biaya WO mencakup manajemen; vendor independen seperti dekorasi, catering, MUA, dokumentasi, atau hiburan tidak termasuk kecuali disepakati terpisah.</p>
        </div>
        <div className="flex items-center gap-4 rounded-[18px] bg-mouk-e9f6f7 px-6 py-5">
          <span className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full bg-mouk-147cad text-[15px] font-extrabold text-mouk-paper">02</span>
          <p className="text-[17px] leading-[1.35] text-mouk-34485b">Tarif adat dan total akhir perlu dikonfirmasi kembali dengan vendor rekanan berdasarkan ketersediaan, jadwal, durasi, transportasi, serta kebutuhan teknis.</p>
        </div>
      </div>
      <SlideFooter number="13" />
    </SlideCanvas>
  );
}
