import React from 'react';

const Organizations = ({ data }) => {
  return (
    <section id="organisasi" className="wadah-seksi latar-alternatif">
      <h2>Pengalaman Organisasi Kampus</h2>
      <div className="kisi-daftar">
        {data.map((org, index) => (
          <article key={index} className="item-daftar">
            <div className="kepala-daftar">
              {org.logo && <img src={org.logo} alt={`Logo ${org.organization}`} className="logo-daftar" loading="lazy" />}
              <div className="info-daftar">
                <h4 className="judul-organisasi">{org.role}</h4>
                <p className="nama-organisasi">{org.organization}</p>
                <span className="periode-organisasi">{org.period}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Organizations;