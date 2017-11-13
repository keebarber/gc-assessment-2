function handleAdjectiveChange(event) {
	return {
		type: "ADJECTIVE",
		event
	};
}

function handleVerbChange(event) {
	return {
		type: "VERB",
		event
	};
}

function handleAdverbChange(event) {
	return {
		type: "ADVERB",
		event
	};
}

function handleMadLibSubmit(event) {
	return {
		type: "MADLIB",
		event
	};
}