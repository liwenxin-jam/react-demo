import React from 'react';

export default class Item extends React.Component {
  render() {
    return (
      <tr className="selected">
        <td>
          <input type="checkbox" checked name="" />
        </td>
        <td>全世界失眠</td>
        <td>陈奕迅</td>
        <td>
          <input type="checkbox" name="" />
        </td>
        <td>
          <a>X</a>
        </td>
      </tr>
    )
  }
}