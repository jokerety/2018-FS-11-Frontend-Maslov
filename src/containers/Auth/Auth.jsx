import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  MDBContainer, MDBRow, MDBCol, MDBBtn,
} from 'mdbreact';
import Input from '../../components/Input/Input';
import * as actions from '../../store/actions';

class Auth extends Component {
    state={
      controls: {
        username: {
          elementType: 'input',
          elementConfig: {
            type: 'username',
            placeholder: 'Имя пользователя',
          },
          value: '',
          validation: {
            required: true,
          },
          valid: false,
          touched: false,
        },
        password: {
          elementType: 'input',
          elementConfig: {
            type: 'password',
            placeholder: 'Пароль',
          },
          value: '',
          validation: {
            required: true,
            minLength: 6,
          },
          valid: false,
          touched: false,
        },
      },
    };

    checkValidity(value, rules) {
      let isValid = true;

      if (rules.required) {
        isValid = value.trim() !== '' && isValid;
      }

      if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
      }

      return isValid;
    }

    inputChangedHandler = (event, key) => {
      const updatedControls = {
        ...this.state.controls,
        [key]: {
          ...this.state.controls[key],
          value: event.target.value,
          valid: this.checkValidity(event.target.value, this.state.controls[key].validation),
          touched: true,
        },
      };

      this.setState({ controls: updatedControls });
    };

    submitHandler = (event) => {
      event.preventDefault();
      this.props.onAuth(
        this.state.controls.username.value,
        this.state.controls.password.value,
      );
    };

    render() {
      const formElements = { ...this.state.controls };
      const inputs = Object.keys(formElements).map((key) => {
        const inputElement = formElements[key];
        return (
          <Input
            key={key}
            elementType={inputElement.elementType}
            elementConfig={inputElement.elementConfig}
            value={inputElement.value}
            invalid={!inputElement.valid}
            touched={inputElement.touched}
            changed={event => this.inputChangedHandler(event, key)}
          />
        );
      });
      return (
        <MDBContainer>
          <MDBRow>
            <MDBCol md="10">
              <form onSubmit={this.submitHandler}>
                <h2>Вход на сайт</h2>
                {inputs}
                <div className="text-center mt-4">
                  <MDBBtn color="indigo" type="submit">Login</MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
    }
}

const mapDispatchToProps = dispatch => ({
  onAuth: (username, password) => dispatch(actions.auth(username, password)),
});

const mapStateToProps = state => ({
  loading: state.auth.loading,
  error: state.auth.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
