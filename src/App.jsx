import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import CategoriesContainer from './containers/CategoriesContainer/CategoriesContainer';
import FixedNavbar from './components/Header/Header';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Layout>
            <Route path="/category" component={CategoriesContainer} />
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
