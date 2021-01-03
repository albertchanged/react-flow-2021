import './App.css';
import { useState } from 'react';
import TodoList from "./TodoList";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const updateCurrentTodo = (e) => {
    e.preventDefault();
    setNewTodo(e.target.value);
  }

  const submitTodo = (e) => {
    if (e.key === "Enter") {
      setTodos(todos.concat(newTodo));
      setNewTodo("");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Tasks for the Day</h2>
        <input
          type="text"
          value={newTodo}
          placeholder="Type your task"
          onChange={updateCurrentTodo}
          onKeyPress={submitTodo}
        />
        <TodoList todos={todos} />
      </header>
    </div>
  );
}

export default App;
