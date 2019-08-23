import React from 'react';
import './Keyboard.css';

class Keyboard extends React.Component {

  constructor() {
    super();
    this.whiteKeys = [];
    this.hiddenKeys = [ 2, 6, 9, 13, 16, 17 ];
    this.createWhiteKeys();
  }

  createWhiteKeys = () => {

    for ( let i=1; i<=14; i++ ) {
      this.whiteKeys.push( i );
    }
  }

  render() {
    return (
      <div className="keyboard">
        <table className="blackKeys keys">
          <tbody>
            <tr>
              {
                this.whiteKeys.map( ( key, i ) => {
                  return (
                    <th key={ `black-${ i }` }>
                      <div
                        className={ `key black ${ this.hiddenKeys.indexOf( i ) > -1 && 'hidden' } ` }
                      ></div>
                    </th>
                  );
                })
              }
            </tr>
          </tbody>
        </table>
        <table className="whiteKeys keys">
          <tbody>
            <tr>
              {
                this.whiteKeys.map( ( key, i ) => {
                  return (
                    <th key={ `white-${ i }` }>
                      <div className="key white"></div>
                    </th>
                  );
                })
              }
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Keyboard;
