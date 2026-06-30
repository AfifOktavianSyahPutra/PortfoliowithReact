import React from 'react';

const Footer = ({ data }) => {
  return (
    <footer id="kontak" className="kaki-halaman">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Mari Berkolaborasi</h2>
      <p style={{ color: 'var(--warna-teks-redup)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
        Saya terbuka untuk diskusi profesional dan peluang baru di bidang teknologi informasi.
      </p>
      <div className="tautan-sosial">
        <a href={`mailto:${data.email}`} className="tombol primer">Kirim Surel Elektronis</a>
        <a href={data.linkedin} target="_blank" rel="noreferrer" className="tombol">Kunjungi LinkedIn</a>
      </div>
      <p style={{ color: 'var(--warna-teks-redup)', fontSize: '0.9rem', marginTop: '4rem' }}>
        &copy; {new Date().getFullYear()} {data.name}. Seluruh hak cipta dilindungi.
      </p>
    </footer>
  );
};

export default Footer;
