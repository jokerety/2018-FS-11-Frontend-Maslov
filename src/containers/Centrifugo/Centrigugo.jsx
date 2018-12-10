import Centrifuge from 'centrifuge';
import jwt from 'jsonwebtoken';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newTask } from '../../store/actions/categories';

const SECRET = '07a5a782-a044-451e-99a6-6c8eb959d486';

class CentrifugeClass extends Component {
  componentDidMount() {
    const token = jwt.sign({ sub: '1' }, SECRET, { expiresIn: 86400 });

    const centrifuge = new Centrifuge('ws://localhost:9000/connection/websocket');
    centrifuge.setToken(token);

    centrifuge.on('connect', () => {
      console.log('centrifuge connection success');
    });

    centrifuge.subscribe('newtasks', (message) => {
      console.log('task', message);
      this.props.newTask(message.data);
    });

    centrifuge.connect();
  }

  render() {
    return (
      <div />
    );
  }
}
const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => ({
  newTask: task => dispatch(newTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CentrifugeClass);
