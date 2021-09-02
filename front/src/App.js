import React, { useState } from "react";
import './App.css';
import Nav from "./Nav";
import About from "./About";
// import Shop from "./Shop";
import SignIn from "./UserAuthentication/SignIn";
import SignUp from "./UserAuthentication/SignUp";
import DashboardSkel from "./StudentDashboardFiles/DashboardSkel";
import ProjectList from "./StudentDashboardFiles/ProjectList";
import Project from "./StudentDashboardFiles/Projects/Project";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
// import Login from "./UserAuthentication/Login";
// import {LogInProvider} from './LoginContext';



function App() {

  const [isLoggedIn,setLogin]=useState(false);


  return (
    // (!isLoggedIn) ? <SignIn setLogin={setLogin} /> :
    <div>
    <Router>
      <div >
        <Switch>
        <Route path='/' exact component={SignIn} />
        <Route path='/SignUp' exact component={SignUp} />
        <Route path='/home' exact component={Home} />
        <Route path='/dashboard'  exact component={()=>(<DashboardSkel name="dashboard"/>)} />
        <Route path='/projects' exact component={()=>(<DashboardSkel name="projectlist"/>)} />
        <Route path='/projects/:projectId' exact component={()=>(<DashboardSkel name="project"/>)} />
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
