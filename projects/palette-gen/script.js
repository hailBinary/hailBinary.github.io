const row = document.querySelector(".row");
const colorGen = document.getElementById("color_gen");

const divs = [...row.children];

colorGen.addEventListener("click", () => {
  divs.forEach((div) => {
    const color = randomColor();
    div.style.backgroundColor = color;
    div.textContent = color;
    div.style.color = getContrastColor(color);
  });
});

//to copy
divs.forEach((div) => {
  div.addEventListener("click", () => {
    navigator.clipboard.writeText(div.textContent);

    div.classList.add("clicked");
    setTimeout(() => div.classList.remove("clicked"), 200);
  });
});

//functions to generate colors;
function randomFF() {
  const num = Math.floor(Math.random() * 256); //random num from
  const hex = num.toString(16); //turn to hex.
  return hex.padStart(2, "0"); //add 0 if single number.
}

function randomColor() {
  return "#" + randomFF() + randomFF() + randomFF(); //add 3 channels of numbers.
}

function getContrastColor(hex) {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 128 ? "#000000" : "#FFFFFF";
}
