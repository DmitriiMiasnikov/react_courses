import React, { useState } from 'react';
import { StarshipList } from './../sw-components/item-lists';
import StarshipDetails from './../sw-components/StarshipDetails';
import { Row } from './../Row/Row';

export const StarshipsPage = () => {
  const [itemId, setItemId] = useState(null)
  const onItemSelected = (itemId) => {
    setItemId(itemId)
  }

  return (
    <Row left={<StarshipList onItemSelected={onItemSelected} />} right={<StarshipDetails itemId={itemId} />} />
  )
}