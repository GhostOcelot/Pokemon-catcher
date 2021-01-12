import { useState } from "react"

const NicknameForm = ({ setNickname }) => {
	const handleChange = e => {
		setTempNick(e.target.value)
		e.target.value.length < 5
			? setFormValidation(false)
			: setFormValidation(true)
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (formValidation) {
			setNickname(tempNick)
			setTempNick("")
			setHidden(!hidden)
		}
	}

	const [hidden, setHidden] = useState(false)
	const [tempNick, setTempNick] = useState("")
	const [formValidation, setFormValidation] = useState(true)

	return (
		<div className={hidden ? " hidden" : null}>
			<form className="nicknamePrompt" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="enter you nickname"
					onChange={handleChange}
					value={tempNick}
				/>
				<input type="submit" value="Continue" />
			</form>
			<p className={formValidation ? "hidden" : "warning"}>
				Your name should be at least 5 characters long
			</p>
		</div>
	)
}

export default NicknameForm
