const balls = [];
const container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);
for (let i = 0; i <= 10; i++) {
  let ball = document.createElement("div");
  ball.className = "ball";
  container.appendChild(ball);
  ball.style.width = 3 + 6 * Math.random() + "vw";
  ball.style.height = ball.style.width;
  ball.style.position = "relative";
  ball.style.background = "#E02B52";
  ball.style.borderRadius = "50%";
  ball.animate(
    [
      { top: "0vh", backgroundColor: "#E02B52" },
      {
        top: 100 - parseInt(ball.style.height) - parseInt(ball.style.height) / 2 + "vh",
        backgroundColor: "#E0D62B",
      },
      { top: "0vh", backgroundColor: "#E02B52" },
    ],
    {
      duration: 1500 + 800 * Math.random(),
      iterations: Infinity,
    }
  );
  balls.push(ball);
}
