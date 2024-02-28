import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);
  return (
    <div>
      <div>
        <ExpenseList
          expenses={expenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
        />
      </div>
    </div>
  );
}
export default App;
