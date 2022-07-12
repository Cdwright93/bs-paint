const gridWidth = 10;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector(".canvas");
  const div = document.createElement("div");
  div.classList.add("square");
  div.id = count;
  div.addEventListener("click", () => {
    changeMe(div.id);
  });
  div.style.backgroundColor = "white";
  console.log(div);
  canvas.appendChild(div);
  count++;
}

function changeMe(id) {
  let square = document.getElementById(id);
  let color = document.getElementsByClassName("current-brush");
  square.style.backgroundColor = color[0].style.backgroundColor;
}

function changeColor(caller) {
  let color = document.getElementsByClassName("current-brush");
  if (caller === "red") {
    color[0].style.backgroundColor = "red";
  }
  if (caller === "blue") {
    color[0].style.backgroundColor = "blue";
  }
  if (caller === "green") {
    color[0].style.backgroundColor = "limegreen";
  }
  if (caller === "black") {
    color[0].style.backgroundColor = "black";
  }
  if (caller === "white") {
    color[0].style.backgroundColor = "white";
  }
}
