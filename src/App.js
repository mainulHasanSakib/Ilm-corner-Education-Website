
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Notfound from './Components/Notfound/Notfound';
import Courses from './Components/Footer/Courses/Courses';
import Join from './Components/Join/Join';


function App() {
  return (
    <div className="App">
     <Router>
      <div>
       
      <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/courses">
            <Courses />
          </Route>
          <Route exact path="/join">
            <Join />
          </Route>
          
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="*">
            <Notfound/>
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
    </div>
  );
}

export default App;
