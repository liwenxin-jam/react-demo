import React from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from './kReactRouter'
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <div className="App">
      <Router>
        {/* Link默认会加最前面的斜杠，建议还是加上保持跟Route的path一致 */}
        <Link to="/home">首页</Link>
        <Link to="/user">用户中心</Link>

        {/* 最前面的/不能省 */}
        <Route path="/home" component={HomePage}></Route>
        <Route path="/user" component={UserPage}></Route>
      </Router>
    </div>
  )
}

export default App
