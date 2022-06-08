const refs = {
  button: document.querySelector(".main-section__button"),
  modalWindow: document.querySelector(".backdrop"),
  closeBtn: document.querySelector(".popup__close-btn"),
  //   popup: document.querySelector(".popup"),
  c: document.querySelector(".popup__accent"),
  //   counter: document.querySelector(".popup__text"),
  resetBtn: document.querySelector(".popup__reset-btn"),
};

const { button, modalWindow, closeBtn, counter, resetBtn, c } = refs;

button.addEventListener("click", openModalWindow);
closeBtn.addEventListener("click", closeModalWindow);
modalWindow.addEventListener("click", onBackdropClick);
resetBtn.addEventListener("click", resetCouner);

let count = 0;
const Storage_Key = "count-value";
// savedValue();

function openModalWindow() {
  window.addEventListener("keydown", onEscKeyPress);
  modalWindow.classList.remove("visually-hidden");
}

function closeModalWindow() {
  window.removeEventListener("keydown", onEscKeyPress);
  modalWindow.classList.add("visually-hidden");
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    closeModalWindow();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = "Escape";
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    closeModalWindow();
  }
}

button.addEventListener("click", () => {
  count = localStorage.getItem(Storage_Key);
  count++;
  console.log(count);
  localStorage.setItem(Storage_Key, count);
  c.textContent = `${count}`;

  if (count >= 5) {
    resetBtn.classList.remove("visually-hidden");
  }
});

function resetCouner() {
  count = 0;
  c.textContent = `${count}`;
  resetBtn.classList.add("visually-hidden");
  localStorage.removeItem("count-value");
}

// function savedValue() {
//   const savedLocalStorageKey = localStorage.getItem(Storage_Key);
//   console.log(savedLocalStorageKey);

//   if (savedLocalStorageKey) {
//     console.log(savedLocalStorageKey);
//     c.textContent = `${savedLocalStorageKey}`;
//   }
// }
