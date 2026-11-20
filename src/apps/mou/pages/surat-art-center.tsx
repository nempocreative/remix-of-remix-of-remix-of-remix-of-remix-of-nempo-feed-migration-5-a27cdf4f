import mark from '@/assets/mou/nempo-mark.png.asset.json';
import { rentangAcara, suratArtCenter as s, tanggalLengkap } from '@/apps/mou/data/surat-art-center';

export function SuratArtCenterDocument() {
  const kategori = s.acara.kategori;
  const daftarKategori = `${kategori.slice(0, -1).join(', ')}, dan ${kategori[kategori.length - 1]}`;
  return (
    <article className="document preview-document" aria-label="Surat permohonan peminjaman Gedung Art Center">
      <section className="doc-page letter-page">
        <header className="letter-kop">
          <img className="letter-kop-logo" src={mark.url} alt="Logo Nempo" />
          <div className="letter-kop-copy">
            <strong>NEMPO</strong>
            <span>{s.pengirim.nama} · Event Organizer, Wedding Organizer &amp; Creative</span>
            <span>
              {s.pengirim.alamat} · WhatsApp {s.pengirim.whatsapp} · Instagram {s.pengirim.instagram}
            </span>
          </div>
        </header>

        <div className="letter-meta">
          <dl className="letter-meta-list">
            <div><dt>Nomor</dt><span aria-hidden="true">:</span><dd>{s.nomor}</dd></div>
            <div><dt>Lampiran</dt><span aria-hidden="true">:</span><dd>{s.lampiran}</dd></div>
            <div><dt>Perihal</dt><span aria-hidden="true">:</span><dd><strong>{s.perihal}</strong></dd></div>
          </dl>
          <p className="letter-date">{s.tempatSurat}, {tanggalLengkap(s.tanggalSurat, false)}</p>
        </div>

        <div className="letter-to">
          <p>Kepada Yth.</p>
          <p><strong>{s.tujuan.jabatan}</strong></p>
          <p>{s.tujuan.alamat}</p>
          <p>di</p>
          <p className="letter-to-place">Tempat</p>
        </div>

        <div className="letter-body">
          <p>Dengan hormat,</p>
          <p>
            Dalam rangka melestarikan seni tari Jaipong sebagai warisan budaya Sunda serta menjaring
            penari muda berbakat menuju Pasar Seni 2027, kami dari {s.pengirim.nama} akan
            menyelenggarakan kegiatan <strong>{s.acara.nama}</strong> bertajuk
            “{s.acara.tema}”.
          </p>
          <p>
            Sehubungan dengan hal tersebut, kami bermaksud mengajukan permohonan peminjaman Gedung Art
            Center untuk pelaksanaan kegiatan tersebut, dengan rincian sebagai berikut:
          </p>
          <dl className="letter-details">
            <div><dt>Nama kegiatan</dt><span aria-hidden="true">:</span><dd>{s.acara.nama} ({s.acara.tema})</dd></div>
            <div><dt>Hari, tanggal</dt><span aria-hidden="true">:</span><dd>{rentangAcara()}</dd></div>
            <div><dt>Waktu</dt><span aria-hidden="true">:</span><dd>{s.acara.waktu}</dd></div>
            <div><dt>Tempat</dt><span aria-hidden="true">:</span><dd>{s.acara.tempat}</dd></div>
            <div>
              <dt>Peserta</dt><span aria-hidden="true">:</span>
              <dd>Penari Jaipong kategori {daftarKategori} (kuota {s.acara.kuotaPerKategori} peserta per kategori)</dd>
            </div>
            <div>
              <dt>Fasilitas yang dimohon</dt><span aria-hidden="true">:</span>
              <dd>
                <ol className="letter-facilities">
                  {s.fasilitas.map((f) => <li key={f}>{f}</li>)}
                </ol>
              </dd>
            </div>
          </dl>
          <p>
            Selama penggunaan gedung, kami bersedia menjaga kebersihan, ketertiban, dan keamanan gedung,
            bertanggung jawab atas kerusakan yang timbul akibat kegiatan kami, serta mematuhi ketentuan
            dan retribusi yang berlaku.
          </p>
          <p>
            Demikian surat permohonan ini kami sampaikan. Besar harapan kami Bapak/Ibu berkenan
            mengabulkan permohonan ini. Atas perhatian dan kerja sama Bapak/Ibu, kami ucapkan terima kasih.
          </p>
        </div>

        <div className="letter-sign">
          <p>Hormat kami,</p>
          <p>{s.pengirim.nama}</p>
          <div className="letter-sign-space" aria-hidden="true" />
          <p className="letter-sign-name">{s.pengirim.penandatangan}</p>
          <p>{s.pengirim.jabatan}</p>
        </div>

        <p className="letter-contact">
          Narahubung: {s.pengirim.penandatangan} · WhatsApp {s.pengirim.whatsapp}
        </p>
      </section>
    </article>
  );
}
