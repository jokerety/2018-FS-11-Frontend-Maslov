import React, {Component} from  'react';
import Categories from '../../components/Categories/Categories';
import { Route } from 'react-router-dom';
import CategoryPage from '../../components/Categories/TaskList/TaskList';

const Intro = () => (
    <section className="jumbotron text-center">
        <div className="container">
            <h1 className="jumbotron-heading">Список Категорий</h1>
            <p className="lead text-muted">Задания разбиты на категории, щелкай на категорию и перейдешь к списку
                заданий!</p>
        </div>
    </section>
);


class CategoriesContainer extends Component {
    state = {
        categories: CategoriesContainer.createCategories()
    };
    constructor(props) {
        super(props)
     }
    static createCategories() {
        return new Array(15).fill(null).map((_,index) => {
            return {
                id: index,
                text: `Категория номер ${index}`,
            }
        })
    }

    render() {
        return (
            <div>
                 <Intro/>
                <Categories categories={this.state.categories}/>
                <Route path='/category/:id' exact component={CategoryPage} />
            </div>



        )
    }

}
export default CategoriesContainer;