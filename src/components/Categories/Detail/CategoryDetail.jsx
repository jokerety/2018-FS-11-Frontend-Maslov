import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { MDBListGroupItem } from 'mdbreact';

const category = ({ category, match }) => (
  <MDBListGroupItem>
    <Link to={`${match.path}/${category.id}/detail/`}>{category.name}</Link>
  </MDBListGroupItem>
);

export default withRouter(category);
