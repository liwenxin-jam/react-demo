import React from 'react';

export default class Add extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      title: '',
      singer: ''
    }
  }
  render() {
    // console.log(this.props.router)
    return (
      <header>
        <h2 className="title">
          播放列表
          <a 
            href="javascript:;" 
            className="backLink"
            // onClick={}
          >返回</a>
        </h2>
        <input 
          type="text" 
          placeholder="输入歌曲名称" 
          value={this.state.title} 
          onChange={(e) => {this.setState({title: e.target.value})}} 
        />
        <input 
          type="text" 
          placeholder="输入歌手名称" 
          value={this.state.singer} 
          onChange={(e) => {this.setState({singer: e.target.value})}} 
        />
        <input 
          type="button" 
          value="添加音乐" 
          onClick={() => {
            this.props.add(this.state.title, this.state.singer)
            this.setState({
              title: '',
              singer: ''
            })
            this.props.router.history.push('/');
          }}/>
      </header>
    )
  }
}