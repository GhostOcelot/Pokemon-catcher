import { useState } from "react"

const NicknameForm = ({ nickname, setNickname }) => {
	const [tempNick, setTempNick] = useState("")
	const [formValidation, setFormValidation] = useState(true)

	const handleChange = e => {
		setTempNick(e.target.value)
		e.target.value.trim().length < 5
			? setFormValidation(false)
			: setFormValidation(true)
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (formValidation) {
			setNickname(tempNick)
			setTempNick("")
			setFormValidation(false)
		}
	}

	if (!nickname) {
		return (
			<div className="nickname-container">
				<form onSubmit={handleSubmit} className="nickname-form">
					<input
						className="nickname-input"
						type="text"
						placeholder="enter you nickname"
						onChange={handleChange}
						value={tempNick}
					/>
					<input className="nickname-button" type="submit" value="Continue" />
				</form>
				<p className={formValidation ? "hidden" : "warning"}>
					Your name should be at least 5 characters long
				</p>
			</div>
		)
	} else return null
}

export default NicknameForm
