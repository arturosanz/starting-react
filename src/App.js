import React from "react";
import styled from "@emotion/styled";
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
	return (
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
	);
}

export default App;
