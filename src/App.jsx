import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import CategoriesContainer from './containers/CategoriesContainer/CategoriesContainer';
import {BrowserRouter as Router, Route} from "react-router-dom";



class App extends Component {
  render() {
    return (
        <Router>
            <Layout>
                <Route path='/category' component={CategoriesContainer} />
            </Layout>
        </Router>
    );
  }
}

export default App;

