import create from "zustand";

const useStore = create((set) => ({
	filter: "",
	pokemon: [],
	selectedItem: null,
	setFilter: (filter) => set((state) => ({ ...state, filter })),
	setPokemon: (pokemon) => set((state) => ({ ...state, pokemon })),
	setSelectedItem: (selectedItem) =>
		set((state) => ({ ...state, selectedItem })),
}));

fetch("http://localhost:3000/starting-react/pokemon.json")
	.then((resp) => resp.json())
	.then((pokemon) => useStore.setState((state) => ({ ...state, pokemon })));

export default useStore;
