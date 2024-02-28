//Task = 3
import { useState } from "react";
import produce from "immer";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 2 },
    ],
  });
  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };
  return (
    <>
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </>
  );
}
export default App;

// ***************************************************************************
// Task = 2

// import { useState } from "react";

// function App() {
//   const [pizza, setPizza] = useState({
//     name: "Spicy Pepperoni",
//     toppings: ["Mushroom"],
//   });
//   const handleClick = () => {
//     setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
//   };
//   return (
//     <>
//       <div>
//         <p>{`Pizza Name: ${pizza.name}`}</p>
//         <p>{`Toppings: ${pizza.toppings.join(", ")}`}</p>
//         <button onClick={handleClick}>Click Me</button>
//       </div>
//     </>
//   );
// }
// export default App;

// *******************************************************************

//Task =1
// import { useState } from "react";

// function App() {
//   const [game, setGame] = useState({
//     id: 1,
//     player: {
//       name: "John",
//     },
//   });
//   const handleClick = () => {
//     setGame({
//       ...game,
//       player: { ...game.player, name: "Bob" },
//     });
//   };
//   return (
//     <>
//       <div>
//         <button onClick={handleClick}>Click Me</button>
//       </div>
//     </>
//   );
// }
// export default App;
