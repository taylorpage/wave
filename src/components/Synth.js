import React from 'react';
import requestMIDIAccess from '../midiAccess';

class Synth extends React.Component {
  componentDidMount = () => {
    this.AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioContext = new AudioContext();
    this.activeTones = {};
    this.createTone();
    requestMIDIAccess( this.playNote, this.stopNote );
  }

  createTone = () => {
    this.Tone = ( context => {
      function Tone(frequency){
        this.frequency = frequency;
        this.oscillators = [];
        this.context = context;
      };
      return Tone;
    })( this.audioContext );
    this.createTonePrototypes();
  }

  createTonePrototypes = () => {
    this.Tone.prototype.start = function () {
      var oscillator = this.context.createOscillator();
      oscillator.frequency.value = this.frequency;
      oscillator.connect( this.context.destination );
      oscillator.start();
      this.oscillators.push( oscillator );
    };

    this.Tone.prototype.stop = function () {
      this.oscillators.forEach(( oscillator, _ ) => {
        oscillator.stop();
      });
    };
  }

  playNote = ( key, freq ) => {
    var tone = new this.Tone( freq );
    this.activeTones[ key ] = tone;
    tone.start();
  }

  stopNote = ( key ) => {
    this.activeTones[ key ].stop();
    delete this.activeTones[ key ];
  }

  render() {
    return <h1>Synth</h1>;
  }
}

export default Synth;
