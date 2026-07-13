const Hero = ({ data }) => {
  return (
    <section id="home" className="hero" aria-label="Brief Introduction">
      <div className="hero-content">
        <h1 className="hero-title">{data.name}</h1>
        <h2 className="hero-subtitle">{data.titles.join(" | ")}</h2>
        <p className="hero-tagline">"{data.tagline}"</p>
        <div className="hero-actions">
          <a href="#projects" className="button primary">View Portfolio</a>
          <a href={data.linkedin} target="_blank" rel="noreferrer" className="button" aria-label="Visit LinkedIn profile">LinkedIn Profile</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;