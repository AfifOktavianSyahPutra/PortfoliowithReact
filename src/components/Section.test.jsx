import { act } from 'react';
import { createRoot } from 'react-dom/client';
import Section from './Section';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

describe('Section component', () => {
  it('renders a titled section with children content', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    act(() => {
      createRoot(container).render(
        <Section id="demo" title="Demo Section">
          <p>Reusable content</p>
        </Section>
      );
    });

    expect(container.querySelector('section')).not.toBeNull();
    expect(container.textContent).toContain('Demo Section');
    expect(container.textContent).toContain('Reusable content');

    container.remove();
  });
});
