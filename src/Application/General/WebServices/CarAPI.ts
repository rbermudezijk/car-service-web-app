import { Car } from "../Models/Car";

const RENTAL_CAR_API_URL: string = process.env.REACT_APP_RENTAL_CAR_API_URL || '';

class CarAPI 
{
  /**
   * Retrieve all available cars from REST API.
   * 
   * @return Promise<Array<Car>> Available cars
   */
  public getAllAvailableCars(): Promise<Array<Car>> {
    return fetch(`${RENTAL_CAR_API_URL}/get-available-cars.json`)
    .then(res => res.json());
  }
}

export default new CarAPI();