const pokemonName = document.getElementById("pokeName");
const pokemonNumber = document.getElementById("pokeNum");
const pokemonImage = document.getElementById("pokeImg");

const form = document.querySelector('.form');
const pokemonSearch = document.querySelector('.input-search');

const btnPrev = document.getElementById("prevBtn");
const btnNext = document.getElementById("nextBtn");

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }
};

const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = 'Loading...';
    const data = await fetchPokemon(pokemon);
    if (data) {
        pokemonImage.style.display="block"
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonSearch.value = "";
        searchPokemon = data.id;-
    } else {
        pokemonImage.style.display="none"
        pokemonName.innerHTML = "Not found :c";
        pokemonNumber.innerHTML = "";
    }
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(pokemonSearch.value.toLowerCase())
}); 

btnPrev.addEventListener('click', () => {
    if (searchPokemon > 1) {
        searchPokemon -= 1;
        renderPokemon(searchPokemon);
    }
}); 

btnNext.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon);
}); 

renderPokemon(searchPokemon);