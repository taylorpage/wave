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

    for ( let i=1; i<=17; i++ ) {
      this.whiteKeys.push( i );
    }
  }

  render() {
    return (
      <div className="keyboard">
        <table className="blackKeys">
          <tr>
            {
              this.whiteKeys.map( ( key, i ) => {
                return (
                  <th
                    className={ `key black ${ this.hiddenKeys.indexOf( i ) > -1 && 'hidden' } ` }
                  >
                  </th>
                );
              })
            }
          </tr>
        </table>
        <table className="whiteKeys">
          <tr>
            { this.whiteKeys.map( key => <th className="key white"></th>) }
          </tr>
        </table>
      </div>
    );
  }
}

export default Keyboard;
