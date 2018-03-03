import React, { Component } from 'react';
import logo from './grace-hopper.jpg';
import './second.css';

class Second extends Component {
  render() {
    return (
      <table className="summary-table">
        <thead>
          <tr>
            <th colspan="2">Grace Murray Hopper</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="2">
              <img src={logo} />
              <p>Rear Admiral Grace M. Hopper, 1984</p>
            </td>
          </tr>
          <tr>
            <th>Nickname(s)</th>
            <td>"Amazing Grace"</td>
          </tr>
          <tr>
            <th>Born</th>
            <td>December 9, 1906</td>
          </tr>
          <tr>
            <th>Died</th>
            <td>January 1, 1992 (aged 85)</td>
          </tr>
          <tr>
            <th>Allegiance</th>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png"/>
            United States of America
          </tr>
          <tr>
            <th>Service/branch</th>
            <td>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_the_United_States_Navy.svg/23px-Flag_of_the_United_States_Navy.svg.png"/>
              <a href="https://en.wikipedia.org/wiki/United_States_Navy" target="_blank">United States Navy</a>
            </td>
          </tr>
          <tr>
            <th>Years of service</th>
            <td>1943–1966, 1967–1971, 1972–1986</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Second;