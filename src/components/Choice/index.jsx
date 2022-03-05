import './choice.css';

export default function Choice() {
  return (
    <main className="choice">
      <h1 className="choice_title">Progression illustrations</h1>
      <section className="choice_buttons">
        <button className="choice_bars">
          <h2>bars</h2>
        </button>
        <button className="choice_steps">
          <h2>steps</h2>
        </button>
      </section>
    </main>
  );
}
