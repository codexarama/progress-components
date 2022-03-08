import Choice from '../Choice';
import './app.css';

export default function App() {
  const isBarsButton = true

  return (
    <main className="choice">
      <h1 className="choice_title">Progression illustrations</h1>
      <section className="choice_buttons">
        <Choice label={isBarsButton} />
        <Choice label={!isBarsButton} />
      </section>
    </main>
  );
}
