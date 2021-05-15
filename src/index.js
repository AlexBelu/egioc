import "./scss/styles.scss";
import Game from "./js/Game";

document.getElementById("startjoc").onclick = function () {
  document.getElementById("game").remove();
  new Game();
};
