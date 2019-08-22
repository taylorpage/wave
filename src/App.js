import React from 'react';
import './App.css';
import requestMIDIAccess from './midiAccess';

function App() {
  requestMIDIAccess();
  return (
    <div className="App">
    </div>
  );
}

export default App;
