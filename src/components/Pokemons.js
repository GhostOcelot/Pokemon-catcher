import { useState, useEffect } from "react"
import PokemonCard from "./PokemonCard"

const Pokemons = ({ nickname }) => {
	const [allPokemons, setAllPokemons] = useState([])

	useEffect(() => {
		fetch(
			`https://pokeapi.co/api/v2/pokemon?limit=5&offset=${nickname.length * 10}`
		)
			.then(response => response.json())
			.then(data => {
				data.results.forEach(item => {
					fetch(item.url)
						.then(response => response.json())
						.then(data => {
							const pokemon = {}
							pokemon.name = data.name
							pokemon.artwork =
								data.sprites.other["official-artwork"].front_default
							pokemon.stats = []
							data.stats.forEach(item => {
								pokemon.stats.push({
									name: item.stat.name,
									value: item.base_stat
								})
							})
							setAllPokemons(allPokemons => [...allPokemons, pokemon])
						})
				})
			})
	}, [nickname.length])

	const handleClick = () => {
		const caughtPokemons = []
		allPokemons.forEach(pokemon => {
			const randomNumber = Math.floor(Math.random() * 2)
			if (randomNumber === 1) caughtPokemons.push(pokemon.name)
		})
		console.log({ nickname: nickname, pokemons: caughtPokemons })
	}

	return (
		<>
			<div className="pokemons-container">
				{allPokemons.map(pokemon => (
					<PokemonCard key={pokemon.name} pokemon={pokemon} />
				))}
			</div>
			<button className="catch-button" onClick={handleClick}>
				Catch'em!
			</button>
		</>
	)
}

export default Pokemons
