import { describe, expect, it } from 'vitest';
import { rentangAcara, suratArtCenter, tanggalLengkap, totalKuota } from './surat-art-center';

describe('surat peminjaman Gedung Art Center', () => {
  it('meminjam tempat 30–31 Desember 2026 (Rabu–Kamis)', () => {
    expect(rentangAcara()).toBe('Rabu–Kamis, 30–31 Desember 2026');
  });

  it('gedung dipakai pukul 07.00 sampai 22.00 WIB', () => {
    expect(suratArtCenter.acara.waktu).toBe('07.00 – 22.00 WIB');
  });

  it('ditujukan ke Kepala Dinas Pariwisata dan Kebudayaan Kabupaten Garut', () => {
    expect(suratArtCenter.tujuan.jabatan).toBe('Kepala Dinas Pariwisata dan Kebudayaan Kabupaten Garut');
  });

  it('untuk Pasanggiri Road to Pasar Seni 2027 di Gedung Art Center', () => {
    expect(suratArtCenter.acara.tema).toBe('Road to Pasar Seni 2027');
    expect(suratArtCenter.acara.tempat).toContain('Gedung Art Center');
  });

  it('empat kategori × 25 peserta = 100 peserta', () => {
    expect(totalKuota()).toBe(100);
  });

  it('tanggal surat ditulis lengkap dengan nama hari', () => {
    expect(tanggalLengkap('2026-11-20', false)).toBe('20 November 2026');
    expect(tanggalLengkap('2026-11-20')).toBe('Jumat, 20 November 2026');
  });
});
