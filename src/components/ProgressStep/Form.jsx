import { useContext } from 'react';
import { multiStepContext } from '../../StepContext';

import PropTypes from 'prop-types';

/**
 * Form
 *
 * @param   {object}      props
 * @param   {string}      props.id               [label "html for" identifiant]
 * @param   {string}      props.inputLabel       [label name]
 * @param   {string}      props.type             [type of content]
 *
 * @returns {Reactnode}   jsx injected in DOM
 */
export default function Form({ id, inputLabel, type, step }) {
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  function handleChange(event) {
    setUserData(event.currentTarget.value);
  }

  function previousStep() {
    setStep(step - 1);
  }

  function nextStep() {
    setStep(step + 1);
  }

  return (
    <form className="progress_step--form">
      <label htmlFor={id} name={inputLabel}></label>
      <input
        type={type}
        id={id}
        placeholder={inputLabel}
        value={userData}
        onChange={handleChange}
        autoComplete="off"
        aria-required="true"
        required
      />
      <div className="progress_step--buttons">
        {step === 1 && (
          <button onClick={nextStep}>
              {'>'}
          </button>
        )}

        {step === 2 && (
          <>
            <button onClick={previousStep}>
              {'<'}
            </button>
            <button onClick={nextStep}>
              {'>'}
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <button onClick={previousStep}>
              {'<'}
            </button>
            <button type="submit">ok</button>
          </>
        )}
      </div>
    </form>
  );
}

/**
 * Form PROPTYPES
 */
Form.propTypes = {
  id: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
