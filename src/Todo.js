// @flow
import * as React from "react";

type Props = {
  todo: string
};

function Todo(props: Props): React.Node {
  const {todo} = props;
  const [completed, setCompleted] = React.useState(false);

  const toggleCompleted = (): void => {
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