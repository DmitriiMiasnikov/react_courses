import React, { useState } from 'react';
import { PersonDetails } from '../PersonDetails/PersonDetails';
import './ItemsPage.css';
import { ItemList } from '../ItemList/ItemList';
import { Row } from '../Row/Row'

export const ItemsPage = ({ getData }) => {
  const [selectedPerson, setSelectedPerson] = useState(null)
  const onPersonSelected = (selectedPerson) => {
    setSelectedPerson(selectedPerson)
  }
  const itemList = (
    <ItemList getData={getData} onPersonSelected={onPersonSelected} >
        {(item) => `${item.name} (${item.gender}, ${item.birthYear})`}
      </ItemList>
  )
  const personDetails = (
      <PersonDetails selectedItem={selectedPerson} getData={getData}/>
  )
  return (
    <Row left={itemList} right={personDetails} />
  )
}