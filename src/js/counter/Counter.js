import "./counter.css";

export default class Counter {
  constructor() {
    this.win = 0;
    this.lose = 0;
    this.init();
  }
  init() {
    this.createElements();
    this.updateElement();
  }
  createElements() {
    this.countContainer = document.createElement("div");
    this.countContainer.classList.add("count_container");
    const countWin = document.createElement("div");
    countWin.classList.add("counter_win");
    const countLose = document.createElement("div");
    countLose.classList.add("counter_lose");
    this.countContainer.insertAdjacentElement("beforeend", countWin);
    this.countContainer.insertAdjacentElement("beforeend", countLose);
  }
  updateElement() {
    const winElement = this.countContainer.querySelector(".counter_win");
    const loseElement = this.countContainer.querySelector(".counter_lose");
    winElement.textContent = `Убито гоблинов : ${this.win}`;
    loseElement.textContent = `Сбежало гоблинов : ${this.lose}`;
    const body = document.querySelector("body");
    body.insertAdjacentElement("beforeend", this.countContainer);
  }

  winAdd() {
    this.win++;
    this.updateElement();
  }
  loseAdd() {
    this.lose++;
    this.updateElement();
    return this.checkedLoose();
  }
  checkedLoose() {
    return this.lose < 5;
  }
}
