import { useState } from "react";

function App() {
  const [tags, setTags] = useState(["happy", "cheerful"]);
  const handleClick = () => {
    //Add
    setTags([...tags, "exciting"]);
    //Remove
    setTags(tags.filter((tags) => tags != "happy"));
    //update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
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
