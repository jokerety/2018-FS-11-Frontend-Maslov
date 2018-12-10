import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  MDBCard, MDBListGroup, MDBListGroupItem, MDBContainer, Container,
} from 'mdbreact';
import Task from './TaskDetail';
import {getAllTasks} from "../../../store/actions/categories";

function getElementById(array, number) {
  return array.find(elem => elem.id === number);
}

function getElementsById(array, numbers) {
  const arr = [];
  numbers.map(number => arr.push(getElementById(array, number)));
  return arr;
}

class TaskList extends Component {
  constructor(props) {
    super(props);
    if (!props.isLoaded) {
      props.getAllTasks();
    }
  }
  render() {
    const isLoaded = this.props.isLoaded;
    let  tasks = [];
    let category =  {
      id: 1, name: 'Категория 1', description: 'Описание категории 1', tasks_id: [1, 2, 4, 3],
    };
    if (isLoaded) {
      category = getElementById(this.props.categories, Number(this.props.match.params.id));
      const tasks_id = category.tasks_id;
      tasks = getElementsById(this.props.tasks, tasks_id);
    }
    const list_tasks = tasks.map(task => <Task key={category.id} task={task} />);
    return (
      <div>
        <Container className="text-center my-5">
          <h2>{category.name}</h2>
          <p align="justify center">
            {' '}
            {category.description}
          </p>
        </Container>
        <MDBContainer className="mx-auto">
          <MDBCard className="mx-auto" style={{ width: '22rem', marginTop: '1rem' }}>
            <MDBListGroup>
              { list_tasks }
            </MDBListGroup>
          </MDBCard>
        </MDBContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.ctr.categories,
  tasks: state.ctr.tasks,
  isLoaded: state.ctr.tasks.length !== 0 && state.ctr.categories.length !== 0,
});
  const mapDispatchToProps = dispatch => ({
  getAllTasks: () => dispatch(getAllTasks()),
});


export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
