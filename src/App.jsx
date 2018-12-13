import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import CategoriesContainer from './containers/CategoriesContainer/CategoriesContainer';
import './App.css';
import Auth from './containers/Auth/Auth';
import {
  Mask, MDBView, MDBMask,
} from 'mdbreact';
import FeedbackContainer from './containers/FeedbackContainer/FeedbackContainer';
import * as actions from './store/actions';
import { connect } from 'react-redux';
import Centrifuge from './containers/Centrifugo/Centrigugo';


const Intro = () => (
  <MDBView hover zoom>
    <img
      src="https://sensorika.uz/uploads/board/post/2017-02/thumbs/1486367749_photodune-645103-accounting-business-people-calculating-budget-in-meeting-m.jpg"
      className="img-fluid w-100 h-100"
      alt=""
    />
    <MDBMask className="flex-center" overlay="red-slight">
      <p className="white-text">Распределяй задачи между работниками эффективно, делай мероприятия более организованными!</p>
    </MDBMask>
  </MDBView>
);

const About = () => (
  <Mask overlay="black-strong" style={{ flexDirection: 'column', height: '100vh' }} className="flex-center  text-white text-center">
    <h2>Компания ...</h2>
    <h5>Представляет важную информацию</h5>
    <br />
    <p>Супер важная информация о компании </p>
  </Mask>
);


class App extends Component {
  componentDidMount() {
    this.props.onTryAutoLogin();
  }

  render() {
    let routes = (
      <Layout>
        <Switch>
          <Route path="/login" exact component={Auth} />
          <Route path="/" exact component={Intro} />
          <Redirect to="/login" />
        </Switch>
      </Layout>
    );
    if (this.props.isAuthed) {
      routes = (
        <Layout>
          <Switch>
            <Route path="/category" component={CategoriesContainer} />
            <Route path="/about" exact component={About} />
            <Route path="/feedback" exact component={FeedbackContainer} />
            <Redirect to="/about" />
          </Switch>
        </Layout>
      );
    }
    return (
        <div>
            <Centrifuge />
            <Router>
                {routes}
            </Router>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthed: state.auth.token !== null,
});

const initMapDispatchToProps = dispatch => ({
  onTryAutoLogin: () => dispatch(actions.authCheckState()),
});

export default connect(mapStateToProps, initMapDispatchToProps)(App);
