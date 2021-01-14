const PokemonCard = ({ pokemon }) => {
	return (
		<div className="pokemon-card">
			<div className="pokemon-circle"></div>
			<img
				className="pokemon-thumbnail"
				src={pokemon.artwork}
				alt={pokemon.name}
			/>

			<h3 className="pokemon-name">
				{pokemon.name.toUpperCase().split("-").join(" ")}
			</h3>
		</div>
	)
}

export default PokemonCard
