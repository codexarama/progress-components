import { createPortal } from 'react-dom';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

import './progressStep.css';

export default function ProgressStep({ progressStep, close }) {
  return createPortal(
    <>
      {progressStep ? (
        <main autoFocus className="modal" role="main">
          <button className="modal_close" aria-label="Close" onClick={close}>
            X
          </button>
          <h1>Custom Progress Steps</h1>
          <section className="progress_step">
            <Step1 />
            <Step2 />
            <Step3 />
          </section>
        </main>
      ) : null}
    </>,
    document.body
  );
}
