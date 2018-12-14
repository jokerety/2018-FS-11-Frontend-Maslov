import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { MDBListGroupItem } from 'mdbreact';

const task = ({ match , task}) => {

    return (
        <MDBListGroupItem>
            <Link to={{ pathname: `${match.url}task/${task.id}/` }}>{task.name}</Link>
              <p> Автор: { task.auth_id }</p>
              <p> Описание : { task.description}</p>
          </MDBListGroupItem>
        );
};



export default withRouter(task);
