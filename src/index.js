import "./scss/styles.scss";
import Game from "./js/Game";

document.getElementById("startjoc").onclick = function () {
  document.getElementById("container").remove();
  new Game();
};
