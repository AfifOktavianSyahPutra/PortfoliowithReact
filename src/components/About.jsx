import Section from './Section';

const About = ({ data }) => {
  return (
    <Section id="about" title="About Me" variant="alternate">
      <div className="about-grid">
        <div className="about-image">
          <img src={data.info.profileImage} alt={`Professional portrait of ${data.info.name}`} loading="lazy" />
        </div>
        <div className="about-text">
          <p>{data.summary}</p>
          <ul className="info-list">
            <li>
              <strong>Location</strong>
              <span>{data.info.location}</span>
            </li>
            <li>
              <strong>Email</strong>
              <span><a href={`mailto:${data.info.email}`}>{data.info.email}</a></span>
            </li>
            <li>
              <strong>Phone</strong>
              <span>{data.info.phone}</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default About;