import React from "react";
import styled from "@emotion/styled";
import "./App.css";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";

const Container = styled("div")`
	margin: auto;
	width: 800px;
	padding-top: 1rem;
`;

const Title = styled("h1")`
	text-align: center;
`;

const Grid = styled("div")`
	display: grid;
	grid-template-columns: 70% 30%;
	grid-column-gap: 1rem;
`;

function App() {
	const [filter, setFilter] = React.useState("");
	const [selectedItem, setSelectedItem] = React.useState(null);
	const [pokemon, setPokemon] = React.useState([]);

	React.useEffect(() => {
		fetch("http://localhost:3000/starting-react/pokemon.json")
			.then((resp) => resp.json())
			.then((data) => setPokemon(data));
	}, []);

	return (
		<Container>
			<Title>Pokemon Search</Title>
			<Grid>
				<div>
					<PokemonFilter filter={filter} setFilter={setFilter} />
					<PokemonTable pokemon={pokemon} filter={filter} setSelectedItem={setSelectedItem} />
				</div>
				{selectedItem && <PokemonInfo {...selectedItem} />}
			</Grid>
		</Container>
	);
}

export default App;
