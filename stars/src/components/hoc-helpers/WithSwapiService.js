import React from 'react';
import { SwapiServiceConsumer } from './../sw-context/sw-context';

export const WithSwapiService = (Wrapped, mapMethodsToProps) => {
  return (props) => (
    <SwapiServiceConsumer>
      {
        (swapi) => {
          const serviceProps = mapMethodsToProps(swapi)
          return (
            <Wrapped {...props} {...serviceProps} />
          )
        }
      }
    </SwapiServiceConsumer>
  )
}