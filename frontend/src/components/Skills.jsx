import Section from './Section';

const Skills = ({ data }) => {
  return (
    <Section id="skills" title="Technical & Professional Skills">
      <div className="skills-grid">
        {data.map((skillGroup, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{skillGroup.category}</h3>
            <div className="skill-tags">
              {skillGroup.items.map((item, idx) => (
                <span key={idx} className="skill-tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;