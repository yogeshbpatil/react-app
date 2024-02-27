import { useState } from "react";
import Message from "./components/Message";

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });
  const handleClick = () => {
    const newDrink = { ...drink, price: 6 };
    setDrink(newDrink);
  };
  return (
    <>
      {drink.price}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </>
  );
}
export default App;
