import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button
        onClick={() => console.log(setAlertVisible(true))}
        color="primary"
      >
        My Button
      </Button>
    </div>
  );
}

export default App;
