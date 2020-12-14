import React, { ReactNode } from 'react';

import CarAPI        from '../../../General/WebServices/CarAPI';
import { Navbar }    from '../../../General/Components/Navbar';
import { AppLayout } from '../../../General/Components/AppLayout';
import { Car }   from '../../../General/Models/Car';
import { CarsGrid } from './CarsGrid';

type HomeState = {
  availableCars: Array<Car>
}

export default class Home extends React.Component<{}, HomeState> {
  
  /**
   * Initialize the required state.
   */
  constructor() {
    super({});
    this.state = {
      availableCars: new Array<Car>()
    };
  }

  /**
   * This method fetch all available cars when component is loaded.
   */
  public async componentDidMount(): Promise<any> {
    let availableCars = await CarAPI.getAllAvailableCars();
    this.setState({ availableCars });
  }

  /**
   * Returns the main cars grid to be render in the home page.
   */
  public render(): ReactNode { return (
    <AppLayout>
      <Navbar/>
      <CarsGrid cars={this.state.availableCars}/>
    </AppLayout>
  );}
}