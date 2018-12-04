import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import InputForm  from '../../components/Form/input/inputForm';


class LoginPage extends Component{
  constructor(props) {
    super(props);

    this.getUsername = this.getUsername.bind(this);
	}

  getUsername(value) {
    this.setState({ login: value });
  }

  render() {
    return (
      <div >
          <input type="submit" className="submit" value="Login" onClick={ () => this.props.onLogin(this.state.login) }/>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    user: state.usr.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (name) => {
      console.log(name);
      dispatch({
        login: name,
        type: actionTypes.USER_LOGIN
      })
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);