import { useState } from 'react';
import circleFilled from '../../assets/CodiconCircleFilled.svg';
import circleOutline from '../../assets/CodiconCircleOutline.svg';
import './choice.css';

export default function Choice() {
  const [isBar, setIsBar] = useState('');
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

  return (
    <main className="choice">
      <h1 className="choice_title">Progression illustrations</h1>
      <section className="choice_buttons">
        <button
          className="choice_bar"
          onMouseEnter={choiceBar}
          onMouseLeave={choiceBar}
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
              <img src={circleFilled} alt="filled circle icon" />
              <img src={circleFilled} alt="filled circle icon" />
              <img src={circleFilled} alt="filled circle icon" />
              <img src={circleOutline} alt="outline circle icon" />
            </>
          ) : (
            <h2>steps</h2>
          )}
        </button>
      </section>
    </main>
  );
}
