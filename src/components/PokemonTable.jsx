import React from "react";
import PokemonRow from "./PokemonRow";
import useStore from "../store";
import styled from "@emotion/styled";

const Head = styled("th")`
	text-align: left;
	font-size: x-large;
`;

const PokemonTable = () => {
	const filter = useStore((state) => state.filter);
	const pokemon = useStore((state) => state.pokemon);
	const setSelectedItem = useStore((state) => state.setSelectedItem);

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
							onSelect={(pokemon) => setSelectedItem(pokemon)
							}
						/>
					))}
			</tbody>
		</table>
	);
};

export default PokemonTable;
