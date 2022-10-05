import React from "react";

import './scss/app.scss';

import { Header } from './components';
import { Home, Card } from './pages'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (<div className="wrapper">
  <Header />
  <div className="content">
    <Routes>
      <Route exact path='/' element={< Home />}/>  
      <Route exact path='/card' element={< Card />}/>  
    </Routes>
  </div>
</div>);
}

export default App;
