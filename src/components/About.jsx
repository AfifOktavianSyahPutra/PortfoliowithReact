import React from 'react';

const About = ({ data }) => {
  return (
    <section id="tentang" className="wadah-seksi latar-alternatif">
      <h2>Tentang Saya</h2>
      <div className="kisi-tentang">
        <div className="gambar-tentang">
          <img src={data.info.profileImage} alt={`Potret profesional ${data.info.name}`} loading="lazy" />
        </div>
        <div className="teks-tentang">
          <p>{data.summary}</p>
          <ul className="daftar-info">
            <li>
              <strong>Lokasi</strong>
              <span>{data.info.location}</span>
            </li>
            <li>
              <strong>Surel Elektronis</strong>
              <span><a href={`mailto:${data.info.email}`}>{data.info.email}</a></span>
            </li>
            <li>
              <strong>Nomor Telepon</strong>
              <span>{data.info.phone}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
