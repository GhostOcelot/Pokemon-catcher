const PokemonCard = ({ pokemon }) => {
	return (
		<div className="pokemon-card">
			<h2>{pokemon.name.toUpperCase().split("-").join(" ")}</h2>
			<img
				className="pokemon-thumbnail"
				src={pokemon.artwork}
				alt={pokemon.name}
			/>
		</div>
	)
}

export default PokemonCard
