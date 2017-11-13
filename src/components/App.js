import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import Story from './Story';
import { handleMadLibSubmit } from '../actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <Story onSubmit={this.props.handleMadLibSubmit}/>
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
  handleMadLibSubmit
};

export default connect(MapStateToProps, MapActionsToProps)(App);
