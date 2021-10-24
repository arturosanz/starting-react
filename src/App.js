import React from "react";
import "./App.css";
import PropTypes from "prop-types";

const PokemonRow = ({ pokemon, onSelect }) => (
	<tr>
		<td>{pokemon.name.english}</td>
		<td>{pokemon.type.join(", ")}</td>
		<td>
			<button onClick={() => onSelect(pokemon)}>Select!</button>
		</td>
	</tr>
);

PokemonRow.propTypes = {
	pokemon: PropTypes.shape({
		name: PropTypes.shape({
			english: PropTypes.string,
		}),
		type: PropTypes.arrayOf(PropTypes.string),
	}),
	onSelect: PropTypes.func,
};

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
		<div
			style={{
				margin: "auto",
				width: 800,
				paddingTop: "1rem",
			}}
		>
			<h1 className="title">Pokemon Search</h1>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "70% 30%",
					gridColumnGap: "1rem",
				}}
			>
				<div>
					<input value={filter} onChange={(e) => setFilter(e.target.value)} />
					<table width="100%">
						<thead>
							<tr>
								<th>Name</th>
								<th>Type</th>
							</tr>
						</thead>
						<tbody>
							{pokemon
								.filter((pokemon) =>
									pokemon.name.english
										.toLowerCase()
										.includes(filter.toLowerCase())
								)
								.slice(0, 20)
								.map((pokemon) => (
									<PokemonRow
										pokemon={pokemon}
										key={pokemon.id}
										onSelect={(pokemon) => setSelectedItem(pokemon)}
									/>
								))}
						</tbody>
					</table>
				</div>
				{selectedItem && <PokemonInfo {...selectedItem} />}
			</div>
		</div>
	);
}

export default App;
