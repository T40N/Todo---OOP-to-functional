import Layout from "./components/Layout";
import { render } from "./utilities";

const App = () => {
  const element = render({
    tag: "div",
    id: "root",
    children: [
      {
        element: Layout(),
      },
    ],
  });

  return element;
};

export default App;
