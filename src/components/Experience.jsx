import Section from './Section';

const Experience = ({ data }) => {
  return (
    <Section id="experience" title="Professional Experience">
      <div className="timeline" role="list">
        {data.map((exp, index) => (
          <article key={index} className="timeline-item" role="listitem">
            <div className="timeline-header">
              {exp.logo && <img src={exp.logo} alt={`Logo ${exp.company}`} className="timeline-logo" loading="lazy" />}
              <div className="timeline-info">
                <time className="timeline-date">{exp.period}</time>
                <h3 className="timeline-title">{exp.role}</h3>
                <h4 className="timeline-subtitle">{exp.company}</h4>
              </div>
            </div>
            <div className="timeline-description">
              <ul>
                {exp.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Experience;