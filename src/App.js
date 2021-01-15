import "./App.css"
import NicknameForm from "./components/NicknameForm"
import Greetings from "./components/Greetings"
import Pokemons from "./components/Pokemons"
import Logo from "./components/Logo"
import { useState } from "react"

function App() {
	const [nickname, setNickname] = useState("")

	return (
		<div className="app">
			<Logo />
			<NicknameForm nickname={nickname} setNickname={setNickname} />
			<Greetings nickname={nickname} />
			{nickname ? <Pokemons nickname={nickname} /> : null}
		</div>
	)
}

export default App
