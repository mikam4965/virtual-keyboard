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
function handleButtonClick(event) {
    const button =
        event.target.tagName === "BUTTON"
            ? event.target
            : event.target.parentElement;
    console.log("Button clicked: ", button.textContent);

    if (!button.textContent) {
        return;
    }

    if (button.textContent === "CapsLock") {
        // null
    } else if (button.textContent === "backspace") {
        // null
    } else if (button.textContent === "Enter") {
        // null
    } else if (button.textContent === "Shift") {
        // null
    } else if (button.textContent === "Ctrl") {
        // null
    } else {
        textArea.value += button.textContent;
    }
}

for (let i = 0; i < rows.length; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < rows[i].length; j++) {
        const button = document.createElement("button");
        button.setAttribute("class", "key");
        const buttonContent = rows[i][j];
        if (buttonContent.length > 1) {
            button.classList.add("special");
        }
        button.addEventListener("click", handleButtonClick);

        const iconName = icons[buttonContent.toLowerCase()];
        if (iconName) {
            const icon = document.createElement("i");
            icon.classList.add("fas", iconName);
            button.appendChild(icon);
            button.classList.add("fa");
            icon.addEventListener("click", (event) => {
                const parentButton = event.target.closest("button");
                handleButtonClick({ target: parentButton });
            });
        } else {
            button.textContent = buttonContent;
            button.addEventListener("click", handleButtonClick);
        }
        row.appendChild(button);
    }
    container.appendChild(row);
}
wrapper.appendChild(textArea);
wrapper.appendChild(container);

document.body.appendChild(wrapper);
