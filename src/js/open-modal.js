import { refs } from "./refs";

const { button, modalWindow } = refs;

button.addEventListener("click", openModalWindow);

export function openModalWindow() {
  modalWindow.classList.remove(".visually-hidden");
}
