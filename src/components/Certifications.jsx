import React from 'react';

const Certifications = ({ data }) => {
  return (
    <div>
      <h2>Sertifikasi & Lisensi Profesional</h2>
      <div className="kisi-daftar">
        {data.map((cert, index) => (
          <div key={index} className="item-daftar">
            <h4 style={{ color: 'var(--warna-teks-utama)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{cert.title}</h4>
            <p style={{ color: 'var(--warna-teks-redup)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{cert.issuer}</p>
            <span style={{ color: 'var(--warna-aksen)', fontSize: '0.85rem', fontWeight: '600' }}>{cert.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
