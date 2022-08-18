export const setDraggable = (element, { onDragStart, onDragEnd }) => {
  element.setAttribute("draggable", true);
  switch (true) {
    case !!onDragStart:
      element.addEventListener("dragstart", onDragStart);
    // falls through
    case !!onDragEnd:
      element.addEventListener("dragend", onDragEnd);
  }
};

export const setDroppable = (element, { onDrop, onDragOver, onDragLeave }) => {
  switch (true) {
    case !!onDrop:
      element.addEventListener("drop", onDrop);
    // falls through
    case !!onDragOver:
      element.addEventListener("dragover", onDragOver);
    // falls through
    case !!onDragLeave:
      element.addEventListener("dragleave", onDragLeave);
  }
};
