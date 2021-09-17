let starsArray = [];
let amountOfStars = 30;

function starGenerator() {
  const map = document.getElementById("map");
  let top = Math.floor(Math.random() * 90) + 1 + "vh";
  let left = Math.floor(Math.random() * 80) + 1 + "vw";
  let size = Math.floor(Math.random() * 5) + 6 + "px";
  let star = {
    html: document.createElement("div"),
    description: `solar system name
owner:
plantes:
live forms:
    `,
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
  e.target.id < amountOfStars ? alert(starsArray[e.target.id].description) : null;
});

starsArray[0].description = `alex system
owner: Petya
plantes: 6
live forms: none
    `;
