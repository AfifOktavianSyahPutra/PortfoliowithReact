import React from 'react';

const Projects = ({ data }) => {
  return (
    <section id="proyek" className="wadah-seksi latar-alternatif">
      <h2>Proyek Unggulan</h2>
      <div className="kisi-proyek">
        {data.map((project, index) => (
          <article key={index} className="kartu-proyek">
            <img src={project.image} alt={`Tangkapan layar dari proyek ${project.title}`} className="gambar-proyek" loading="lazy" />
            <div className="konten-proyek">
              <span className="kategori-proyek">{project.category}</span>
              <h3>{project.title}</h3>
              <p style={{ color: 'var(--warna-teks-redup)', fontSize: '0.95rem', marginBottom: '1rem', textAlign: 'justify' }}>
                {project.description}
              </p>
              <div className="tautan-proyek">
                {project.links.map((link, idx) => (
                  <a key={idx} href={link.url} className="tombol" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
