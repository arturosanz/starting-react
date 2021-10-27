import React from "react";
import PropTypes from "prop-types";

const PokemonInfo = ({ name, base }) => (
	<div>
		<h1>{name.english}</h1>
		<table>
			{Object.keys(base).map((key) => (
				<tr key={key}>
					<td>{key}</td>
					<td>{base[key]}</td>
				</tr>
			))}
		</table>
	</div>
);

PokemonInfo.propTypes = {
	pokemon: PropTypes.shape({
		name: PropTypes.shape({
			english: PropTypes.string,
		}),
		base: PropTypes.shape({
			HP: PropTypes.number,
			Attack: PropTypes.number,
			Defense: PropTypes.number,
			"Sp. Attack": PropTypes.number,
			"Sp. Defense": PropTypes.number,
			Speed: PropTypes.number,
		}),
	}),
};

export default PokemonInfo;