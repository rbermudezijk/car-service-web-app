import React, { ReactNode } from 'react';

import { connect } from 'react-redux';

import CarAPI        from '../../../General/WebServices/CarAPI';
import { Navbar }    from '../../../General/Components/Navbar';
import { AppLayout } from '../../../General/Components/AppLayout';
import CarsGrid      from './CarsGrid';
import { fillAvailableCars } from '../../../General/Store/AvailableCars';

type HomeProps = {
  fillAvailableCars: Function
}

class Home extends React.Component<HomeProps, {}> {

  /**
   * This method fetch all available cars when component is loaded.
   */
  public async componentDidMount(): Promise<any> {
    let cars = await CarAPI.getAllAvailableCars();
    this.props.fillAvailableCars(cars);
  }

  /**
   * Returns the main cars grid to be render in the home page.
   */
  public render(): ReactNode { return (
    <AppLayout>
      <Navbar/>
      <CarsGrid/>
    </AppLayout>
  );}
}

export default connect(
  () => ({}),
  { fillAvailableCars }
) (Home);