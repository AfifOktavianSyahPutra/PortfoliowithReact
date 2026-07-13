import Section from './Section';

const Projects = ({ data }) => {
  const getExternalLinkProps = (url) => {
    if (!url.startsWith('http')) return {};
    return { target: '_blank', rel: 'noopener noreferrer' };
  };

  return (
    <Section id="projects" title="Featured Projects" variant="alternate">
      <div className="project-grid">
        {data.map((project, index) => (
          <article key={index} className="project-card">
            {project.iframeSrc ? (
              <div className="iframe-wrapper">
                <iframe
                  title={project.title}
                  src={project.iframeSrc}
                  allowFullScreen
                  className="project-iframe"
                  loading="lazy"
                ></iframe>
              </div>
            ) : (
              <img
                src={project.image}
                alt={`Screenshot of the project ${project.title}`}
                className="project-image"
                loading="lazy"
              />
            )}
            <div className="project-content">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p className="project-description">
                {project.description}
              </p>
              <div className="project-links">
                {project.links && project.links.map((link, idx) => (
                  <a key={idx} href={link.url} className="button button-small" {...getExternalLinkProps(link.url)}>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Projects;