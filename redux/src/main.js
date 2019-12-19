import React from 'react';
import Item from './item';
import { connect } from 'react-redux';

class Main extends React.Component {
  render() {
    let data = this.props.data;
    // console.log(this.props)

    return (
      <table className="main" style={{display: data.length ? 'table' : 'none'}}>
        <thead>
          <tr>
            <th>
              <input 
                type="checkbox" 
                id="checkAll" 
                checked={this.props.isCheckAll}
                onChange={(e) => {
                  this.props.dispatch({
                    type: 'CHECK_ALL',
                    checked: e.target.checked
                  })
                }}
              />
              <label htmlFor="checkAll">全选</label>
            </th>
            <th>歌曲</th>
            <th>歌手</th>
            <th>收藏</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val) => {
            return <Item 
              key={val.id} 
              data={val} 
            />
          })}
        </tbody>
      </table>
    )
  }
}

/* 
* 1.根据pathname 判断当前应该显示什么列表
* 2.isCheckAll 判断当前是否是全选状态
*/
export default connect((state, props) => {
  let isCheckAll = (function(){
    for(var i=0; i<state.data.length; i++) {
      if(!state.data[i].selected) {
        return false;
      }
      return true;
    }
  })();
  let pathname = props.location.pathname;
  if(pathname === '/') {
    return Object.assign({}, state, { isCheckAll });
  }
  if(pathname === '/like') {
    let data = {};
    data.data = state.data.filter((item) => item.like);
    return Object.assign({}, data, { isCheckAll });
  }
})(Main);