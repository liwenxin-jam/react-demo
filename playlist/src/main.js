import React from 'react';

export default class Main extends React.Component {
  render() {
    return (
      <table className="main">
        <thead>
          <tr>
            <th>
              <input type="checkbox" id="checkAll" />
              <label htmlFor="checkAll">全选</label>
            </th>
            <th>歌曲</th>
            <th>歌手</th>
            <th>收藏</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody>
          <tr className="like">
            <td>
              <input type="checkbox" name="" />
            </td>
            <td>空白格</td>
            <td>蔡健雅</td>
            <td>
              <input type="checkbox" checked name="" />
            </td>
            <td>
              <a>X</a>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" name="" />
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
        </tbody>
      </table>
    )
  }
}