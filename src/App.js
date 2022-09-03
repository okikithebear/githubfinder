
import React, { Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import User from './components/users/User';
import Alert from   './components/layouts/Alert';
import About from './components/pages/About'
import Home from './components/pages/Home'
import NotFound   from './components/pages/NotFound';
import GithubState  from './context/github/Githubstate';
import AlertState  from './context/Alert/Alertstate';
import './App.css';


const App = () => {
     return (
      <GithubState>
        <AlertState>
      <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert />
          <Switch>
            <Route
            exact path='/' 
            component ={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/user/:login' 
             component={User} />
           <Route component={NotFound}/>
          </Switch>
        </div>

      </div>
      </Router>
      </AlertState>
      </GithubState>
    ); 
 

};

export default App;
