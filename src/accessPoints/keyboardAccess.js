import maps from '../keyMaps';

const requestKeyboardAccess = ( keyDown, keyUp ) => {
    document.addEventListener( 'keydown' , handleKeyDown.bind( null, keyDown ), false );
    document.addEventListener( 'keyup' , handleKeyUp.bind( null, keyUp ), false );
}

const removeKeyboardAccess = () => {
    document.removeEventListener( 'keydown' , handleKeyDown, false );
    document.removeEventListener( 'keyup' , handleKeyUp, false );
}

const handleKeyDown = ( keyDown, e ) => {
    keyDown( e.keyCode, maps.keyBoardMap[ e.keyCode ] );
}

const handleKeyUp = ( keyUp, e ) => {
    keyUp( e.keyCode, maps.keyBoardMap[ e.keyCode ] );
}


export default { request: requestKeyboardAccess, remove: removeKeyboardAccess };