const board = document.querySelector("#board");
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });
  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  board.append(square);
}

const setColor = (elem) => {
  const color = getRandomColor();
  elem.style.backgroundColor = color;
  elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (elem) => {
  elem.style.backgroundColor = "#1d1d1d";
  elem.style.boxShadow = `0 0 2px #000`;
};

const getRandomColor = () => {
  const rgbNum = () => Math.floor(Math.random() * 256);
  const r = rgbNum();
  const g = rgbNum();
  const b = rgbNum();

  return `rgb(${r},${g},${b})`;
};
