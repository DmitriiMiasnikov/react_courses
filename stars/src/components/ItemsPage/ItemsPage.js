import React, { useState } from 'react';
import { ItemDetails } from '../ItemDetails/ItemDetails';
import './ItemsPage.css';
import { ItemList } from '../ItemList/ItemList';
import { Row } from '../Row/Row'

export const ItemsPage = ({ getData, type }) => {
  const [selectedPerson, setSelectedPerson] = useState(null)
  const onPersonSelected = (selectedPerson) => {
    setSelectedPerson(selectedPerson)
  }
  const itemList = (
    <ItemList getData={getData} onPersonSelected={onPersonSelected} >
        {(item) => `${item.name} (${item.gender}, ${item.birthYear})`}
      </ItemList>
  )
  const itemDetails = (
      <ItemDetails selectedItem={selectedPerson} getData={getData}/>
  )
  return (
    <Row left={itemList} right={itemDetails} />
  )
}