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
  /** Sneak peek of the upcoming GGS website, drawn as two device screens. */
  web: {
    /** The owner has no website address yet, so the browser address bars stay empty. */
    address: '',
    peek: 'Intip web barunya!',
    home: {
      brand: 'GGS Hair Studio',
      nav: ['Layanan', 'Promo', 'Jadwal'],
      kicker: 'Salon & Spa',
      heading: 'Booking treatment jadi lebih gampang',
      button: 'Booking sekarang',
      scheduleTitle: 'Jadwal kosong hari ini',
      slots: [
        { time: '10.00', open: true },
        { time: '11.00', open: false },
        { time: '13.00', open: true },
        { time: '14.00', open: true },
        { time: '15.00', open: false },
        { time: '16.00', open: true },
      ],
      promoTitle: 'Promo hari ini',
      promos: ['Nail Art', 'Massage', 'Ratus'],
      points: 'Poin kamu',
    },
    nail: {
      title: 'Nail Art Panggilan',
      subtitle: 'Kami datang ke rumahmu',
      badge: 'Diskon',
      note: 'Harga spesial hari ini',
      button: 'Booking sekarang',
    },
  },
} as const;

export const GGS_TEASER_SPESIAL_TEXT = `${GGS_TEASER_SPESIAL.date}. ${GGS_TEASER_SPESIAL.title} ${GGS_TEASER_SPESIAL.audience}. ${GGS_TEASER_SPESIAL.benefits.map((item) => item.text).join('. ')}. ${GGS_TEASER_SPESIAL.web.peek} ${GGS_TEASER_SPESIAL.web.home.heading}. ${GGS_TEASER_SPESIAL.web.nail.title}: ${GGS_TEASER_SPESIAL.web.nail.badge}. ${GGS_TEASER_SPESIAL.cta}`;
