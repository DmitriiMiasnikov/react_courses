import React, { useState } from 'react';
import { PlanetList } from './../sw-components/item-lists';
import PlanetDetails from './../sw-components/PlanetDetails';
import { Row } from './../Row/Row';

export const PlanetsPage = () => {
  const [itemId, setItemId] = useState(null)
  const onItemSelected = (itemId) => {
    setItemId(itemId)
  }

  return (
    <Row left={<PlanetList onItemSelected={onItemSelected} />} right={<PlanetDetails itemId={itemId} />} />
  )
}