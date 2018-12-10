import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Container, View, Mask,
} from 'mdbreact';
import {
  MDBCard, MDBListGroup, MDBListGroupItem, MDBContainer,
} from 'mdbreact';
import { getAllCategories } from '../../store/actions/categories';

import Category from './Detail/CategoryDetail';


const Intro = () => (
  <div>
    <Container className="text-center my-5">
      <h2>Список Категорий</h2>
      <p align="justify center"> Задания разбиты на категории, щелкай на категорию и перейдешь к списку заданий!</p>
    </Container>
  </div>

);

class CategoriesShow extends Component {
  constructor(props) {
    super(props);
    if (!props.isLoaded) {
      props.getAllCategories();
    }
  }

  render() {
    const isLoaded = this.props.isLoaded;
    let categoryList = 'Categories are loading';
    if (isLoaded) {
      categoryList = this.props.categories.map(category => (<Category key={category.id} category={category} />));
      console.log(categoryList);
    }
    return (
      <div>
        <Intro />
        <MDBContainer className="mx-auto">
          <MDBCard className="mx-auto" style={{ width: '22rem', marginTop: '1rem' }}>
            <MDBListGroup>
              {categoryList}
            </MDBListGroup>
          </MDBCard>
        </MDBContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.ctr.categories,
  isLoaded: state.ctr.categories.length !== 0,
});
const mapDispatchToProps = dispatch => ({
  getAllCategories: () => dispatch(getAllCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesShow);
