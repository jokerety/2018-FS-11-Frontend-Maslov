import React from 'react';
import classes from './Category.module.css';
import {Link,withRouter } from "react-router-dom";

const category = ({category, match}) => {
    return (
        <div className={classes.CategoryContainer}>
            <Link to={`${match.path}/${category.id}`}>{category.text}></Link>
        </div>
    )
};

export default withRouter(category);