import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import classes from './Category.module.css';

const category = ({ category, match }) => (
  <div className={classes.CategoryContainer}>
    <ul><Link to={`${match.path}/${category.id}/detail/`}>{category.name}</Link></ul>
  </div>
);

export default withRouter(category);
