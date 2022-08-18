import { render } from "../../utilities";
import Form from "../Form";
import "./styles.css";

const Header = () => {
  const element = render({
    tag: "header",
    classList: ["header"],
    children: [
      {
        element: Form(),
      },
    ],
  });

  return element;
};

export default Header;
