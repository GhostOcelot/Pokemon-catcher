import "./App.css"
import NicknameForm from "./components/NicknameForm"
import Greetings from "./components/Greetings"
import Pokemons from "./components/Pokemons"
import { useState } from "react"

function App() {
	const [nickname, setNickname] = useState("")
	return (
		<div className="app">
			<NicknameForm setNickname={setNickname} />
			<Greetings nickname={nickname} />
			{nickname ? <Pokemons nickname={nickname} /> : null}
		</div>
	)
}

export default App
