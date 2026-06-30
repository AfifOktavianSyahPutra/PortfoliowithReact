import React from 'react';

const Footer = ({ data }) => {
  return (
    <footer id="kontak" className="kaki-halaman">
      <h2 className="judul-kaki-halaman">Mari Berkolaborasi</h2>
      <p className="teks-kaki-halaman">
        Saya terbuka untuk diskusi profesional dan peluang baru di bidang teknologi informasi.
      </p>
      <div className="tautan-sosial">
        <a href={`mailto:${data.email}`} className="tombol primer">Kirim Surel Elektronis</a>
        <a href={data.linkedin} target="_blank" rel="noreferrer" className="tombol">Kunjungi LinkedIn</a>
      </div>
      <p className="hak-cipta">
        &copy; {new Date().getFullYear()} {data.name}. Seluruh hak cipta dilindungi.
      </p>
    </footer>
  );
};

export default Footer;