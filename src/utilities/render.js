const render = ({ children, ...component }) => {
  const element = createElement(component);
  if (children) {
    children.forEach((child) => appendChild(child, element));
  }

  return element;
};

const createElement = (component) => {
  const element = component.element || document.createElement(component.tag);
  for (const prop in component) {
    switch (prop) {
      case "textContent":
        element.textContent = component.textContent;
        break;
      case "classList":
        component.classList.forEach((className) => {
          return element.classList.add(className);
        });
        break;
      case "id":
        element.id = component.id;
        break;
      case "attributes":
        component.attributes.forEach(({ name, value }) => {
          element.setAttribute(name, value);
        });
        break;
      case "listeners":
        component.listeners.forEach(({ event, callback }) => {
          element.addEventListener(event, callback);
        });
        break;
    }
  }

  return element;
};

const appendChild = (child, container) => {
  if (!child) return;

  const element = createElement(child);
  container.append(element);

  if (child.children) {
    child.children.forEach((nestedChild) => appendChild(nestedChild, element));
  }
};

export default render;
