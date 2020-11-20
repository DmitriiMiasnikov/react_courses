import React from 'react';
import { ItemList } from './../ItemList/ItemList';
import { swapi } from './../../Servises/swapiServises';
import { WithData } from './../hoc-helpers/WithData';

const {
  getAllPeople,
  getAllStarships,
  getAllPlanets
} = swapi;

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
const renderModelAndName = ({ model, name}) => <span>{name} ({model})</span>;

const PersonList = WithData(withChildFunction(ItemList, renderName), getAllPeople)
const PlanetList = WithData(withChildFunction(ItemList, renderName), getAllPlanets)
const StarshipList = WithData(withChildFunction(ItemList, renderModelAndName), getAllStarships)

export {
  PersonList,
  PlanetList,
  StarshipList
}