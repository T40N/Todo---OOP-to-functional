import store from "../../store/Store";
import Task from "../Task";
import "./styles.css";
import { render, setDroppable } from "../../utilities";

const TaskList = ({ complated }) => {
  let tasks = [];
  const element = render({
    tag: "ul",
    classList: ["task-list"],
  });

  const onDragOverHandler = (event) => {
    if (event.dataTransfer) {
      event.preventDefault();
      element.classList.add("droppable");
    }
  };

  const onDragLeaveHandler = () => {
    element.classList.remove("droppable");
  };

  const onDropHandler = (event) => {
    const droppedId = event.dataTransfer.getData("text/plain");
    if (tasks.find(({ id }) => id === droppedId)) return;
    store.dispatch({ type: "TOGGLE_TODO", payload: droppedId });
  };

  const updateList = () => {
    tasks = store.getState().filter(({ done }) => done === complated);
    element.replaceChildren();
    tasks.forEach(({ id, name, done, wasToggled }) => {
      const task = Task({ name, id, dispatch: store.dispatch });
      element.append(task);
      if (wasToggled) {
        setTimeout(() => {
          done ? task.classList.add("done") : task.classList.remove("done");
        }, 0);
      }
    });
  };

  setDroppable(element, {
    onDrop: onDropHandler,
    onDragOver: onDragOverHandler,
    onDragLeave: onDragLeaveHandler,
  });

  store.subscribe(updateList);

  return element;
};

export default TaskList;
