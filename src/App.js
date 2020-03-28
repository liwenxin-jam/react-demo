import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from './kReactRouter'
import BrowserRouter from "./k-react-router-dom/BrowserRouter";
import Route from "./k-react-router-dom/Route";
import Link from "./k-react-router-dom/Link";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <div className='App'>
      {/* 增加二级目录 */}
      {/* <Router basename="/front"> */}
      <BrowserRouter>
        {/* Link默认会加最前面的斜杠，建议还是加上保持跟Route的path一致 */}
        <Link to='/home'>首页</Link>
        <Link to='/user'>用户中心</Link>
        <Link to='/children'>children</Link>
        <Link to='/render'>render</Link>
        <Link to='/search/123'>search</Link>

        {/* 最前面的/不能省 */}
        <Route path='/home' component={HomePage} />
        <Route path='/user' component={UserPage} />
        <Route path='/children' children={() => <div>children</div>} />
        <Route path='/render' render={() => <div>render</div>} />
        <Route path='/search/:id' component={SearchComponent} />
      </BrowserRouter>
    </div>
  );
}

function SearchComponent(props) {
  console.log(props);
  const { id } = props.match.params;
  return (
    <div>
      <div>SearchComponet-{id}</div>
    </div>
  );
}

export default App;
