import React from 'react';
import classes from './CategoriesList.module.css';
import Category from './Detail/CategoryDetail'



const categories = (props) => {
   let categoryList = props.categories.map(category => {
       return (
           <Category key={category.id} category={category}/>
       )

   });

    return (
        <div>



            <div className={classes.categoriesList}>
                {categoryList}
            </div>
        </div>
    );
};

export default categories;