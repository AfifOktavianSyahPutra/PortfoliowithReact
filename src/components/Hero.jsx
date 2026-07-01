import React from 'react';

const Hero = ({ data }) => {
  return (
    <section id="beranda" className="beranda" aria-label="Perkenalan Singkat">
      <div className="konten-beranda">
        <h1 className="judul-beranda">{data.name}</h1>
        <h2 className="subjudul-beranda">{data.titles.join(" | ")}</h2>
        <p className="slogan-beranda">"{data.tagline}"</p>
        <div className="aksi-beranda">
          <a href="#proyek" className="tombol primer">Lihat Portofolio</a>
          <a href={data.linkedin} target="_blank" rel="noreferrer" className="tombol" aria-label="Kunjungi profil LinkedIn">Profil LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;