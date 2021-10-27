import React from "react";
import styled from "@emotion/styled";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";
import PokemonContext from "./PokemonContext";

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

	if (!pokemon) {
		return <div>Loading Data!</div>;
	}

	return (
		<PokemonContext.Provider
			value={{
				filter,
				selectedItem,
				pokemon,
				setFilter,
				setSelectedItem,
				setPokemon,
			}}
		>
			<Container>
				<Title>Pokemon Search</Title>
				<Grid>
					<div>
						<PokemonFilter />
						<PokemonTable />
					</div>
					<PokemonInfo />
				</Grid>
			</Container>
		</PokemonContext.Provider>
	);
}

export default App;
