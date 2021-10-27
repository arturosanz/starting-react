import React from "react";
import styled from "@emotion/styled";

const Input = styled.input`
	input {
		width: 100%;
		font-size: x-large;
		padding: 0.2rem;
	}
`;

const PokemonFilter = ({ filter, setFilter }) => (
	<Input
		type="text"
		value={filter}
		onChange={(e) => setFilter(e.target.value)}
	/>
);

export default PokemonFilter;
