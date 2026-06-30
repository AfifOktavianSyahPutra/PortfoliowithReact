import React from 'react';

const Education = ({ data }) => {
  return (
    <section id="pendidikan" className="wadah-seksi latar-alternatif">
      <h2>Riwayat Pendidikan</h2>
      <div className="garis-waktu" role="list">
        {data.map((edu, index) => (
          <article key={index} className="item-waktu" role="listitem">
            <div className="kepala-waktu">
              {edu.logo && <img src={edu.logo} alt={`Logo ${edu.institution}`} className="logo-waktu" loading="lazy" />}
              <div className="info-waktu">
                <time className="tanggal-waktu">{edu.period}</time>
                <h3 className="judul-waktu">{edu.degree}</h3>
                <h4 className="subjudul-waktu">{edu.institution}</h4>
              </div>
            </div>
            {edu.details && (
              <div className="deskripsi-waktu">
                <p>{edu.details}</p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;