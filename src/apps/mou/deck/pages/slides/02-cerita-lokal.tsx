import eventPhotoAsset from '@/assets/mou/karnaval.webp.asset.json';
const eventPhoto = eventPhotoAsset.url;
import { BrandLockup, SectionKicker, SlideCanvas, SlideFooter } from '../../components/slide-kit';

export default function CeritaLokalSlide() {
  return (
    <SlideCanvas className="bg-mouk-f7faff text-mouk-101322">
      <div className="grid h-full grid-cols-[1.08fr_.92fr]">
        <div className="flex flex-col px-[94px] pb-[138px] pt-[78px]">
          <BrandLockup />
          <div className="mt-[90px]">
            <SectionKicker>Layanan Nempo</SectionKicker>
            <h1 className="mt-8 max-w-[900px] text-[82px] font-extrabold leading-[1.02] tracking-normal">
              Dari ide jadi
              <span className="block text-mouk-1d56c5">pengalaman nyata.</span>
            </h1>
            <p className="mt-8 max-w-[780px] text-[34px] leading-[1.38] text-mouk-526476">
              Tim kreatif Nempo membantu brand dan bisnis merancang konten,
              kampanye, dan acara untuk audiensnya.
            </p>
            <div className="mt-11 flex flex-wrap gap-3">
              {[
                'Creator Booking',
                'Marketing Agency',
                'Kreatif Usaha',
                'Event Organizer',
                'Wedding Organizer',
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-mouk-d6e6f1 bg-mouk-paper px-7 py-4 text-[22px] font-bold text-mouk-16418e shadow-mouk-0"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative m-[36px] overflow-hidden rounded-[42px]">
          <img
            src={eventPhoto}
            alt="Festival dan kegiatan publik di Garut"
            className="h-full w-full object-cover"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mouk-071e35/80 via-transparent to-transparent" />
          <div className="absolute bottom-[54px] left-[54px] right-[54px] text-mouk-paper">
            <p className="text-[17px] font-bold uppercase tracking-normal text-mouk-paper/70">
              Cerita dan pengalaman
            </p>
            <p className="mt-3 text-[39px] font-extrabold leading-tight tracking-normal">
              Kampanye, event, dan momen spesial untuk audiens Anda.
            </p>
          </div>
        </div>
      </div>
      <SlideFooter number="02" />
    </SlideCanvas>
  );
}