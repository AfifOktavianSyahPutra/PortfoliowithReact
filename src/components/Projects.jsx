import React from 'react';

const Projects = ({ data }) => {
  return (
    <section id="proyek" className="wadah-seksi latar-alternatif">
      <h2>Proyek Unggulan</h2>
      <div className="kisi-proyek">
        {data.map((project, index) => (
          <article key={index} className="kartu-proyek">
            {project.iframeSrc ? (
              <div className="wadah-iframe">
                <iframe 
                  title={project.title}
                  src={project.iframeSrc} 
                  allowFullScreen
                  className="iframe-proyek"
                  loading="lazy"
                ></iframe>
              </div>
            ) : (
              <img 
                src={project.image} 
                alt={`Tangkapan layar dari proyek ${project.title}`} 
                className="gambar-proyek" 
                loading="lazy" 
              />
            )}
            <div className="konten-proyek">
              <span className="kategori-proyek">{project.category}</span>
              <h3>{project.title}</h3>
              <p className="deskripsi-proyek-teks">
                {project.description}
              </p>
              <div className="tautan-proyek">
                {project.links && project.links.map((link, idx) => (
                  <a key={idx} href={link.url} className="tombol tombol-kecil">
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