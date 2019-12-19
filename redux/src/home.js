import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Redirect } from 'react-router-dom';
import Main from './main';
import Footer from './footer';

class Home extends React.Component {
  render() {
    let props = this.props;
    let data = props.data;
    let pathname = props.router.location.pathname;
    // console.log(this.props);
    // console.log(pathname)

    return (
      <div>
        <header>
          <h2 className="title">
            {pathname === '/' ? '播放' : '收藏'}列表
            <Link to="/add" className="addLink">添加歌曲</Link>
          </h2>
        </header>
        <Route path="/" exact component={Main} />
        <Route path="/like" render={(e) => {
          if(data.filter((item) => item.like).length === 0) {
            return <Redirect to="/" />
          }
          return <Main location={e.location} />
        }} />
        <Footer 
          pathName={pathname}
        />
      </div>
    )
  }
}

export default connect((state) => state)(Home);