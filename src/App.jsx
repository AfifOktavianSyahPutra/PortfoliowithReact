import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Organizations from './components/Organizations';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

const sectionDefinitions = [
  { key: 'hero', component: Hero, props: { data: portfolioData.personalInfo } },
  { key: 'about', component: About, props: { data: { summary: portfolioData.summary, info: portfolioData.personalInfo } } },
  { key: 'experience', component: Experience, props: { data: portfolioData.experience } },
  { key: 'projects', component: Projects, props: { data: portfolioData.projects } },
  { key: 'skills', component: Skills, props: { data: portfolioData.skills } },
  { key: 'education', component: Education, props: { data: portfolioData.education } },
  { key: 'certifications', component: Certifications, props: { data: portfolioData.certifications } },
  { key: 'organizations', component: Organizations, props: { data: portfolioData.organizations } },
];

const App = () => (
  <>
    <Navbar />
    <main id="main-content">
      {sectionDefinitions.map(({ key, component: Component, props }) => (
        <Component key={key} {...props} />
      ))}
    </main>
    <Footer data={portfolioData.personalInfo} />
  </>
);

export default App;