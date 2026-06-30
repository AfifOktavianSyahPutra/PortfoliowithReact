import React from 'react';

const Skills = ({ data }) => {
  return (
    <section id="keahlian" className="wadah-seksi">
      <h2>Keahlian Teknis & Profesional</h2>
      <div className="kisi-keahlian">
        {data.map((skillGroup, index) => (
          <div key={index} className="kategori-keahlian">
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{skillGroup.category}</h3>
            <div className="tag-keahlian">
              {skillGroup.items.map((item, idx) => (
                <span key={idx} className="tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
