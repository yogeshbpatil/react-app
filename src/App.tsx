import axios from "axios";
import { useEffect, useState } from "react";
interface User {
  id: number;
  name: string;
}
function App() {
  const [user, setusers] = useState<User[]>([]);
  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setusers(res.data));
  }, []);
  return (
    <ul>
      {user.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
export default App;
