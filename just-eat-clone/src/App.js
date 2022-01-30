import React, { useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Location from './Location';
//import Table from './Table';
import Landing from './Landing';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import Preferences from './Preferences/Preferences';
import useToken from './useToken';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  //const [token, setToken] = useState();
 const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
   <div className="wrapper">
	 
      <BrowserRouter>
        <Switch>
          <Route path="/Landing">
            <Landing/>
          </Route>
          <Route path="/Location">
            <Location/>
          </Route>
        </Switch>
   </BrowserRouter>
    </div>
  );
}

export default App;
