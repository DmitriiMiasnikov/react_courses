import React, { useState } from 'react';
import { PersonDetails } from '../PersonDetails/PersonDetails';
import './PeoplePage.css';
import { ItemList } from './../ItemList/ItemList';
import ErrorBoundry from './../../assets/ErrorPage/ErrorPage';
import { swapi } from './../../Servises/swapiServises';
import { Row } from './../Row/Row'

export const PeoplePage = () => {
  const [selectedPerson, setSelectedPerson] = useState(null)
  const onPersonSelected = (selectedPerson) => {
    setSelectedPerson(selectedPerson)
  }
  const itemList = (
    <ItemList getData={swapi.getAllPeople} onPersonSelected={onPersonSelected} 
      renderItem={(item) => `${item.name} (${item.gender}, ${item.birthYear})`} />
  )
  const personDetails = (
    <ErrorBoundry>
      <PersonDetails selectedItem={selectedPerson} />
    </ErrorBoundry>
  )
  return (
    <Row left={itemList} right={personDetails} />
  )
}