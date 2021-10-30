import React from "react";
import PropTypes from "prop-types";
import store from "../store";
import { observer } from "mobx-react";

const PokemonInfo = () => {
	return store.selectedItem !== null ? (
		<div>
			<h1>{store.selectedItem.name.english}</h1>
			<table>
				{Object.keys(store.selectedItem.base).map((key) => (
					<tr key={key}>
						<td>{key}</td>
						<td>{store.selectedItem.base[key]}</td>
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

export default observer(PokemonInfo);
