import Section from './Section';

const Education = ({ data }) => {
  return (
    <Section id="education" title="Education History" variant="alternate">
      <div className="timeline" role="list">
        {data.map((edu, index) => (
          <article key={index} className="timeline-item" role="listitem">
            <div className="timeline-header">
              {edu.logo && <img src={edu.logo} alt={`Logo ${edu.institution}`} className="timeline-logo" loading="lazy" />}
              <div className="timeline-info">
                <time className="timeline-date">{edu.period}</time>
                <h3 className="timeline-title">{edu.degree}</h3>
                <h4 className="timeline-subtitle">{edu.institution}</h4>
              </div>
            </div>
            {edu.details && (
              <div className="timeline-description">
                <p>{edu.details}</p>
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Education;