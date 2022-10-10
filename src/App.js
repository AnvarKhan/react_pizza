import React from "react";
import axios from "axios";
import { connect } from "react-redux";
// import store from "./redux/store";

import './scss/app.scss';

import { Header } from './components';
import { Home, Card } from './pages'
import { Routes, Route } from 'react-router-dom';
import setPizzas from "./redux/actions/pizzas";

// function App() {

//   React.useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then( ({ data }) => {
//       setPizzas(data.pizzas);
//     });
//   }, []);

//   return ();
// }

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then( ({ data }) => {
      this.props.setPizzas(data.pizzas);
    });
  }

render() {
  console.log(this.props.items);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path='/card' element={< Card />}/>  
          <Route exact path='/' element={< Home items={this.props.items} />}/>  
        </Routes>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters,
  }
};

const mapDispatchToProps = {
  setPizzas,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
