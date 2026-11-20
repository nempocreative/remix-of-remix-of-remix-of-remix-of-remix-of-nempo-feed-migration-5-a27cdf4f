import { type ReactNode } from 'react';
import { Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import mark from '@/assets/mou/nempo-mark.png.asset.json';
import { SuratArtCenterDocument } from '@/apps/mou/pages/surat-art-center';

const totalPages = 4;

const clauses = [
  {
    title: 'Tujuan Kerja Sama',
    content: (
      <p>
        Para Pihak sepakat bekerja sama dalam penyediaan layanan pemasaran dan produksi konten
        untuk mendukung kegiatan promosi GGS Hair Studio. Nempo melaksanakan layanan sesuai
        ruang lingkup dan rencana kerja yang disepakati dalam Nota Kesepahaman ini.
      </p>
    ),
  },
  {
    title: 'Ruang Lingkup Layanan',
    content: (
      <>
        <p>Ruang lingkup layanan pemasaran dan produksi konten yang disediakan Nempo meliputi:</p>
        <ul className="doc-list service-list">
          <li>Penyediaan satu personel siaga untuk mendukung komunikasi pemasaran (marketing communication/markom) serta pengambilan konten.</li>
          <li>Penyusunan strategi pemasaran dan promosi.</li>
          <li>Pengambilan foto dan video untuk keperluan konten.</li>
          <li>Penyuntingan video untuk format Reels dan TikTok.</li>
          <li>Perancangan materi konten untuk media sosial.</li>
          <li>Penulisan teks (caption) dan naskah promosi (copywriting).</li>
          <li>Penyusunan kalender konten dan jadwal publikasi.</li>
          <li>Koordinasi dan pengawasan atas pelaksanaan pekerjaan sesuai SOP dan tenggat waktu yang disepakati Para Pihak.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Hasil Kerja dan Persetujuan Materi',
    content: (
      <>
        <p>
          Jenis, format, frekuensi, dan jadwal publikasi konten menyesuaikan kebutuhan promosi serta
          disepakati Para Pihak sebelum periode kerja dimulai. Rencana konten disusun terpisah dan
          tidak menjadi bagian dari Nota Kesepahaman ini.
        </p>
        <ul className="doc-list">
          <li>Nempo menyerahkan materi kepada Klien untuk ditinjau dan disetujui sebelum dipublikasikan.</li>
          <li>
            Perubahan atas materi yang telah disetujui dibahas terlebih dahulu dan dapat memengaruhi
            jadwal dan/atau biaya.
          </li>
          <li>Layanan ini tidak menjamin capaian jangkauan, penjualan, atau hasil usaha tertentu.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Jangka Waktu dan Perpanjangan',
    content: (
      <p>
        Masa kerja sama awal berlaku selama 3 (tiga) bulan, terhitung sejak tanggal penandatanganan
        Nota Kesepahaman ini. Setelah masa tersebut berakhir, kerja sama dapat diperpanjang apabila Para
        Pihak menilai terdapat kecocokan dan menyepakati perpanjangan secara tertulis sebelum masa
        kerja sama berakhir. Perpanjangan tidak berlaku secara otomatis.
      </p>
    ),
  },
  {
    title: 'Biaya, Penagihan, dan Pembayaran',
    content: (
      <ul className="doc-list">
        <li>
          Biaya layanan sebesar <strong>Rp4.500.000 (empat juta lima ratus ribu rupiah) per bulan</strong>.
        </li>
        <li>
          Untuk bulan pertama, Klien membayar uang muka (DP) sebesar 50%
          (<strong>Rp2.250.000</strong>) pada saat penandatanganan Nota Kesepahaman ini.
        </li>
        <li>
          Sisa pembayaran bulan pertama sebesar 50% (<strong>Rp2.250.000</strong>) dibayarkan
          pada tanggal mulai periode kerja bulan kedua.
        </li>
        <li>
          Biaya layanan untuk bulan kedua, bulan ketiga, dan setiap periode perpanjangan dibayarkan
          di muka paling lambat 5 (lima) hari kalender setelah menerima tagihan.
        </li>
        <li>
          Pembayaran dilakukan melalui rekening berikut:
          <dl className="bank-details" aria-label="Informasi rekening pembayaran">
            <dt>Bank</dt>
            <dd>BCA</dd>
            <dt>Nomor rekening</dt>
            <dd>4461298197</dd>
            <dt>Atas nama</dt>
            <dd>Syahrul Ramadhani</dd>
          </dl>
          <p>
            Pajak, apabila berlaku, mengikuti ketentuan peraturan yang berlaku.
          </p>
        </li>
        <li>
          Biaya iklan, talent, transportasi, properti produksi, dan kebutuhan di luar paket tidak
          termasuk dalam biaya layanan dan hanya dapat dikeluarkan setelah memperoleh persetujuan
          Klien.
        </li>
        <li>
          Apabila pembayaran terlambat, Nempo dapat menunda pekerjaan setelah terlebih dahulu
          memberitahukan Klien. Jadwal kerja disesuaikan dengan lamanya penundaan tersebut.
        </li>
      </ul>
    ),
  },
  {
    title: 'Kewajiban Nempo',
    content: (
      <ul className="doc-list">
        <li>Nempo mengelola tim dan personel yang ditugaskan.</li>
        <li>
          Nempo melaksanakan layanan sesuai ruang lingkup dan rencana kerja yang disepakati.
        </li>
        <li>Nempo menyerahkan materi kepada Klien untuk ditinjau.</li>
        <li>
          Nempo memberitahukan Klien apabila terdapat kendala yang dapat memengaruhi pelaksanaan
          atau jadwal pekerjaan.
        </li>
      </ul>
    ),
  },
  {
    title: 'Kewajiban Klien',
    content: (
      <ul className="doc-list">
        <li>
          Klien menunjuk satu narahubung utama serta menyediakan informasi, akses, materi, dan
          persetujuan yang diperlukan secara tepat waktu.
        </li>
        <li>
          Klien menyediakan perangkat pendukung, seperti laptop, telepon seluler, atau tablet,
          untuk menunjang kelancaran dan efektivitas proses produksi konten.
        </li>
        <li>
          Klien memastikan informasi, klaim, dan materi yang diberikan kepada Nempo akurat serta
          dapat digunakan secara sah.
        </li>
        <li>
          Keterlambatan penyediaan materi atau persetujuan dapat menggeser jadwal pekerjaan.
        </li>
      </ul>
    ),
  },
  {
    title: 'Kerahasiaan',
    content: (
      <p>
        Para Pihak wajib menjaga kerahasiaan informasi nonpublik yang diperoleh dalam pelaksanaan
        kerja sama dan hanya menggunakannya untuk tujuan tersebut. Kewajiban ini tidak berlaku
        terhadap informasi yang telah tersedia untuk umum bukan akibat pelanggaran Nota
        Kesepahaman, telah dimiliki secara sah oleh pihak penerima, atau wajib diungkapkan
        berdasarkan ketentuan hukum. Kewajiban kerahasiaan tetap berlaku setelah kerja sama berakhir.
      </p>
    ),
  },
  {
    title: 'Hak Penggunaan dan Kepemilikan Hasil Kerja',
    content: (
      <p>
        Setelah seluruh tagihan yang berkaitan dengan hasil kerja dilunasi, Klien berhak menggunakan
        hasil akhir yang diserahkan Nempo untuk kepentingan usahanya. Aset, metode, dan templat yang
        telah dimiliki masing-masing pihak sebelum kerja sama tetap menjadi milik pihak tersebut.
        Nempo hanya dapat menampilkan hasil kerja sebagai portofolio setelah memperoleh persetujuan
        Klien.
      </p>
    ),
  },
  {
    title: 'Perubahan dan Pengakhiran Kerja Sama',
    content: (
      <ul className="doc-list">
        <li>
          Perubahan ruang lingkup, jadwal, atau biaya berlaku setelah disetujui secara tertulis oleh
          Para Pihak, termasuk melalui email atau pesan kepada narahubung yang ditunjuk.
        </li>
        <li>
          Pengakhiran kerja sama sebelum masa berlakunya berakhir hanya dapat dilakukan berdasarkan
          kesepakatan tertulis Para Pihak. Pihak yang mengusulkan pengakhiran wajib menyampaikan
          pemberitahuan tertulis sekurang-kurangnya 30 (tiga puluh) hari kalender sebelum tanggal
          pengakhiran yang diusulkan, dengan mencantumkan alasan yang dinilai bersifat fatal oleh
          Para Pihak.
        </li>
        <li>
          Apabila kerja sama berakhir di tengah periode berjalan, Klien tetap membayar pekerjaan yang
          telah dilaksanakan dan biaya pihak ketiga yang telah disetujui. Kelebihan pembayaran
          untuk pekerjaan yang belum dilaksanakan dikembalikan setelah perhitungan bersama.
        </li>
      </ul>
    ),
  },
  {
    title: 'Penyelesaian Perselisihan',
    content: (
      <p>
        Perselisihan yang timbul sehubungan dengan Nota Kesepahaman ini terlebih dahulu diselesaikan
        melalui musyawarah selama 30 (tiga puluh) hari kalender sejak salah satu pihak menyampaikan
        pemberitahuan tertulis mengenai perselisihan tersebut. Apabila tidak tercapai kesepakatan,
        Para Pihak dapat menempuh penyelesaian melalui pengadilan yang berwenang di Republik
        Indonesia.
      </p>
    ),
  },
  {
    title: 'Sifat Mengikat',
    content: (
      <p>
        Nota Kesepahaman ini bersifat mengikat dan berlaku bagi Para Pihak sejak ditandatangani.
        Para Pihak wajib melaksanakan hak dan kewajiban yang diatur di dalamnya dengan itikad baik.
      </p>
    ),
  },
  {
    title: 'Penutup',
    content: (
      <p>
        Hal-hal yang belum diatur dalam Nota Kesepahaman ini akan dibahas dan disepakati secara
        tertulis oleh Para Pihak.
      </p>
    ),
  },
];

function DocSection({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return (
    <section className="doc-section" aria-label={`Pasal ${number}: ${title}`}>
      <div className="doc-section-head">
        <span className="doc-section-number">PASAL {number}</span>
        <h3>{title}</h3>
      </div>
      <div className="doc-section-body">{children}</div>
    </section>
  );
}

function MouDocument() {
  const renderClauses = (start: number, end: number) =>
    clauses.slice(start, end).map((clause, index) => (
      <DocSection
        key={clause.title}
        number={String(start + index + 1)}
        title={clause.title}
      >
        {clause.content}
      </DocSection>
    ));

  return (
    <article className="document preview-document" aria-label="Pratinjau Nota Kesepahaman">
      <section className="doc-page">
        <div className="doc-topline">
          <div className="doc-brand-lockup">
            <img
              className="doc-logo"
              src={mark.url}
              alt="Logo Nempo"
            />
            <div className="doc-brand-copy"><strong>NEMPO</strong></div>
          </div>
        </div>

        <header className="doc-heading">
          <h2>NOTA KESEPAHAMAN</h2>
          <p>KERJA SAMA LAYANAN PEMASARAN DAN PRODUKSI KONTEN</p>
          <p>Nomor: NEMPO/GGS/MOU/001</p>
        </header>

        <p className="doc-intro">
          Nota Kesepahaman ini dibuat pada tanggal 12 Oktober 2026 oleh dan antara:
        </p>

        <div className="doc-parties">
          <div className="doc-party">
            <div className="doc-party-heading"><strong>PIHAK PERTAMA</strong></div>
            <div className="doc-party-name">Nempo</div>
            <dl className="doc-party-details">
              <div className="doc-party-row">
                <dt>Nama resmi</dt><span aria-hidden="true">:</span><dd>Nempo.id</dd>
              </div>
              <div className="doc-party-row">
                <dt>Alamat korespondensi</dt><span aria-hidden="true">:</span><dd>Jalan Ahmad Yani No. 34, Pakuwon, Garut</dd>
              </div>
              <div className="doc-party-row">
                <dt>Penandatangan</dt><span aria-hidden="true">:</span><dd>Syahrul Ramadhani Nasution</dd>
              </div>
              <div className="doc-party-row">
                <dt>Jabatan</dt><span aria-hidden="true">:</span><dd>Founder Nempo</dd>
              </div>
            </dl>
            <p className="doc-party-description">Penyedia layanan pemasaran, selanjutnya disebut “Nempo”</p>
          </div>
          <div className="doc-party">
            <div className="doc-party-heading"><strong>PIHAK KEDUA</strong></div>
            <div className="doc-party-name">GGS Beauty</div>
            <dl className="doc-party-details">
              <div className="doc-party-row">
                <dt>Nama resmi</dt><span aria-hidden="true">:</span><dd>GGS Beauty</dd>
              </div>
              <div className="doc-party-row">
                <dt>Alamat korespondensi</dt><span aria-hidden="true">:</span><dd>Jl. Cimanuk No.309, Sukagalih, Kec. Tarogong Kidul, Kabupaten Garut</dd>
              </div>
              <div className="doc-party-row">
                <dt>Penandatangan</dt><span aria-hidden="true">:</span><dd>Imel Arsawijaya</dd>
              </div>
              <div className="doc-party-row">
                <dt>Jabatan</dt><span aria-hidden="true">:</span><dd>Founder</dd>
              </div>
            </dl>
            <p className="doc-party-description">Klien, selanjutnya disebut “Klien”</p>
          </div>
        </div>

        <p className="doc-intro">
          Nempo dan Klien secara bersama-sama disebut “<strong>Para Pihak</strong>”. Para Pihak
          sepakat untuk tunduk pada ketentuan berikut:
        </p>
        {renderClauses(0, 2)}
        <DocPageFooter page={1} />
      </section>

      <section className="doc-page">
        <div className="doc-page-heading">
          <span>NEMPO</span>
          <span>NOTA KESEPAHAMAN · NEMPO / GGS BEAUTY</span>
        </div>
        {renderClauses(2, 5)}
        <DocPageFooter page={2} />
      </section>

      <section className="doc-page">
        <div className="doc-page-heading">
          <span>NEMPO</span>
          <span>NOTA KESEPAHAMAN · NEMPO / GGS BEAUTY</span>
        </div>
        {renderClauses(5, 10)}
        <DocPageFooter page={3} />
      </section>

      <section className="doc-page">
        <div className="doc-page-heading">
          <span>NEMPO</span>
          <span>NOTA KESEPAHAMAN · NEMPO / GGS BEAUTY</span>
        </div>
        {renderClauses(10, clauses.length)}
        <div className="signature-grid">
          <div className="signature">
            <div className="signature-party">PIHAK PERTAMA · NEMPO</div>
            <div className="sign-space" aria-hidden="true" />
            <div className="sign-name">Syahrul Ramadhani Nasution</div>
            <div className="sign-title">Founder Nempo</div>
            <div className="sign-place">Tanggal: 12 Oktober 2026</div>
          </div>
          <div className="signature">
            <div className="signature-party">PIHAK KEDUA · GGS BEAUTY</div>
            <div className="sign-space" aria-hidden="true" />
            <div className="sign-name">Imel Arsawijaya</div>
            <div className="sign-title">Founder</div>
            <div className="sign-place">Tanggal: 12 Oktober 2026</div>
          </div>
        </div>
        <DocPageFooter page={4} />
      </section>

    </article>
  );
}

function DocPageFooter({ page }: { page: number }) {
  return (
    <footer className="doc-page-footer">
      <div className="doc-initials-grid" aria-label="Kolom paraf">
        <div className="doc-initials-cell">
          <span>PARAF PIHAK I · NEMPO</span>
          <span className="doc-initials-line" aria-hidden="true" />
        </div>
        <div className="doc-initials-cell">
          <span>PARAF PIHAK II · GGS BEAUTY</span>
          <span className="doc-initials-line" aria-hidden="true" />
        </div>
      </div>
      <div className="doc-page-number">HALAMAN {page} DARI {totalPages}</div>
    </footer>
  );
}

export type MouPageKey = 'mou' | 'surat-art-center';

function AppHeader({ active }: { active: MouPageKey }) {
  return (
    <header className="topbar no-print">
      <div className="brand">
        <img className="brand-logo" src={mark.url} alt="Logo Nempo" />
        <div className="brand-name">Nempo</div>
      </div>
      <nav className="top-navigation" aria-label="Dokumen">
        <Link
          to="/nempo-mou"
          className={`app-nav-link${active === 'mou' ? ' is-active' : ''}`}
          aria-current={active === 'mou' ? 'page' : undefined}
        >
          MoU GGS
        </Link>
        <Link
          to="/nempo-mou/surat-art-center"
          className={`app-nav-link${active === 'surat-art-center' ? ' is-active' : ''}`}
          aria-current={active === 'surat-art-center' ? 'page' : undefined}
        >
          Surat Art Center
        </Link>
      </nav>
      <div className="top-actions">
        <Button
          variant="unstyled"
          size="unstyled"
          className="button primary"
          onClick={() => window.print()}
          title="Cetak atau simpan sebagai PDF"
          aria-label={active === 'mou' ? 'Cetak atau simpan MoU sebagai PDF' : 'Cetak atau simpan surat sebagai PDF'}
        >
          <Printer size={14} />
          <span>Simpan PDF</span>
        </Button>
      </div>
    </header>
  );
}

function DocumentPage({ active }: { active: MouPageKey }) {
  const Doc = active === 'surat-art-center' ? SuratArtCenterDocument : MouDocument;
  return (
    <div className="app-shell">
      <AppHeader active={active} />

      <main className="workspace preview-only no-print">
        <div className="preview-column">
          <div className="paper-wrap"><Doc /></div>
        </div>
      </main>

      <div className="print-root" style={{ display: 'none' }} aria-hidden="true">
        <Doc />
      </div>
    </div>
  );
}

export default function App({ page = 'mou' }: { page?: MouPageKey }) {
  return <div className="mou-scope"><DocumentPage active={page} /></div>;
}
