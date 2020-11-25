import React from 'react';
import { ItemList } from './../ItemList/ItemList';
import { WithData } from './../hoc-helpers/WithData';
import { WithSwapiService } from './../hoc-helpers/WithSwapiService'


const withChildFunction = (fn) => (Wrapped) => {
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

const PersonList = WithSwapiService(mapPersonMethodsToProps)(
  WithData(
    withChildFunction(renderName)(
      ItemList)))
const PlanetList = WithSwapiService(mapPlanetMethodsToProps)(
  WithData(
    withChildFunction(renderName)(
      ItemList)))
const StarshipList = WithSwapiService(mapStarshipMethodsToProps)(
  WithData(
    withChildFunction(renderModelAndName)(
      ItemList)))

export {
  PersonList,
  PlanetList,
  StarshipList
}