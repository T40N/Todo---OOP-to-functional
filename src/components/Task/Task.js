import Button from "../Button";
import "./styles.css";
import { render, setDraggable } from "../../utilities";

const Task = ({ name, id, dispatch }) => {
  let element = "";

  const onRemoveTaskHandler = () => {
    dispatch({
      type: "REMOVE_TODO",
      payload: id,
    });
    element.remove();
  };

  const onDragStartHandler = (event) => {
    event.dataTransfer.setData("text/plain", element.id);
    event.dataTransfer.effectAllowed = "move";
    element.classList.add("dragged");
  };

  const onDragEndHandler = () => {
    element.classList.remove("dragged");
  };

  const TaskButton = Button({
    textContent: "",
    onClick: onRemoveTaskHandler,
    children: [
      {
        tag: "i",
        textContent: "close",
      },
    ],
  });

  element = render({
    tag: "li",
    classList: ["task"],
    id,
    attributes: [
      {
        name: "draggable",
        value: true,
      },
    ],
    children: [
      {
        tag: "h3",
        textContent: name,
      },
      {
        element: TaskButton,
      },
    ],
  });

  setDraggable(element, {
    onDragStart: onDragStartHandler,
    onDragEnd: onDragEndHandler,
  });

  return element;
};

export default Task;
