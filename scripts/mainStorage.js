const Base_Url = "https://pokeapi.co/api/v2/pokemon?limit=1302&offset=0";

const allPokeData = [];

let searchData = [];

const colours = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
	stellar: '#054e11ff',
	unkown: '#476866ff'
};

async function loadAll(start, end) {
	try {
		startSpinner();
		await getData(start, end);
		enableBtn();
		render();
	} catch (error) {
		alert("Try loading again");
	}
};

function getData(start, end) {    
	return new Promise((resolve) => {
		setTimeout(() => {
			 resolve(fetchPokemon(start, end));
		}, 4000);
	});
};

async function fetchPokemon(start, end) {
	let response = await fetch(Base_Url);
	let responseJson = await response.json();
	for (let i = start; i < end; i++) {
		let pokemonName = responseJson.results[i].name;
		let pokeUrl = responseJson.results[i].url;
		searchData.push(pokemonName);
		await fetchPokemonData(pokemonName, pokeUrl);
	};
};

async function fetchPokemonData(pokemonName, pokeUrl) {
	let response = await fetch(pokeUrl);
	let pokemon = await response.json();
	allPokeData.push(pokemon);
};

function getMore(newStart, newEnd) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(fetchPokemon(newStart, newEnd));
		}, 2000);
	});
};

async function useMore(newStart, newEnd) {
	await getMore(newStart, newEnd);
	render();
};