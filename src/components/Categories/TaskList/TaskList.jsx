import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from './TaskDetail';


function getElementById(array, number) {
  return array.find(elem => elem.id === number);
}

function getElementsById(array, numbers) {
  const arr = [];
  numbers.map(number => arr.push(getElementById(array, number)));
  return arr;
}

class TaskList extends Component {
  render() {
    const category = getElementById(this.props.categories, Number(this.props.match.params.id));
    const tasks_id = category.tasks_id;
    const tasks = getElementsById(this.props.tasks, tasks_id);
    const list_tasks = tasks.map(task => <Task key={task.id} task={task} />);
    return (
      <div>
        <h2 className="jumbotron-heading">
Это:
          {category.name}
        </h2>
        <h2 className="jumbotron-heading">
          {' '}
          { category.description }
        </h2>
        <ul>
          { list_tasks }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.ctr.categories,
  tasks: state.ctr.tasks,
});

export default connect(mapStateToProps)(TaskList);
