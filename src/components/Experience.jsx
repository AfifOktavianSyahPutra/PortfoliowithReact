import React from 'react';

const Experience = ({ data }) => {
  return (
    <section id="pengalaman" className="wadah-seksi">
      <h2>Pengalaman Profesional</h2>
      <div className="garis-waktu" role="list">
        {data.map((exp, index) => (
          <article key={index} className="item-waktu" role="listitem">
            <time className="tanggal-waktu">{exp.period}</time>
            <h3 className="judul-waktu">{exp.role}</h3>
            <h4 className="subjudul-waktu">{exp.company}</h4>
            <p className="deskripsi-waktu">{exp.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
