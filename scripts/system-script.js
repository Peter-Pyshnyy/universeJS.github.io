var planets = [];
var biomesMap = new Map();
biomesMap.set("Forest", "#589870");
biomesMap.set("Tundra", "#586D5E");
biomesMap.set("Ocean", "#344285");
biomesMap.set("Ice Sheet", "#C1D5D7");
biomesMap.set("Lavaplanet", "#4A0000");
biomesMap.set("Desert", "#A67A56");
biomesMap.set("Rocks", "#666");

var orbitBiomes = new Map();
orbitBiomes.set(1, ["Rocks", "Lavaplanet"]);
orbitBiomes.set(2, ["Rocks", "Desert"]);
orbitBiomes.set(3, ["Rocks", "Desert", "Ocean"]);
orbitBiomes.set(4, ["Rocks", "Desert", "Ice Sheet"]);
orbitBiomes.set(5, ["Rocks", "Desert", "Ice Sheet"]);
orbitBiomes.set(6, ["Rocks", "Desert", "Ice Sheet"]);
orbitBiomes.set(7, ["Rocks", "Desert", "Ice Sheet"]);
orbitBiomes.set(8, ["Rocks", "Desert", "Ice Sheet"]);

class Planet {
  constructor(orbit, life, biome) {
    this.orbit = orbit;
    this.life = life;
    this.biome = biome;
  }
}

//creates a planet object
function planetGenerator() {
  let planet = null;

  if (Math.random() < 0.5) {
    //leave an empty orbit
    planets.push(planet);
    return;
  }

  let orbit = planets.length + 1;
  let life = (orbit == 4 || orbit == 3) && Math.random() < 0.5;
  let biome = biomeGenerator(orbit, life);
  planet = new Planet(orbit, life, biome);
  planets.push(planet);
  stylePlanet(planet);
}

//generates a biome for a planet based on obrit/life
function biomeGenerator(orbit, life) {
  let biomes = [];
  //gets an array of possible biomes
  if (life) {
    biomes = orbit == 3 ? ["Desert", "Ocean", "Forest"] : ["Desert", "Ice Sheet", "Tundra"];
  } else {
    biomes = orbitBiomes.get(orbit);
  }

  //choses one of the biomes
  return biomes[Math.floor(Math.random() * biomes.length)];
}

//creates the HTML element of the planet with random size + color based on biome
async function stylePlanet(planet) {
  let planetElement = document.createElement("div");
  planetElement.setAttribute("class", "planet");
  planetElement.setAttribute("id", planet.orbit);

  let planetSize = Math.floor(Math.random() * 25) + 15;
  let planetColor = biomesMap.get(planet.biome);
  let planetOrbit = planet.orbit * 70 + 90;

  planetElement.style.width = planetSize + "px";
  planetElement.style.height = planetSize + "px";
  planetElement.style.background = planetColor;
  planetElement.style.left = planetOrbit + "px";

  appendPlanet(planetElement);
}

function appendPlanet(planet) {
  let bg = document.getElementById("s-system");
  bg.appendChild(planet);
}

function createSystemBG() {
  const map = document.getElementById("map");
  let sbg = document.createElement("div");
  sbg.setAttribute("class", "s-system");
  sbg.setAttribute("id", "s-system");
  map.appendChild(sbg);
}

//creates a window with the solar system
function createSystemWindow() {
  planets = [];
  createSystemBG();
  for (let i = 0; i < 8; i++) {
    planetGenerator();
  }
}

//show planet info
document.addEventListener("click", (e) => {
  if (e.target.className == "planet") console.log(planets[e.target.id - 1]);
});

export { createSystemWindow };
