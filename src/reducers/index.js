const INITIAL_STATE = {
	adjective: "",
	verb: "",
	adverb: ""
};

export default function(state=INITIAL_STATE, action) {
	switch(action.type) {
		case "ADJECTIVE":
			return handleAdjectiveChange(state, action.event);
		case "VERB":
			return handleVerbChange(state, action.event);	
		case "ADVERB":
			return handleAdverbChange(state, action.event);
		case "MADLIB":
			return handleMadLibSubmit(state, action.event);	
		default:
			return state;
	}
}

function handleAdjectiveChange(state, event) {
	let adjective = event.target.value;

	return Object.assign({}, state, {
		adjective: adjective
	});
}

function handleVerbChange(state, event) {
	let verb = event.target.value;

	return Object.assign({}, state, {
		verb: verb
	});
}

function handleAdverbChange(state, event) {
	let adverb = event.target.value;

	return Object.assign({}, state, {
		adverb: adverb
	});
}

function handleMadLibSubmit(state, event) {
	event.preventDefault();

	return Object.assign({}, state, {
		adjective: state.adjective,
		verb: state.verb,
		adverb: state.adverb
	});
}