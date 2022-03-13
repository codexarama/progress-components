import { useState, useEffect } from 'react';

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

  // close modal by pressing escape key when keyboard navigation
  function escToClose(e) {
    if (e.key === 'Escape') {
      handleClick();
    }
  }

  // detects when escape key pressed to close the modal
  // and stops event propagation when occured
  useEffect(() => {
    window.addEventListener('keydown', escToClose);
    return () => window.removeEventListener('keydown', escToClose);
  });
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
        <ProgressBar progressBar={isOpen} close={handleClick}/>
      ) : (
        <ProgressStep progressStep={isOpen} close={handleClick} />
      )}
    </>
  );
}
