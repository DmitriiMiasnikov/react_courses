import React, { Component } from 'react';
import { Loading } from '../../assets/Loading/Loading';

export const WithData = (View, getData) => {
  return class extends Component {
    state = {
      data: null
    };

    componentDidMount() {
      getData()
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