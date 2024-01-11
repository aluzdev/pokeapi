const getEspeon = async () => {
  console.log("trying to fetch");
  const url = "https://pokeapi.co/api/v2/pokemon/espeon";
  const response = await fetch(url);
  const data = await response.json();
  console.log({ data });
  const { id, name, sprites, types } = data;
  const relevantPokemonData = { id, name, sprites, types };
  console.log(relevantPokemonData);
  return relevantPokemonData;
};

const addPokemonToList = (pokemon) => {
  console.log({ pokemon });
  const { id, name, sprites, types } = pokemon;
  const pokemonList = document.getElementById("pokemonList");

  //card container
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card", "bg-dark");
  cardContainer.style = "width: 18rem";

  //pokemon image
  const image = document.createElement("img");
  image.classList.add("card-img-top");
  image.src = sprites.front_default;

  //card body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  //pokemon name
  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = `${name}`;

  //pokemon types
  const cardText = document.createElement("div");
  cardText.innerText = `types: ${types[0].type.name} \n pokedex #${id} `;

  //button
  const seeMoreButton = document.createElement("a");
  seeMoreButton.classList.add("btn", "btn-primary");
  seeMoreButton.innerText = "see details";

  //assembling card body
  cardBody.append(cardTitle, cardText, seeMoreButton);

  //assembling container
  cardContainer.append(image, cardBody);

  //adding pokemon to the list
  pokemonList.append(cardContainer);
};

const main = async () => {
  const espeon = await getEspeon();
  addPokemonToList(espeon);
};

main();
