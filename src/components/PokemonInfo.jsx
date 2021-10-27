import React, { useContext } from "react";
import PropTypes from "prop-types";
import PokemonContext from "../PokemonContext";

const PokemonInfo = () => {
	const selectedItem = useContext(PokemonContext);
	return selectedItem.selectedItem !== null ? (
		<div>
			<h1>{selectedItem.selectedItem.name.english}</h1>
			<table>
				{Object.keys(selectedItem.selectedItem.base).map((key) => (
					<tr key={key}>
						<td>{key}</td>
						<td>{selectedItem.selectedItem.base[key]}</td>
					</tr>
				))}
			</table>
		</div>
	) : null;
};

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
