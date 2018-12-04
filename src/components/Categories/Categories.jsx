import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Container, View, Mask,
} from 'mdbreact';
import classes from './CategoriesList.module.css';
import Category from './Detail/CategoryDetail';

const Intro = () => (
  <div>
    <Container className="text-center my-5">
      <h2>Список Категорий</h2>
      <p align="justify"> Задания разбиты на категории, щелкай на категорию и перейдешь к списку заданий!</p>
    </Container>
  </div>

);


class CategoriesShow extends Component {
  render() {
    const categoryList = this.props.categories.map(category => (<Category key={category.id} category={category} />));
    return (
      <div>
        <Intro />
        <div className={classes.categoriesList}>
          {categoryList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.ctr.categories,
});

export default connect(mapStateToProps)(CategoriesShow);
