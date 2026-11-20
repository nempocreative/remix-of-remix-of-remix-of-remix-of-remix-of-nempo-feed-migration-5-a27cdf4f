export const GGS_TEASER_SPESIAL_SLIDE = 61;

export const GGS_TEASER_SPESIAL = {
  date: '20 November 2026',
  title: 'Something Spesial',
  audience: 'buat customer GGS Hair Studio',
  benefits: [
    { key: 'booking', text: 'Booking lebih gampang' },
    { key: 'schedule', text: 'Bisa lihat jadwal kosong' },
    { key: 'promo', text: 'Promo treatment melimpah setiap hari' },
    { key: 'points', text: 'Poin spesial buat kamu yang datang treatment' },
    { key: 'more', text: 'Dan masih banyak lagi' },
  ],
  cta: 'Pantau terus & jangan lupa follow IG GGS ya!',
} as const;

export const GGS_TEASER_SPESIAL_TEXT = `${GGS_TEASER_SPESIAL.date}. ${GGS_TEASER_SPESIAL.title} ${GGS_TEASER_SPESIAL.audience}. ${GGS_TEASER_SPESIAL.benefits.map((item) => item.text).join('. ')}. ${GGS_TEASER_SPESIAL.cta}`;
