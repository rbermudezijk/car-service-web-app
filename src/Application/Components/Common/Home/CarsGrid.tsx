import React from 'react';

import { Car }         from '../../../General/Models/Car';
import { CarItemCard } from './CarItemCard';
import './CarsGrid.scss';

/**
 * CarsGrid component properties.
 */
type CarsGridProps = {
  cars: Array<Car>
};

/**
 * This class represents the main content to show the available cars 
 * to rental process.
 * 
 * @param {cars} param Object with array of available cars.
 */
export const CarsGrid = ({cars}: CarsGridProps) => 
  <div className="cars-grid">
    {cars.map( carItem => 
      <CarItemCard key={carItem?.carId} carItem={carItem}/>
    )}
  </div>;