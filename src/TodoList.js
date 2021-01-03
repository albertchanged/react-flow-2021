import Todo from "./Todo";

function TodoList({todos}) {
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