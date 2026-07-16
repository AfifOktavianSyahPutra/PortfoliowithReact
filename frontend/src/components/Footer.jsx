const Footer = ({ data }) => {
  return (
    <footer id="contact" className="footer">
      <h2 className="footer-title">Let's Collaborate</h2>
      <p className="footer-text">
        I am open to professional discussions and new opportunities in information technology.
      </p>
      <div className="social-links">
        <a href={`mailto:${data.email}`} className="button primary">Send Email</a>
        <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="button">Visit LinkedIn</a>
      </div>
      <p className="copyright">
        &copy; {new Date().getFullYear()} {data.name}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;