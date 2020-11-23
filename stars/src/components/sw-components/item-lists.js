import React from 'react';
import { ItemList } from './../ItemList/ItemList';
import { WithData } from './../hoc-helpers/WithData';
import { WithSwapiService } from './../hoc-helpers/WithSwapiService'


const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  };
};

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapi) => {
  return {
    getData: swapi.getAllPeople
  }
}
const mapPlanetMethodsToProps = (swapi) => {
  return {
    getData: swapi.getAllPlanets
  }
}
const mapStarshipMethodsToProps = (swapi) => {
  return {
    getData: swapi.getAllStarships
  }
}

const PersonList = WithSwapiService(
  WithData(withChildFunction(ItemList, renderName)),
  mapPersonMethodsToProps
)
const PlanetList = WithSwapiService(
  WithData(withChildFunction(ItemList, renderName)),
  mapPlanetMethodsToProps
)
const StarshipList = WithSwapiService(
  WithData(withChildFunction(ItemList, renderModelAndName)),
  mapStarshipMethodsToProps
)

export {
  PersonList,
  PlanetList,
  StarshipList
}