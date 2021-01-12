const Greetings = ({ nickname }) => {
	if (nickname) {
		return (
			<div className="greetings">
				<h1>Hello, {nickname}! </h1>
			</div>
		)
	} else return null
}

export default Greetings
