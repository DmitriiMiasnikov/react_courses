import React, { useState } from 'react';
import { ItemDetails } from '../ItemDetails/ItemDetails';
import './ItemsPage.css';
import { ItemList } from '../ItemList/ItemList';
import { Row } from '../Row/Row';
import { Record } from './../ItemDetails/ItemDetails'

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
  const itemDetails = (
      <ItemDetails selectedItem={selectedPerson} getData={getData}>
        <Record field='gender' label='Gender'/>
        <Record field='eyeColor' label='Eye Color'/>
        <Record field='birthYear' label='birth Year'/>
      </ItemDetails>
  )
  return (
    <Row left={itemList} right={itemDetails} />
  )
}