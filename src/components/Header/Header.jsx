import React from 'react';
import {
  Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Container, View, Mask,
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

function getElementById(array, number) {
  return array.find(elem => elem.id === number);
}


class FixedNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    const {
      user, Login, Logout, users,
    } = this.props;
    const userLogin = getElementById(users, user.id);
    return (
      user.is_authorized
        ? (
          <div>
            <Navbar color="black" dark expand="md" scrolling>
              <Container>
                <NavbarBrand href="/">
                  <strong>Tasksolver</strong>
                </NavbarBrand>
                <NavbarToggler onClick={this.onClick} />
                <Collapse isOpen={this.state.collapse} navbar>
                  <NavbarNav left>
                    <NavItem>
                      <NavLink to="/category/">Список категорий</NavLink>
                    </NavItem>


                  </NavbarNav>
                  <NavbarNav right>
                    <NavItem>
                      <NavLink to="/">
Hello
                        {userLogin.login}
!
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="/" onClick={Logout}>Выход</NavLink>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>
          </div>
        ) : (
          <Navbar color="black" dark expand="md" scrolling>
            <Container>
              <NavbarBrand href="/">
                <strong>Tasksolver</strong>
              </NavbarBrand>
              <NavbarToggler onClick={this.onClick} />
              <Collapse isOpen={this.state.collapse} navbar>
                <NavbarNav left>
                  <NavItem active>
                    <NavLink to="/" onClick={Login}>Войти</NavLink>
                  </NavItem>
                </NavbarNav>
              </Collapse>
            </Container>
          </Navbar>

        )
    );
  }
}

const mapStateToProps = state => ({
  users: state.ctr.users,
  user: state.usr.user,
});

const mapDispatchToProps = dispatch => ({
  Login: (event) => {
    event.preventDefault();
    dispatch({ type: actionTypes.USER_LOGIN });
  },
  Logout: (event) => {
    dispatch({ type: actionTypes.USER_LOGOUT });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FixedNavbar);
