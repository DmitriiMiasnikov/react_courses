import React from 'react';
import { ItemList } from './../ItemList/ItemList';
import { WithData } from './../hoc-helpers/WithData';
import { WithSwapiService } from './../hoc-helpers/WithSwapiService';
import { WithChildFunction } from './../hoc-helpers/WithChildFunction';
import { compose } from './../hoc-helpers/compose'





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
const PersonList = compose(
  WithSwapiService(mapPersonMethodsToProps),
  WithData,
  WithChildFunction(renderName)
)(ItemList)
const PlanetList = compose(
  WithSwapiService(mapPlanetMethodsToProps),
  WithData,
  WithChildFunction(renderName)
)(ItemList)
const StarshipList = compose(
  WithSwapiService(mapStarshipMethodsToProps),
  WithData,
  WithChildFunction(renderModelAndName)
)(ItemList)

export {
  PersonList,
  PlanetList,
  StarshipList
}