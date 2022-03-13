import { useState } from 'react';
import { createPortal } from 'react-dom';
import './progressBar.css';

const options = [];

for (let n = 10; n <= 100; n += 10) {
  options.push({ value: n, label: n });
}

// console.log(options);

/**
 *
 * @param   {object}    props
 * @param   {boolean}   props.progressBar   [modal (mount) || null (unmount)]
 * @param   {function}  props.close         [handle click on button action]
 * @returns {Reactnode} jsx in DOM
 */
export default function ProgressBar({ progressBar, close }) {
  const [value, setValue] = useState('70');

  const handleChange = (e) => {
    setValue(e.currentTarget.value);
  };

  return createPortal(
    <>
      {progressBar ? (
        <main
          autoFocus
          className="modal"
          role="main"
        >
          <button className="modal_close" aria-label="Close" onClick={close}>
            X
          </button>

          <h1>Custom Progress Bar</h1>

          <section className="progress_bar">

            <div className="progress_bar--options">
              <select value={value} onChange={handleChange}>
                {options.map((option) => (
                  <option value={option.value} key={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="progress_bar--full">
              <div
                className="progress_bar--value"
                style={{
                  opacity: 1,
                  width: `${value}%`,
                }}
                role="progressbar"
                aria-valuenow={value}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {value}%
              </div>
            </div>

          </section>
        </main>
      ) : null}
    </>,
    document.body
  );
}
