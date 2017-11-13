import React, { Component } from 'react';
import { connect } from 'react-redux';


class Story extends Component {
  render() {
    return (
      <div className="Story">
{/*      <button onClick={this.props.onSubmit} >Show Story</button>
*/}      One {this.props.adjective} day, my trusty dog {this.props.verb} up to find a cat {this.props.adverb}.
      </div>
    );
  }
}

function MapStateToProps(state) {
	return{
		adjective: state.adjective,
		verb: state.verb,
		adverb: state.adverb
	};
}

export default connect(MapStateToProps)(Story);