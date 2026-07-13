const Section = ({ id, title, variant = 'default', children }) => (
  <section id={id} className={`section-wrapper${variant === 'alternate' ? ' alternate-background' : ''}`}>
    <h2>{title}</h2>
    {children}
  </section>
);

export default Section;
