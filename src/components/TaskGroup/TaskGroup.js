import { render } from "../../utilities";
import TaskList from "../TaskList";
import "./styles.css";

const TaskGroup = ({ headline }) => {
  const taskList = TaskList({
    complated: headline.toLowerCase() === "done" ? true : false,
  });

  const element = render({
    tag: "section",
    classList: ["task-group"],
    children: [
      {
        tag: "h2",
        textContent: headline,
      },
      {
        element: taskList,
      },
    ],
  });

  return element;
};

export default TaskGroup;
