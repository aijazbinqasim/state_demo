import Counter from "./Counter";
import Hello from "./Hello";

import "../Styles/App.css";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}

      <Hello>
        <ul>
          <li>I am prop send via children 1</li>

          <li>I am prop send via children 2</li>

          <li>I am prop send via children 3</li>
        </ul>
      </Hello>
    </div>
  );
}

export default App;
