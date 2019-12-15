import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h2 className="title">播放列表</h2>
        <input type="text" placeholder="输入歌曲名称" />
        <input type="text" placeholder="输入歌手名称" />
        <input type="button" value="添加音乐" />
      </header>
    );
  }
}