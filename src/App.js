import "./App.css"
import NicknameForm from "./components/NicknameForm"
import Greetings from "./components/Greetings"
import Pokemons from "./components/Pokemons"
import Logo from "./components/Logo"
import Wallpaper from "./assets/pokemon_wallpaper.png"
import { useState } from "react"

function App() {
	const [nickname, setNickname] = useState("")
	return (
		<div
			className="app"
			style={{
				background: `url(${Wallpaper}) no-repeat center center fixed`,
				backgroundSize: "cover"
				// backgroundPosition: "top"
				// backgroundRepeat: "no-repeat"
			}}
		>
			<Logo />
			<NicknameForm nickname={nickname} setNickname={setNickname} />
			<Greetings nickname={nickname} />
			{nickname ? <Pokemons nickname={nickname} /> : null}
		</div>
	)
}

export default App
