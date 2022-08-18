import store from "../../store/Store";
import Button from "../Button";
import Input from "../Input";
import { render } from "../../utilities";
import "./styles.css";

const Form = () => {
  const FormButton = Button({
    textContent: "Add Task",
    onClick: onSubmit,
  });

  const FormInput = Input({
    name: "task",
    type: "text",
  });

  const onSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const taskName = FormInput.children[0].value;

    if (!taskName) return;

    const task = {
      name: taskName,
      id: Math.random().toString(),
      done: false,
    };

    store.dispatch({
      type: "ADD_TODO",
      payload: task,
    });
    form.reset();
  };

  const element = render({
    tag: "form",
    classList: ["form"],
    listeners: [
      {
        event: "submit",
        callback: onSubmit,
      },
    ],
    children: [
      {
        element: FormInput,
      },
      {
        element: FormButton,
      },
    ],
  });

  return element;
};

export default Form;
