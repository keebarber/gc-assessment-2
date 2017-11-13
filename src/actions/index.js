export function handleAdjectiveChange(event) {
	return {
		type: "ADJECTIVE",
		event
	};
}

export function handleVerbChange(event) {
	return {
		type: "VERB",
		event
	};
}

export function handleAdverbChange(event) {
	return {
		type: "ADVERB",
		event
	};
}

export function handleMadLibSubmit(event) {
	return {
		type: "MADLIB",
		event
	};
}