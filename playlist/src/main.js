import React from 'react';
import Item from './item';

export default class Main extends React.Component {
  render() {
    let data = this.props.data;
    
    return (
      <table className="main" style={{display: data.length ? 'table' : 'none'}}>
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
          {data.map((val, index) => {
            return <Item key={index} data={val} />
          })}
        </tbody>
      </table>
    )
  }
}