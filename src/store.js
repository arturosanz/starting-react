import { makeObservable, observable, computed } from "mobx";

class Store {
	filter = "";
	pokemon = [];
	selectedItem = null;

	constructor() {
		makeObservable(this, {
			filter: observable,
			pokemon: observable,
			selectedItem: observable,
			filteredItem: computed,
		});
	}

	get filteredItem() {
		return this.pokemon.filter(({ name: { english } }) =>
			english.toLowerCase().includes(this.filter.toLowerCase())
		)
	}

	setFilter(filter) {
		this.filter = filter;
	}
	setPokemon(pokemon) {
		this.pokemon = pokemon;
	}
	setSelectedItem(selectedItem) {
		this.selectedItem = selectedItem;
	}
}

const store = new Store();

fetch("http://localhost:3000/starting-react/pokemon.json")
	.then((resp) => resp.json())
	.then((pokemon) => store.setPokemon(pokemon));

export default store;
