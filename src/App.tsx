import "./App.css";
import ColorChanger from "./components/ColorChanger";
import ThemeToggler from "./components/ThemeToggler";

function App() {
  return (
    <>
    <header>
      <h1>Vitest</h1>
      <ThemeToggler />
    </header>
    <section>
      <ColorChanger />
    </section>
    </>
  );
}

export default App;
