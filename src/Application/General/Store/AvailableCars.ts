import { Car } from '../Models/Car';

export type AvailableCarsState = {
  availableCars: Array<Car>
};

/**
 * Defines the first state to availableCars section.
 * 
 * @type Object
 */
const defaultState = {
  availableCars: new Array<Car>()
};

/**
 * Description of reducer data source.
 */
type Payload = {
  type: string,
  data: Array<Car>
}

/**
 * The reducer to available cars state section.
 */
export function reducer (
  mapStatus: Array<Car> = new Array<Car>(), 
  {type, data}: Payload
) : Array<Car> {
  return type==='FILL_AVAILABLE_CARS' ? data
  :mapStatus;
}

/**
 * Replace the latest list of available cars loaded by rental cars application.
 * 
 * @param availableCars
 */
export const fillAvailableCars = (availableCars: Array<Car>) => ({
  type: 'FILL_AVAILABLE_CARS',
  data: availableCars
});