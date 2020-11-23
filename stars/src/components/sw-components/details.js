import React from 'react';
import { ItemDetails, Record } from './../ItemDetails/ItemDetails';
import { SwapiServiceConsumer } from './../sw-context/sw-context'


const PersonDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPerson }) => {
          return (
            <ItemDetails
              getData={getPerson} itemId={itemId}
              imageURL='characters' >

              <Record field="gender" label="Gender" />
              <Record field="eyeColor" label="Eye Color" />
            </ItemDetails>
          )
        }
      }

    </SwapiServiceConsumer>
  );
};

const PlanetDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPlanet }) => {
          return (
            <ItemDetails
              getData={getPlanet} itemId={itemId}
              imageURL='planets' >

              <Record field="population" label="Population" />
              <Record field="rotationPeriod" label="Rotation Period" />
              <Record field="diameter" label="Diameter" />
            </ItemDetails>
          )
        }
      }
    </SwapiServiceConsumer>
  );
};

const StarshipDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getStarship }) => {
          return (
            <ItemDetails
              getData={getStarship} itemId={itemId}
              imageURL='starship' >

              <Record field="model" label="Model" />
              <Record field="length" label="Length" />
              <Record field="costInCredits" label="Cost" />
            </ItemDetails>
          )
        }
      }
    </SwapiServiceConsumer>
  );
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};