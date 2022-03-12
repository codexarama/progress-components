import { useState } from 'react';
import { createPortal } from 'react-dom';
import PercentOptions from '../PercentOptions';
import './progressBar.css';

export default function ProgressBar({ progressBar, close, done }) {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const doneStyle = {
      opacity: 1,
      width: `${done}%`,
    };
    setStyle(doneStyle);
  }, 1500);

  return createPortal(
    <>
      {progressBar ? (
        <main
          autoFocus
          className="modal"
          role="main"
          // close modal when click outside of it
          // onClick={() => {
          //   close();
          // }}
        >
          <button className="modal_close" aria-label="Close" onClick={close}>
            X
          </button>
          <h1>Custom Progress Bars</h1>
          <section className="progress_bar">
            <PercentOptions />
            <div className="progress_bar--bg">
              <div
                className="progress_bar--progress"
                style={style}
                role="progressbar"
                aria-valuenow={done}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {done}%
              </div>
            </div>
          </section>
        </main>
      ) : null}
    </>,
    document.body
  );
}
