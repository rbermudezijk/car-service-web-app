import React from 'react';

import { connect } from 'react-redux';

import { CarItemCard } from './CarItemCard';
import { AvailableCarsState } from '../../../General/Store/AvailableCars';
import './CarsGrid.scss';

/**
 * This class represents the main content to show the available cars 
 * to rental process.
 * 
 * @param {cars} param Object with array of available cars.
 */
const CarsGrid = ({availableCars}: AvailableCarsState) => {
  console.log(availableCars)
  return <div className="cars-grid">
    {availableCars.map( carItem => 
      <CarItemCard key={carItem?.carId} carItem={carItem}/>
    )}
  </div>
};

export default connect(
  ({availableCars}: AvailableCarsState)=> ({availableCars}),
  {}
) (CarsGrid);