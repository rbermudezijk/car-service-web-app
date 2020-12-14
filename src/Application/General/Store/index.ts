import { createStore, combineReducers } from 'redux';

import { reducer as availableCars } from './AvailableCars';
import { reducer as drawerMenu } from './DrawerMenu';

/**
 * Create a store managment to application, charge the reducers and 
 * store configuration with Redux.
 */
export default createStore(
  combineReducers({
    availableCars,
    drawerMenu
  })
);