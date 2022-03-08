import { useState } from 'react';
import dots from '../../assets/dots.svg';
import ProgressBar from '../ProgressBar';
import ProgressStep from '../ProgressStep';
import './choice.css';

export default function Choice({ label }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={label ? 'choice_bar' : 'choice_step'}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
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

      {label ? (
        <ProgressBar progressBar={isOpen} close={handleClick} done="70" />
      ) : (
        <ProgressStep progressStep={isOpen} close={handleClick} />
      )}
    </>
  );
}
