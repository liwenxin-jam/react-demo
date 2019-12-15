import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Main from './main';
import Footer from './footer';

class App extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      /*
      {
        title: "空白格",
        singer: "蔡健雅",
        selected: false,
        like: false
      } 
      */
      data: []
    }
  }
  render() {
    return (
      <div id="musicApp">
        <Header />
        <Main data={this.state.data} />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);