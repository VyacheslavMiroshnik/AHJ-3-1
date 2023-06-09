import goblin from "../img/goblin.png";
import random from "./random";

document.addEventListener("DOMContentLoaded", () => {
  const border = document.querySelector(".game_field");
  const cell = border.querySelectorAll(".game_field_cell");
  const img = document.createElement("img");
  img.setAttribute("src", goblin);
  setInterval(() => {
    const element = random(
      Array.from(cell).filter((el) => !el.querySelector("img"))
    );
    element.insertAdjacentElement("afterbegin", img);
  }, 2000);
});
