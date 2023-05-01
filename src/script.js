const rows = [
  [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "backspace",
  ],
  [
    "tab",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "[",
    "]",
    "\\",
    "Del",
  ],
  ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
  ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "up", "Shift"],
  ["Ctrl", "Win", "Alt", "Space", "Alt", "left", "down", "right", "Ctrl"],
];

const icons = {
  tab: "fa-indent",
  left: "fa-arrow-left",
  up: "fa-arrow-up",
  right: "fa-arrow-right",
  down: "fa-arrow-down",
};

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

const textArea = document.createElement("textarea");
textArea.classList.add("textArea");

const container = document.createElement("div");
container.classList.add("container");

let isCapsOn = false;

wrapper.appendChild(textArea);
wrapper.appendChild(container);

document.body.appendChild(wrapper);
