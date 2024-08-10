import { useState } from "react";
import "../Styles/Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [userName, setUserName] = useState("");

  const handIncrement = () => {
    setCounter(counter + 1);
    setUserName("Aijaz");
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
    setUserName("Aziz");
  };

  // function handIncrement() {
  //   setCounter(counter + 1);
  // }

  // function handleDecrement() {
  //   setCounter(counter - 1);
  // }

  return (
    <>
      <header>
        <h1>Counter</h1>
      </header>
      <main>
        <p>{counter}</p>
        <p>{userName}</p>
        <div>
          <button type="button" onClick={handleDecrement}>
            -
          </button>

          <button type="button" onClick={handIncrement}>
            +
          </button>
        </div>
      </main>
    </>
  );
};

export default Counter;
