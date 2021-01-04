// @flow
import './App.css';
import * as React from "react";
import TodoList from "./TodoList";

type State = {
  newTodo: string,
  todos: string[]
};

class App extends React.Component<{}, State> {
  state: State = {
    newTodo: "",
    todos: []
  };

  // Typing for class method based on https://stackoverflow.com/a/65084912
  updateCurrentTodo: SyntheticKeyboardEvent<HTMLInputElement> => void = (e) => {
    e.preventDefault();

    if (e.target instanceof HTMLInputElement) {
      this.setState({
        newTodo: e.target.value
      });
    }
  }

  submitTodo: SyntheticKeyboardEvent<HTMLInputElement> => void = (e) => {
    const newTodo = this.state.newTodo;
    if (e.key === "Enter") {
      this.setState({
        todos: this.state.todos.concat(newTodo),
        newTodo: ""
      });
    }
  }

  render(): React.Node {
    const {newTodo, todos} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h2>Tasks for the Day</h2>
          <input
            type="text"
            value={newTodo}
            placeholder="Type your task"
            onChange={this.updateCurrentTodo}
            onKeyPress={this.submitTodo}
          />
          <TodoList todos={todos} />
        </header>
      </div>
    );
  }
}

export default App;
