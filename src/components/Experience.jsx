import React from 'react';

const Experience = ({ data }) => {
  return (
    <section id="pengalaman" className="wadah-seksi">
      <h2>Pengalaman Profesional</h2>
      <div className="garis-waktu" role="list">
        {data.map((exp, index) => (
          <article key={index} className="item-waktu" role="listitem">
            <div className="kepala-waktu">
              {exp.logo && <img src={exp.logo} alt={`Logo ${exp.company}`} className="logo-waktu" loading="lazy" />}
              <div className="info-waktu">
                <time className="tanggal-waktu">{exp.period}</time>
                <h3 className="judul-waktu">{exp.role}</h3>
                <h4 className="subjudul-waktu">{exp.company}</h4>
              </div>
            </div>
            <div className="deskripsi-waktu">
              <ul>
                {exp.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;