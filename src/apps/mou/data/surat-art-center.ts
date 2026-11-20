/**
 * Surat permohonan peminjaman Gedung Art Center untuk Pasanggiri Jaipong
 * (Road to Pasar Seni 2027). Detail lomba mengikuti situs NEMPO
 * (github.com/nempocreative/...-nempo-website-migration-5, src/data/lomba.ts).
 */

const HARI = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const BULAN = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
];

/** "2026-12-30" → "Rabu, 30 Desember 2026" (dihitung UTC supaya tidak bergeser zona waktu). */
export function tanggalLengkap(iso: string, denganHari = true): string {
  const [y, m, d] = iso.split('-').map(Number);
  const hari = HARI[new Date(Date.UTC(y, m - 1, d)).getUTCDay()];
  const isi = `${d} ${BULAN[m - 1]} ${y}`;
  return denganHari ? `${hari}, ${isi}` : isi;
}

export const suratArtCenter = {
  nomor: '003/NEMPO/SP/XI/2026',
  tempatSurat: 'Garut',
  tanggalSurat: '2026-11-20',
  lampiran: '–',
  perihal: 'Permohonan Peminjaman Gedung Art Center',
  tujuan: {
    jabatan: 'Kepala Dinas Pariwisata dan Kebudayaan Kabupaten Garut',
    alamat: 'Jl. Raya Ciledug No. 120, Kota Kulon, Kec. Garut Kota, Kabupaten Garut 44114',
  },
  pengirim: {
    nama: 'Nempo.id',
    alamat: 'Jalan Ahmad Yani No. 34, Pakuwon, Garut',
    whatsapp: '+62 857-2498-1356',
    instagram: '@nempo.id',
    penandatangan: 'Syahrul Ramadhani Nasution',
    jabatan: 'Founder Nempo',
  },
  acara: {
    nama: 'Pasanggiri Jaipong se-Jawa Barat & Pemilihan Duta Pasar Seni',
    tema: 'Road to Pasar Seni 2027',
    tanggalMulai: '2026-12-30',
    tanggalSelesai: '2026-12-31',
    waktu: '07.00 – 22.00 WIB',
    tempat: 'Gedung Art Center, Jl. Proklamasi, Kec. Tarogong Kidul, Kabupaten Garut',
    kategori: ['TK', 'SD kelas 1–3', 'SD kelas 4–6', 'SMP–SMA'],
    kuotaPerKategori: 25,
  },
  fasilitas: [
    'Ruang pertunjukan beserta panggung',
    'Ruang rias dan ruang ganti peserta',
    'Area parkir pengunjung',
  ],
} as const;

/** "Rabu–Kamis, 30–31 Desember 2026" */
export function rentangAcara(): string {
  const a = tanggalLengkap(suratArtCenter.acara.tanggalMulai).split(', ');
  const b = tanggalLengkap(suratArtCenter.acara.tanggalSelesai).split(', ');
  const [d1] = a[1].split(' ');
  return `${a[0]}–${b[0]}, ${d1}–${b[1]}`;
}

export function totalKuota(): number {
  return suratArtCenter.acara.kategori.length * suratArtCenter.acara.kuotaPerKategori;
}
