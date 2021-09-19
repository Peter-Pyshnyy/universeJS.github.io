let starsArray = [];
let amountOfStars = 30;

function starGenerator() {
  const map = document.getElementById("map");
  let top = Math.floor(Math.random() * 90) + 1 + "vh";
  let left = Math.floor(Math.random() * 80) + 1 + "vw";
  let size = Math.floor(Math.random() * 5) + 6 + "px";
  let star = {
    html: document.createElement("div"),
    description: descriptionGenerator(),
  };

  starsArray.push(star);
  star.html.setAttribute("id", starsArray.length - 1);
  star.html.setAttribute("class", "star");
  star.html.style.top = top;
  star.html.style.left = left;
  star.html.style.width = size;
  star.html.style.height = size;
  map.appendChild(star.html);
}

for (let i = 0; i < amountOfStars; i++) {
  starGenerator();
}

document.addEventListener("click", (e) => {
  e.target.id < amountOfStars + 1 ? console.log(starsArray[e.target.id]) : null;
  //console.log(JSON.parse(localStorage.stars));
});

function descriptionGenerator(star) {
  return {
    name: `System ${String.fromCharCode(Math.floor(Math.random() * 25) + 65) + "-" + Math.floor(Math.random() * 99)}`,
    owner: "No Owner",
    planets: Math.floor(Math.random() * 7) + 2,
    liveForms: Math.random() < 0.3 ? "Exist" : "None",
  };
}

starsArray.map((element) => {
  element.description = descriptionGenerator();
});

//change to class
