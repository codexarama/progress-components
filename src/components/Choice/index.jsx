import { useState } from 'react';

import './choice.css';

export default function Choice() {
  const [isHovered, setIsHovered] = useState(false);

  function toggle() {
    setIsHovered(!isHovered);
  }

  return (
    <main className="choice">
      <h1 className="choice_title">Progression illustrations</h1>
      <section className="choice_buttons">
        <button
          className="choice_bars"
          onMouseEnter={toggle}
          onMouseLeave={toggle}
        >
          {isHovered ? (
            <progress max="100" value="60">
            </progress>
          ) : (
            <h2>bars</h2>
          )}
        </button>
        <button className="choice_steps">
          <h2>steps</h2>
        </button>
      </section>
    </main>
  );
}
