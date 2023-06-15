import Counter from "../counter/Counter";
import random from "../random";
import "./activeCell.css";

export default class ActiveCell {
  constructor(cell) {
    this.cell = Array.from(cell);
    this.randomPositioned = this.randomPositioned.bind(this);
    this.isClicked = true;
    this.counter = new Counter();
  }
  init() {
    this.createActiveElement();
    this.randomPositioned();
    this.addInterval();
  }
  createActiveElement() {
    this.div = document.createElement("div");
    this.div.classList.add("active_cell");
    this.div.addEventListener("click", () => {
      this.counter.winAdd();
      this.isClicked = true;
      this.clearInterval();
      this.randomPositioned();
      this.addInterval();
    });
  }
  randomPositioned() {
    const element = random(
      this.cell.filter((el) => !el.querySelector(".active_cell"))
    );
    element.insertAdjacentElement("afterbegin", this.div);
    this.checkedLose();
    this.isClicked = false;
  }
  checkedLose() {
    if (!this.isClicked) {
      if (!this.counter.loseAdd()) {
        this.clearInterval();
        this.gameOver();
      }
    }
  }
  gameOver() {
    const body = document.querySelector("body");
    const string = `<h1 class= "game_lose"> Вы проиграли</h1>`;
    this.cell[0].closest(".game_field").remove();
    body.insertAdjacentHTML("afterbegin", string);
  }
  addInterval() {
    this.interval = setInterval(this.randomPositioned, 1000);
  }
  clearInterval() {
    clearInterval(this.interval);
  }
}
