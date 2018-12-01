import React, { Component } from 'react';

import './App.css';

import {
    InputForm,
    FileForm,
    GeoForm,

} from './components/'
import './components/geo/getPosition';

class App extends Component {
  constructor(props) {
		super(props);
		this.state = { condition: 'not-sent' };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onKeyPress = this.onKeyPress.bind(this);

  }


  handleSubmit(event) {
        this.setState({condition: 'sending'});
        const data = new FormData(document.forms.main);

		fetch('http://httpbin.org/post', {
          method: 'POST',
          body: data,
          headers: { 'Access-Control-Allow-Origin': '/' },
        }).then((response) => {
          if (response.ok) {
            this.setState({ condition: 'sent' });
          }
        }).catch(() => {
          this.setState({ condition: 'error' });
        });
		event.preventDefault();
  }
  onKeyPress(event) {
      if (event.keyCode === 13) {
          this.dispatchEvent(new Event('submit'));
      }
  }
  render() {
    return (
          <form name="main" id={'form'} onSubmit={ this.handleSubmit }  onKeyPress={ this.onKeyPress}>
              <header>FORM: {this.state.condition}</header><br/>
              <InputForm name={'name'} placeholder={'Введите имя'} /><br/>
              <InputForm name={'surname'} placeholder={'Введите фамилию'} /><br/>
              <InputForm name={'phone'} placeholder={'Введите телефон'} /><br/>
              <input type="submit" value="Submit" /><br/>
              <FileForm /><br/>
              <GeoForm /><br/>
          </form>
    );
  }
}

export default App;

