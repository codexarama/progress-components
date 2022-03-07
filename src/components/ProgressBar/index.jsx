import { useState } from 'react';
import './progressBar.css';

export default function ProgressBar({ bar, close, done }) {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const doneStyle = {
      opacity: 1,
      width: `${done}%`,
    };
    setStyle(doneStyle);
  }, 1500);

  return (
    <>
      {bar ? (
        <main
          autoFocus
          className="modal"
          role="main"
          // close modal when click outside of it
          onClick={() => {
            close();
          }}
        >
          <button className="modal_close" aria-label="Close" onClick={close}>
            X
          </button>
          <h1>Custom Progress Bars</h1>
          <section className="progress_bar">
            <div className="progress_bar--bg">
              <div className="progress_bar--progress" style={style}>
                {done}%
              </div>
            </div>
          </section>
        </main>
      ) : null}
    </>
  );
}
