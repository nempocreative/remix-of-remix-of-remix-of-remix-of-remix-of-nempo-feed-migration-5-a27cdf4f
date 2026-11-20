import foodPhotoAsset from '@/assets/mou/local-food.jpg.asset.json';
const foodPhoto = foodPhotoAsset.url;
import { SectionKicker, SlideCanvas, SlideFooter } from '../../components/slide-kit';

export default function KalaMudaSlide() {
  return (
    <SlideCanvas className="bg-mouk-edf6ff text-mouk-101322">
      <div className="grid h-full grid-cols-[1fr_1.02fr]">
        <div className="relative m-[34px] overflow-hidden rounded-[40px]">
          <img
            src={foodPhoto}
            alt="Hidangan lokal yang disajikan bersama"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: 'center 43%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mouk-061c32/80 via-transparent to-transparent" />
          <div className="absolute bottom-[42px] left-[42px] right-[42px] flex items-end justify-between">
            <div className="max-w-[480px] text-mouk-paper">
              <p className="text-[16px] font-bold uppercase tracking-normal text-mouk-paper/70">
                Contoh layanan kreatif
              </p>
              <p className="mt-3 text-[35px] font-extrabold leading-tight tracking-normal">
                Tunjukkan karakter brand dengan lebih kuat.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center px-[78px] pb-[126px] pt-[80px]">
          <SectionKicker>Kreatif usaha</SectionKicker>
          <span className="mt-8 w-fit rounded-full bg-mouk-e7f5ff px-6 py-3 text-[16px] font-extrabold uppercase tracking-normal text-mouk-1d56c5">
            Konten · Visual · Branding
          </span>
          <h1 className="mt-7 text-[82px] font-extrabold leading-[0.98] tracking-normal">
            Bikin brand
            <span className="mt-3 block text-mouk-1d56c5">lebih berkarakter.</span>
          </h1>
          <p className="mt-7 max-w-[730px] text-[29px] leading-[1.4] text-mouk-526476">
            Produksi konten, visual, dan branding untuk membantu bisnis
            menampilkan produk serta keunikan usahanya.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            {['Konten', 'Visual', 'Branding'].map((word) => (
              <span
                key={word}
                className="rounded-full border border-mouk-cfe4f4 bg-mouk-paper px-5 py-3 text-[18px] font-bold text-mouk-16418e"
              >
                {word}
              </span>
            ))}
          </div>
          <p className="mt-8 max-w-[650px] text-[19px] leading-relaxed text-mouk-6b7b8c">
            Materi kreatif disesuaikan dengan identitas dan kebutuhan bisnis.
          </p>
        </div>
      </div>
      <SlideFooter number="05" />
    </SlideCanvas>
  );
}