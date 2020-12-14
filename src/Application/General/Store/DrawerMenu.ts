
/**
 * Defines the default state to drawer menu.
 * 
 * @type Object
 */
const defaultState = {
  isOpen: false
};

/**
 * The reducer to change the state of drawer.
 */
export const reducer = (
  mapStatus=defaultState, type: string
) => 
   type==='TOGGLE_MENU'? {isOpen: !mapStatus.isOpen}
  :type==='HIDDEN_MENU'? {isOpen: false}
  :type==='SHOW_MENU'  ? {isOpen: true}
  :mapStatus;

/**
 * Mutation to toggle the state of drawer menu.
 */
export const toggleMenu = () => ({type: 'TOGGLE_MENU'});

/**
 * Mutation to hide the drawer menu.
 */
export const hiddenMenu = () => ({type: 'HIDDEN_MENU'});

/**
 * Mutation to show the drawe menu.
 */
export const showMenu = () => ({type: 'SHOW_MENU'});