import React from 'react';

const Certifications = ({ data }) => {
  return (
    <section id="sertifikasi" className="wadah-seksi">
      <h2>Sertifikasi & Lisensi Profesional</h2>
      <div className="kisi-sertifikasi">
        {data.map((cert, index) => (
          <article key={index} className="kartu-sertifikasi">
            <img 
              src={cert.image} 
              alt={`Sertifikat ${cert.title}`} 
              className="gambar-sertifikasi" 
              loading="lazy" 
            />
            <div className="konten-sertifikasi">
              <h4 className="judul-sertifikasi">{cert.title}</h4>
              <p className="penerbit-sertifikasi">{cert.issuer}</p>
              <span className="tanggal-sertifikasi">{cert.date}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certifications;