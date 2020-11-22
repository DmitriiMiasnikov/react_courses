import React from 'react';
import './ItemsPage.css';
import { Row } from '../Row/Row';

export const ItemsPage = ({ left, right }) => {
  return (
    <Row left={left} right={right} />
  )
}