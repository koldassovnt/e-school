import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';

// importing needed Components
import Login from './Components/Login';
import Home from './Components/Home';
import CustomNavBar from './Components/CustomNavBar';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOnline: sessionStorage.getItem('user')? true : false, // if session named 'user' exist we are ONLINE else OFFLINE
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <CustomNavBar isLogged = {this.state.isOnline}/>
          <Switch>
            <Container className="mt-4">
              <Route path="/home">
                <Home isLogged = {this.state.isOnline}/>
              </Route>
              <Route path="/" exact={true} component={Login}/>
            </Container>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
