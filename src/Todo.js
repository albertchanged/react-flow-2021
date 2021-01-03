import React, { useState } from "react";

function Todo({todo}) {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = () => {
    setCompleted(!completed);
  }

  return (
    <li>
      <div
        className={completed ? "todo-item-completed" : ""}
        onClick={toggleCompleted}
      >
        {todo}
      </div>
    </li>
  );
}

export default Todo;