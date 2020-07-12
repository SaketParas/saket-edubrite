import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Add from './Components/Add';
import Home from './Components/Home';
import Edit from './Components/Edit';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" render={props => <Add {...props} />} />
      <Route path="/Home" render={props => <Home {...props} />} />
      <Route  path="/Edit/:id" render={props=> < Edit {...props}/>} />
    </BrowserRouter>
  );
}

export default App;
