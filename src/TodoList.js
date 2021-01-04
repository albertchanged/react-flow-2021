// @flow
import * as React from "react";
import Todo from "./Todo";

type Props = {
  todos: string[]
};

function TodoList(props: Props): React.Node {
  const {todos} = props;
  return (
    <div className="todo-list-container">
      {todos.length ? (
          <ul>
            {todos.map((todo, i) => (
              <Todo
                todo={todo}
                key={i} 
              />)
            )}
          </ul>
        ) : "No tasks"
      }
    </div>
  );
}

export default TodoList;