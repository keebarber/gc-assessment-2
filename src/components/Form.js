import React, { Component } from 'react';
import { handleAdjectiveChange, 
	handleVerbChange, 
	handleAdverbChange,
	handleMadLibSubmit } from '../actions';
import { connect } from 'react-redux';


class Form extends Component {

constructor(props) {
	super(props);
	this.state = {
		adjective:"",
		verb:"",
		adverb: ""
	};
}

  render() {
    return (
      <div className="Form">
      		<form onSubmit={this.handleSubmit.bind(this)}>

      			<label value>Adjective: </label>
      			<input value={this.state.adjective} onChange={this.handleAdjectiveChange.bind(this)}></input>
      			<label>Verb: </label>
      			<input value={this.state.verb} onChange={this.handleVerbChange.bind(this)}></input>
      			<label>Adverb: </label>
      			<input value={this.state.adverb} onChange={this.handleAdverbChange.bind(this)}></input>
      		<button type='submit'>Submit</button>
      		<button onClick={this.handleClear.bind(this)}>Clear</button>


      		<p> {this.state.adjective} is something that {this.state.verb} {this.state.adverb}</p>
      		</form>
      </div>
    );
  }

handleClear(event) {
	this.setState({
		 adjective: "",
               verb: "",
               adverb: ""
	});
}

handleAdjectiveChange(event) {
	this.setState({
		adjective: event.target.value
	});
}

handleVerbChange(event) {
	this.setState({
		verb: event.target.value
	});
}
handleAdverbChange(event) {
	this.setState({
		adverb: event.target.value
	});
}

    handleSubmit(event) {
        // by default a form submission will refresh the page. preventDefault stops that from happening.
        event.preventDefault();
        // Call the function that App.js passes into the onSubmit attribute.
        // Pass it a new contact object.
        this.props.onSubmit({
            adjective: this.state.adjective,
            verb: this.state.verb,
            adverb: this.state.adverb
        });
        // Clear the form by simply updating the state with empty form values.
        // this.setState({
        //     adjective: "",
        //     verb: "",
        //     adverb: ""
        // });
    }
}


// function MapStateToProps(state) {
// 	return {
// 		adjective: state.adjective,
// 		verb: state.verb,
// 		adverb: state.adverb
// 	};
// }

// const MapActionsToProps = {
// 	handleAdjectiveChange,
// 	handleVerbChange,
// 	handleAdverbChange,
// 	handleMadLibSubmit
// 	};


export default (Form);