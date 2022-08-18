import { render } from "../../utilities";
import "./styles.css";

const Button = ({ textContent, onClick, children }) => {
  const element = render({
    tag: "button",
    classList: children ? ["button", "square"] : ["button"],
    textContent,
    listeners: [
      {
        event: "click",
        callback: onClick,
      },
    ],
    children,
  });

  return element;
};

export default Button;
