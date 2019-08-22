const requestMIDIAccess = ( midiMessage, stateChange) => {
  navigator.requestMIDIAccess()
    .then( access => {
      Array.from( access.inputs.values() ).map( e => {
        e.onmidimessage = ( m ) => {
          const [command, key, velocity] = m.data;
          console.log( command, keyMap[ key ], velocity );
          midiMessage && midiMessage();
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

for ( let i=0; i<11; i++ ) {
  keys.forEach( key => keyMap.push( key ));
}

export default requestMIDIAccess;
