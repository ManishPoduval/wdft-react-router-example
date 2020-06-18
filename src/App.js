import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Nav from './components/Nav';
import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Users from './components/Users';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/about" component={About}/> */}
          <Route path="/about" render={() => {
              return <About name={'Manish'} />
          }}/>
          <Route path="/contacts" component={Contacts}/>
          <Route exact path="/users" component={Users} />
          <Route path="/users/:id" component={UserDetail} />
      </Switch>
    </div>
  );
}

export default App;
