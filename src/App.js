import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
      {/* ne marche pas dans style */}
      <button
        onClick={() => setButtonColor(newButtonColor)}
        style={{ background: buttonColor }}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      {/* aria-ckeck est pour l'accessibilité */}
      <input
        type="checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
