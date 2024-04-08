import "./App.css";
import "./index.css";
import Translator from "./components/Translator.tsx";

function App() {
  return (
    <div className="App">
      <h1>Voice App</h1>
      <div>
        <h2>Translator</h2>
        <Translator />
      </div>
    </div>
  );
}

export default App;
