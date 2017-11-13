import React, { Component } from 'react';
import { handleAdjectiveChange, 
	handleVerbChange, 
	handleAdverbChange,
	handleMadLibSubmit } from '../actions';
import { connect } from 'react-redux';


class Form extends Component {
  render() {
    return (
      <div className="Form">
      		<form onSubmit={this.submitForm}>
      			<label value>Adjective: </label>
      			<input value={this.props.adjective} onChange={this.props.handleAdjectiveChange}></input>
      			<label>Verb: </label>
      			<input value={this.props.verb} onChange={this.props.handleVerbChange}></input>
      			<label>Adverb: </label>
      			<input value={this.props.adverb} onChange={this.props.handleAdverbChange}></input>
      		<button type='submit'>Submit</button>

      		<p> {this.props.adjective} is something that {this.props.verb} {this.props.adverb}</p>
      		</form>
      </div>
    );
  }
}

function submitForm(event){
	event.preventDefault();
}

function MapStateToProps(state) {
	return {
		adjective: state.adjective,
		verb: state.verb,
		adverb: state.adverb
	};
}

const MapActionsToProps = {
	handleAdjectiveChange,
	handleVerbChange,
	handleAdverbChange,
	handleMadLibSubmit
	};


export default connect(MapStateToProps, MapActionsToProps)(Form);