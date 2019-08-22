const requestMIDIAccess = () => {
  navigator.requestMIDIAccess()
    .then( access => {
      access.onstatechange = ( e ) => {
        console.log( e.port.name, e.port.manufacturer, e.port.state );
      };
    });
}

export default requestMIDIAccess;
