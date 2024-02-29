import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Fan", amount: 10, category: "Utilities" },
    { id: 2, description: "Bulb", amount: 20, category: "Utilities" },
    { id: 3, description: "Table", amount: 30, category: "Utilities" },
    { id: 4, description: "Chair", amount: 40, category: "Utilities" },
    { id: 5, description: "Milk", amount: 50, category: "Groceries" },
    { id: 6, description: "T.V.", amount: 50, category: "Entertainment" },
    { id: 7, description: "Music", amount: 50, category: "Entertainment" },
    { id: 8, description: "Mobile", amount: 50, category: "Entertainment" },
    { id: 9, description: "Caram", amount: 50, category: "Entertainment" },
    { id: 10, description: "Computer", amount: 50, category: "Entertainment" },
    { id: 11, description: "Water", amount: 50, category: "Groceries" },
    { id: 12, description: "Pulses", amount: 50, category: "Groceries" },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div>
        <div className="mb-3">
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
        </div>

        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
        />
      </div>
    </div>
  );
}
export default App;
