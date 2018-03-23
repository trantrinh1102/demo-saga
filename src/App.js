import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
// import Login from './login';
import Signup from './signup';
// import Widgets  from './widgets';
import Header from './components/Header';
import Top from './components/Top';
import TopNested from './components/TopNested';

const App = props => (
  <div className="App">
    <Header />
    <section className="App-body">
      <Routing />
    </section>
  </div>
);

const Routing = () => (
  <Switch>
    <Route path='/' component={Top} >
      <Route path="nested" component={TopNested} /> 
    </Route>
    {/* <Route path="/login" component={Login} /> */}
    <Route path="/signup" component={Signup} />
    {/* <Route path="/widgets" components={Widgets} /> */}
    <Redirect to="/" />
  </Switch>
);

App.propTypes = {
}
export default App;
