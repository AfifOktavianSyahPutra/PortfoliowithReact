import React from 'react';
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

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero data={portfolioData.personalInfo} />
        <About data={{ summary: portfolioData.summary, info: portfolioData.personalInfo }} />
        <Experience data={portfolioData.experience} />
        <Projects data={portfolioData.projects} />
        <Skills data={portfolioData.skills} />
        <Education data={portfolioData.education} />
        <Certifications data={portfolioData.certifications} />
        <Organizations data={portfolioData.organizations} />
      </main>
      <Footer data={portfolioData.personalInfo} />
    </>
  );
}

export default App;