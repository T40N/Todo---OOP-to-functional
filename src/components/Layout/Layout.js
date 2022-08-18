import { render } from "../../utilities";
import Header from "../Header";
import TaskGroup from "../TaskGroup";
import "./styles.css";

const Layout = () => {
  const element = render({
    tag: "div",
    id: "layout",
    classList: ["layout"],
    children: [
      {
        element: Header(),
        classList: ["layout__header"],
      },
      {
        tag: "main",
        classList: ["layout__main"],
        children: [
          {
            element: TaskGroup({
              headline: "Pending",
            }),
          },
          {
            element: TaskGroup({
              headline: "Done",
            }),
          },
        ],
      },
    ],
  });

  return element;
};

export default Layout;
