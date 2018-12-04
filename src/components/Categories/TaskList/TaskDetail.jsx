import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import classes from './TaskDetail.module.css';

const task = ({ task, match }) => (
  <div className={classes.DetailContainer}>
    <ul><Link to={`${match.path}/${task.id}`}>{task.name}</Link></ul>
  </div>
);

export default withRouter(task);
