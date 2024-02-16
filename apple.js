const robot = require("robotjs");
const { spotlight } = require("./constants");

let direction = 1;
let tabCount = 1;

function moveMouse() {
  const mouse = robot.getMousePos();
  robot.moveMouse(mouse.x + direction, mouse.y);
  direction *= -1;
}

function changeDesktop() {
  robot.keyTap("tab", ["command"]);
  tabCount === 1 ? robot.keyTap("tab", ["command"]) : null;
  setTimeout(() => {
    robot.keyTap("enter");
  }, 2000);
  tabCount *= -1;
}

// FIXME: this function is not workint yet
// function search() {
//   robot.keyTap("space", ["command"]);
//   const random = Math.floor(Math.random() * spotlight, intervals.length);
//   robot.typeStringDelayed(spotlight, intervals[random], 2000);
//   setTimeout(() => {
//     robot.keyTap("enter");
//   }, 5000);
// }

function jiggler() {
  try {
    setInterval(changeDesktop, 210000);
    setInterval(moveMouse, 1000);
    // setInterval(search, 10000);
  } catch (e) {
    console.log(e);
  }
}

jiggler();
