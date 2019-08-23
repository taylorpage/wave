import maps from '../keyMaps';

const requestMIDIAccess = ( midiMessageDown, midiMessageUp, stateChange) => {
  navigator.requestMIDIAccess().then( access => {
    Array.from( access.inputs.values() ).map( e => {
      e.onmidimessage = ( m ) => {
        const [command, key, velocity] = m.data;
        if ( command < 140 ) {
          midiMessageUp && midiMessageUp( key, maps.freqMap[ key ] );
        } else {
          midiMessageDown && midiMessageDown( key, maps.freqMap[ key ] );
        }
      }
      return true;
    });
    access.onstatechange = ( e ) => {
      console.log( e.port.name, e.port.manufacturer, e.port.state );
      stateChange && stateChange();
    };
  });
}

const keyMap = [];
const keys = [ 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', ]

for ( let i=-1; i<10; i++ ) {
  keys.forEach( key => keyMap.push( key  + ' ' + i ) );
}

export default requestMIDIAccess;
