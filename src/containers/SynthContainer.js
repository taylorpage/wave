import { connect } from 'react-redux';
import Synth from '../components/Synth/Synth';
import { keyDown } from '../actions';

const getKeypress = ( keyPress, filter ) => {
  console.log( keyPress );
  switch ( filter ) {
    case 'KEY_DOWN':
      return keyPress;
    default:
      return 'error';
  }
}
  
const mapStateToProps = state => {
  console.log( state );
  return ({
  keyPress: getKeypress( state.keyPresses )
}) };

const mapDispatchToProps = dispatch => ({
  keyDown: id => dispatch( keyDown( id ))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( Synth );