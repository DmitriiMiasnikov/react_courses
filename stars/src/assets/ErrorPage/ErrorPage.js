import React, { Component } from 'react';
import './ErrorPage.css'

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
        <div className='title'>Something goes wrong</div>
        <div className='subtitle'>We will fix thix soon!</div>
      </div>
    }

    return this.props.children;
  }
}
