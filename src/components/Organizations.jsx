import Section from './Section';

const Organizations = ({ data }) => {
  return (
    <Section id="organizations" title="Campus Organization Experience" variant="alternate">
      <div className="list-grid">
        {data.map((org, index) => (
          <article key={index} className="list-item">
            <div className="list-header">
              {org.logo && <img src={org.logo} alt={`Logo ${org.organization}`} className="list-logo" loading="lazy" />}
              <div className="list-info">
                <h4 className="organization-title">{org.role}</h4>
                <p className="organization-name">{org.organization}</p>
                <span className="organization-period">{org.period}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Organizations;