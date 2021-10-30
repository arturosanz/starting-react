import React, { useContext } from "react";
import PokemonRow from "./PokemonRow";
import PokemonContext from "../PokemonContext";
import styled from "@emotion/styled";

const Head = styled("th")`
	text-align: left;
	font-size: x-large;
`;

const PokemonTable = () => {
	const {
		state: { pokemon, filter },
		dispatch,
	} = useContext(PokemonContext);

	return (
		<table width="100%">
			<thead>
				<tr>
					<Head>Name</Head>
					<Head>Type</Head>
				</tr>
			</thead>
			<tbody>
				{pokemon
					.filter((pokemon) =>
						pokemon.name.english.toLowerCase().includes(filter.toLowerCase())
					)
					.slice(0, 20)
					.map((pokemon) => (
						<PokemonRow
							pokemon={pokemon}
							key={pokemon.id}
							onSelect={(pokemon) =>
								dispatch({ type: "SET_SELECTEDITEM", payload: pokemon })
							}
						/>
					))}
			</tbody>
		</table>
	);
};

export default PokemonTable;
