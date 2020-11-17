import React, { Component } from 'react';

export default class ErrorBoundry extends Component {

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {

    if (this.state.hasError) {
      return <div className='wrapper'>
        <span className='title'>Something goes wrong</span>
        <span className='subtitle'>We will fix thix soon!</span>
      </div>
    }

    return this.props.children;
  }
}
