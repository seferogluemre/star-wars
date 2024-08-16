let characters = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
  {
    id: 18,
    name: "Wedge Antilles",
    pic: "https://upload.wikimedia.org/wikipedia/en/4/41/Wedge_Antilles-Denis_Lawson-Star_Wars_%281977%29.jpg",
    homeworld: "corellia",
  },
  {
    id: 19,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 20,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
    homeworld: "Rodia",
  },
  {
    id: 21,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];
// Get Element
const charactersDiv = document.getElementById("galaxy");
const filterBtnDiv = document.getElementById("filterBtnDiv");
const CharacterButton = document.getElementById("galacticButton");
const FilterCharactersDiv = document.getElementById("filter-characters");
const HideCharacterButton = document.getElementById("galacticButtonHide");

let charactersRender = false;
// Karakter Gizleme Ve Gösterme
function toggleRender() {
  createInputFilter();
  if (charactersRender) {
    charactersRender = false;
    charactersDiv.innerHTML = "";
    FilterCharactersDiv.innerHTML = "";
    CharacterButton.textContent = "Click to Enter Galactic Age";
    filterBtnDiv.innerHTML = "";
  } else {
    characters.forEach((character) => {
      charactersDiv.innerHTML += `
        <div class="col-lg-4 col-sm-6 mb-5" id="filterDiv" data-id="${character.homeworld}">
          <div class="card bg-black text-white border-light" style="width: 18rem;">
            <img src="${character.pic}" class="card-img-top" alt="..." style="height: 350px;">
            <div class="card-body">
              <p class="card-text">${character.name}</p>
              <p class="card-text">${character.homeworld}</p>
            </div>
          </div>
        </div>`;
      charactersRender = true;
      CharacterButton.style.color = "azure";
      document.getElementById("galaxy").style.display = "flex";
    });
    CharacterButton.textContent = "Hide Characters";
  }
}
// Radio oluşturmak İçin Her HomeWorld Datayı map ile döndük
const characterHomeWorldData = characters.map(
  (character) => character.homeworld
);
//HomeWorld Datasını Aldıktan sonra tekrarsız listeleme için Set Dizisinin İçine aldık
const uniqueHomeWorld = [...new Set(characterHomeWorldData)];
function createInputFilter() {
  FilterCharactersDiv.innerHTML = "";
  uniqueHomeWorld.forEach((homeworld) => {
    FilterCharactersDiv.innerHTML += `
           <div class="form-check mb-4 col-lg-3 col-md-6 col-sm-12">
          <input type="radio" class="form-check-input" value="${homeworld}" name="exampleRadioInput">
          <label for="" class="form-check-label text-white fs-6">${homeworld}</label>
        </div>
    `;
  });
}
let filteredHomeworld;
function filterCharacters(homeworld) {
  filteredHomeworld = characters.filter(
    (character) => character.homeworld == homeworld
  );
  charactersDiv.innerHTML = filteredHomeworld.map(
    (
      character
    ) => ` <div class="col-lg-4 col-sm-6 mb-5" id="filterDiv" data-id="${character.homeworld}">
          <div class="card bg-black text-white border-light" style="width: 18rem;">
            <img src="${character.pic}" class="card-img-top" alt="..." style="height: 350px;">
            <div class="card-body">
              <p class="card-text">${character.name}</p>
              <p class="card-text">${character.homeworld}</p>
            </div>
          </div>
        </div>`
  );
}
// Event listener for radio buttons
FilterCharactersDiv.addEventListener("change", (event) => {
  if (event.target.name === "exampleRadioInput") {
    const selectedHomeworldId = event.target.value;
    filterCharacters(selectedHomeworldId);
  }
});
