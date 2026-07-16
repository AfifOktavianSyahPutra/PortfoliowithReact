import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import Certifications from './Certifications';
import Organizations from './Organizations';

const PortfolioSections = ({ data }) => {
  const sections = [
    { key: 'hero', component: Hero, props: { data: data.personalInfo } },
    { key: 'about', component: About, props: { data: { summary: data.summary, info: data.personalInfo } } },
    { key: 'experience', component: Experience, props: { data: data.experience } },
    { key: 'projects', component: Projects, props: { data: data.projects } },
    { key: 'skills', component: Skills, props: { data: data.skills } },
    { key: 'education', component: Education, props: { data: data.education } },
    { key: 'certifications', component: Certifications, props: { data: data.certifications } },
    { key: 'organizations', component: Organizations, props: { data: data.organizations } },
  ];

  return (
    <main id="main-content">
      {sections.map(({ key, component: Component, props }) => (
        <Component key={key} {...props} />
      ))}
    </main>
  );
};

export default PortfolioSections;
