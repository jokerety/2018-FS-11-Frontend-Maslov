import React, { Component } from 'react';
import {
  Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Container, View, Mask,
} from 'mdbreact';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actions';
import { getAllUsers } from '../../store/actions/categories';


function getElementById(array, number) {
  return array.find(elem => elem.id === number);
}

class FixedNavbar extends Component {
  constructor(props) {
    super(props);

    props.getAllUsers();

    this.state = {
      isLoaded: false,
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
      userId, isAuthed, Logout, users, isLoaded
    } = this.props;
    let userLogin = { username: '' };
    if (isLoaded) {
      userLogin = getElementById(users, userId);
    }

    let routes = null;
    if (this.props.isAuthed) {
      routes = (
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
                  <NavItem active>
                    <NavLink to="/feedback">Оставить отзыв</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/about">Hello {userLogin.login} !
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
      );
    } else {
      routes = (
        <div>
          <Navbar color="black" dark expand="md" scrolling>
            <Container>
              <NavbarBrand href="/">
                <strong>Tasksolver</strong>
              </NavbarBrand>
              <NavbarToggler onClick={this.onClick} />
              <Collapse isOpen={this.state.collapse} navbar>
                <NavbarNav left>
                  <NavItem active>
                    <NavLink to="/login">Войти</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/">О проекте</NavLink>
                  </NavItem>
                </NavbarNav>
              </Collapse>
            </Container>
          </Navbar>
        </div>
      );
    }

    return routes;
  }
}

const mapStateToProps = state => ({
  users: state.ctr.users,
  userId: state.auth.userId,
  isAuthed: state.auth.token !== null,
  isLoaded: state.ctr.users.length !== 0,
});

const mapDispatchToProps = dispatch => ({
  Logout: (event) => {
    event.preventDefault();
    dispatch({ type: actionTypes.LOGOUT });
  },
  getAllUsers: () => dispatch(getAllUsers()),

});

export default connect(mapStateToProps, mapDispatchToProps)(FixedNavbar);
