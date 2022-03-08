import { useState } from 'react';
import dots from '../../assets/dots.svg';
import './choice.css';

export default function Choice({ label }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={label ? 'choice_bar' : 'choice_step'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        label && isHovered ? (
          <progress max="100" value="60"></progress>
        ) : (
          <img src={dots} alt="filled circle icon" />
        )
      ) : (
        <h2>{label ? 'bar' : 'steps'}</h2>
      )}
    </button>
  );
}
