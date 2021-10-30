import React from "react";
import PokemonRow from "./PokemonRow";
import store from "../store";
import styled from "@emotion/styled";
import { observer } from "mobx-react";

const Head = styled("th")`
	text-align: left;
	font-size: x-large;
`;

const PokemonTable = () => (
	<table width="100%">
		<thead>
			<tr>
				<Head>Name</Head>
				<Head>Type</Head>
			</tr>
		</thead>
		<tbody>
			{store.pokemon
				.filter(({ name: { english } }) =>
					english.toLowerCase().includes(store.filter.toLowerCase())
				)
				.slice(0, 20)
				.map((pokemon) => (
					<PokemonRow
						pokemon={pokemon}
						key={pokemon.id}
						onSelect={(pokemon) => store.setSelectedItem(pokemon)}
					/>
				))}
		</tbody>
	</table>
);

export default observer(PokemonTable);
