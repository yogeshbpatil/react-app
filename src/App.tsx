import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button onClick={() => console.log("Clicked")} color="primary">
        My Button
      </Button>
    </div>
  );
}

export default App;
