import React, { Component } from 'react';
import { Loading } from '../../assets/Loading/Loading';

export const WithData = (View) => {
  return class extends Component {
    state = {
      data: null
    };

    componentDidMount() {
      this.props.getData()
        .then((data) => {
          this.setState({
            data
          });
        });
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <Loading />;
      }

      return <View {...this.props} data={data} />;
    }
  }
}