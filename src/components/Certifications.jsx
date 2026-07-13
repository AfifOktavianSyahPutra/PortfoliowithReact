import Section from './Section';

const Certifications = ({ data }) => {
  return (
    <Section id="certifications" title="Professional Certifications & Licenses">
      <div className="certification-grid">
        {data.map((cert, index) => (
          <article key={index} className="certification-card">
            <img
              src={cert.image}
              alt={`Certificate ${cert.title}`}
              className="certification-image"
              loading="lazy"
            />
            <div className="certification-content">
              <h4 className="certification-title">{cert.title}</h4>
              <p className="certification-issuer">{cert.issuer}</p>
              <span className="certification-date">{cert.date}</span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;