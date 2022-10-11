import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import './scss/app.scss';

import { Header } from './components';
import { Home, Card } from './pages'
import { Routes, Route } from 'react-router-dom';
import { setPizzas } from "./redux/actions/pizzas";

function App(){
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then (( {data} ) => {
      dispatch(setPizzas(data));
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path='/' element={< Home />}/>  
          <Route exact path='/card' element={< Card />}/>  
        </Routes>
      </div>
    </div>
  )
};

export default App;