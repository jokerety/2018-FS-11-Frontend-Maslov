import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";

function getElementById(array, number) {
  return array.find(elem => elem.id === number);
}

class TaskPage extends Component {
    render()
    {
        const tasks = this.props.tasks;
        const taskID = Number(this.props.match.params.id);
        const task = getElementById(tasks, taskID);
        return (
            <div>
                <h2 className="text-left">{task.name}</h2>
                <h3 className="text-justify">{task.description}</h3>
                <h4 className="text-justify">В категориях: {task.categories_id}</h4>
            </div>
        );
    }
}


const mapStateToProps = state => ({
  tasks: state.ctr.tasks,
});

export default connect(mapStateToProps)(TaskPage);

