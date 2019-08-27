const keyPresses = ( state = [], action ) => {
  switch ( action.type ) {
    case 'KEY_DOWN':
      return [
        ...state,
        {
          id: action.id,
          key: action.key,
        }
      ]
    default:
      return state
  }
};
  
  export default keyPresses;