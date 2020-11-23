import React, { useState } from 'react';
import { PersonList } from './../sw-components/item-lists';
import PersonDetails from './../sw-components/PersonDetails';
import { Row } from './../Row/Row';

export const PeoplePage = () => {
  const [itemId, setItemId] = useState(null)
  const onItemSelected = (itemId) => {
    setItemId(itemId)
  }

  return (
    <Row left={<PersonList onItemSelected={onItemSelected} />} right={<PersonDetails itemId={itemId} />} />
  )
}