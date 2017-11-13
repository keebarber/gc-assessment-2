import React, { Component } from 'react';
import { handleAdjectiveChange, handleVerbChange, handleAdverbChange } from '../actions';
import { connect } from 'react-redux';


class Form extends Component {
  render() {
    return (
      <div className="Form">
      		<form>
      			<label value>Adjective: </label>
      			<input value={this.props.adjective} onChange={this.props.handleAdjectiveChange}></input>
      			<label>Verb: </label>
      			<input value={this.props.verb} onChange={this.props.handleVerbChange}></input>
      			<label>Adverb: </label>
      			<input value={this.props.adverb} onChange={this.props.handleAdverbChange}></input>
      		</form>
      </div>
    );
  }
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
	handleAdverbChange
	};


export default connect(null, MapActionsToProps)(Form);