import ActiveCell from "./activeCell/ActiveCell";

document.addEventListener("DOMContentLoaded", () => {
  const border = document.querySelector(".game_field");
  const cell = border.querySelectorAll(".game_field_cell");
  const activeCell = new ActiveCell(cell);
  activeCell.init();
});
