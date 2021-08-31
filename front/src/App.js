import React, { useState } from "react";
import './App.css';
import Nav from "./Nav";
import About from "./About";
// import Shop from "./Shop";
import Auth from "./UserAuthentication/Auth";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
// import Login from "./UserAuthentication/Login";
import {LogInProvider} from './LoginContext';

function App() {

  const [isLoggedIn,setLogin]=useState(false);


  return (
    (!isLoggedIn) ? <Auth setLog={setLogin} /> :
    <div>
    <Router>
      <div >
        <Nav />
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        {/* <Route path='/shop' component={Shop} /> */}
        </Switch>
      </div>
    </Router>
    </div>
  );
}

const Home =()=>(
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
