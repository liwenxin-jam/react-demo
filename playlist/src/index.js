import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Main from './main';
import Footer from './footer';

class App extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      data: [
        {
          title: "空白格",
          singer: "蔡健雅",
          selected: false,
          like: false
        },
        {
          title: "空白格22",
          singer: "蔡健雅22",
          selected: false,
          like: false
        },
        {
          title: "空白格33",
          singer: "蔡健雅33",
          selected: false,
          like: false
        }
      ]
    }
  }
  render() {
    return (
      <div id="musicApp">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);