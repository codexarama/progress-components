import { createPortal } from 'react-dom';

export default function ProgressStep({ progressStep, close }) {
  return createPortal(
    <>
      {progressStep ? (
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
          <h1>Custom Progress Steps</h1>
          <section className="progress_step"></section>
        </main>
      ) : null}
    </>,
    document.body
  );
}
