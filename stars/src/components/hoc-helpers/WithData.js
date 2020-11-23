import React, { Component } from 'react';
import { Error } from '../../assets/Error/Error';
import { Loading } from '../../assets/Loading/Loading';

export const WithData = (View) => {
  return class extends Component {
    state = {
      data: null,
      error: false,
      loading: true,
    };
    componentDidMount() {
      this.props.getData()
        .then((data) => {
          this.setState({
            data,
            loading: false
          });
        }).catch(() => {
          this.setState({
            loading: false,
            error: true
          })
        })
    }

    render() {
      const { data, loading, error } = this.state;

      if (loading) {
        return <Loading />;
      }
      if (error) {
        return <Error />;
      }

      return <View {...this.props} data={data} />;
    }
  }
}