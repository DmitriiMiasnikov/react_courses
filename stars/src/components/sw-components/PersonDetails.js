import React from 'react';
import { ItemDetails, Record } from '../ItemDetails/ItemDetails';
import { WithSwapiService } from './../hoc-helpers/WithSwapiService';

const PersonDetails = (props) => {
  return (
    <ItemDetails
      {...props}
      imageURL='characters' >

      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapi) => {
  return {
    getData: swapi.getPerson
  }
}

export default WithSwapiService(PersonDetails, mapMethodsToProps)