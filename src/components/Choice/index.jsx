import { useState, useEffect } from 'react';

import dots from '../../assets/dots.svg';

import ProgressBar from '../ProgressBar';

import './choice.css';

export default function Choice() {
  const [isBar, setIsBar] = useState('');
  const [isBarOpen, setIsBarOpen] = useState(false);
  
  const [isStep, setIsStep] = useState('');

  const [isHovered, setIsHovered] = useState(false);

  function choiceBar() {
    setIsBar(true);
    setIsStep(false);
    setIsHovered(!isHovered);
  }

  function choiceStep() {
    setIsStep(true);
    setIsBar(false);
    setIsHovered(!isHovered);
  }

  // close modal when open
  function toggleBar() {
    setIsBarOpen(!isBarOpen);
  }

  // close modal by pressing escape key when keyboard navigation
  function escToClose(e) {
    if (e.key === 'Escape') {
      toggleBar();
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
      <main className="choice">
        <h1 className="choice_title">Progression illustrations</h1>
        <section className="choice_buttons">
          <button
            className="choice_bar"
            onMouseEnter={choiceBar}
            onMouseLeave={choiceBar}
            onClick={toggleBar}
          >
            {isBar && isHovered ? (
              <progress max="100" value="60"></progress>
            ) : (
              <h2>bars</h2>
            )}
          </button>
          <button
            className="choice_step"
            onMouseEnter={choiceStep}
            onMouseLeave={choiceStep}
          >
            {isStep && isHovered ? (
              <>
                <img src={dots} alt="filled circle icon" />
              </>
            ) : (
              <h2>steps</h2>
            )}
          </button>
        </section>
      </main>
      <ProgressBar bar={isBarOpen} close={toggleBar} done="70" />
    </>
  );
}
