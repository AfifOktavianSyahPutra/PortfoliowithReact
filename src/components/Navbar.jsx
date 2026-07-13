const Navbar = () => {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header>
        <nav className="navigation" aria-label="Main Navigation">
          <a href="#home" className="logo-navigation" aria-label="Go to home">
            Putra<span>.</span>
          </a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#organizations">Organizations</a></li>
          </ul>
          <a href="#contact" className="button">Contact Me</a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;