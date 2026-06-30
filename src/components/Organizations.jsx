import React from 'react';

const Organizations = ({ data }) => {
  return (
    <div>
      <h2>Pengalaman Organisasi Kampus</h2>
      <div className="kisi-daftar">
        {data.map((org, index) => (
          <div key={index} className="item-daftar" style={{ borderLeftColor: 'var(--warna-teks-redup)' }}>
            <h4 style={{ color: 'var(--warna-teks-utama)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{org.role}</h4>
            <p style={{ color: 'var(--warna-teks-redup)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{org.organization}</p>
            <span style={{ color: 'var(--warna-teks-redup)', fontSize: '0.85rem' }}>{org.period}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Organizations;
