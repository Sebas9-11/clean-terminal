const robot = require("robotjs");

let direction = 1;

function moveMouse() {
  const mouse = robot.getMousePos();
  robot.moveMouse(mouse.x + direction, mouse.y);
  direction *= -1;
}

function jiggler() {
  try {
    setInterval(moveMouse, 30000);
  } catch (e) {
    console.log(e);
  }
}

jiggler();
