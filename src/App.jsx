import React from 'react';
import './App.css';
import Home from './contents/Home'
import {BrowserRouter, Route} from 'react-router-dom'
const App = ()=>{
  return(
  <BrowserRouter>
  <Route exact path="/" render={()=>(<Home/>)} />
  {/* <Route exact path="/about" render={()=>(<Home/>)} />
  <Route exact path="/contact" render={()=>(<Home/>)} />
  <Route exact path="/skills" render={()=>(<Home/>)} /> */}
  </BrowserRouter>)
  
}

export default App;
