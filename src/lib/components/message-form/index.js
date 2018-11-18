// import styles from './index.css';
import shadowStyles from './shadow.css';
import getPosition from '../form/geo/getPosition';

const slotName = 'message-input';

const template = `
	<style>${shadowStyles.toString()}</style>
	<form name= "main" id="form" class="topBefore">
	    <header>FORM</header><br>
        <div class="loading"></div><br>
		<form-input name='name' type="text" placeholder="NAME" class="info"></form-input><br>
		<form-input name='surname' type="text "placeholder="SURNAME" class="info"></form-input><br>
		<form-input name='phone' type = "text" placeholder="PHONE NUMBER" class="info" ></form-input><br>
		<input type = "submit" value="Submit"><br>
		<form-geo></form-geo><br>
        <form-file></form-file><br>
	</form>
`;

class MessageForm extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = template;
    this._initElements();
    this._addHandlers();
  }

  static get observedAttributes() {
    return [
      'action',
      'method',
    ];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this._elements.form[attrName] = newVal;
  }

  _initElements() {
    const form = this.shadowRoot.querySelector('form');
    const message = this.shadowRoot.querySelector('.info');
    const formfile = this.shadowRoot.querySelector('form-file');
    message.innerText = localStorage.getItem('info');

    this._elements = {
      form,
      message,
      formfile,
    };
  }

  _addHandlers() {
    this._elements.form.addEventListener('submit', this._onSubmit.bind(this));
    this._elements.form.addEventListener('keypress', this._onKeyPress.bind(this));
  }


  _onSubmit(event) {
    const inputsTxt = this._elements.form.querySelectorAll('form-input');
    const inputsFile = this._elements.form.querySelector('form-file');
    const inputsGeo = this._elements.form.querySelector('form-geo');

    const data = new FormData();
    inputsTxt.forEach((element) => {
      const input = element.shadowRoot.querySelector('input');
      data.set(input.name, input.value);
    });


    data.set('geo', inputsGeo.shadowRoot.querySelector('input').value);

    data.set('file', inputsFile.shadowRoot.querySelector('input').files[0]);

    const loadInf = this.shadowRoot.querySelector('.loading');
    loadInf.innerText = 'Loading';


    fetch('http://httpbin.org/post', {
      method: 'POST',
      body: data,
      headers: { 'Access-Control-Allow-Origin': '/' },
    }).then((response) => {
      if (response.ok) {
        loadInf.innerText = 'Loaded';
      }
    }).catch(() => {
      loadInf.innerText = 'An error has occurred';
    });

    event.preventDefault();
    return false;
  }

  _onKeyPress(event) {
    if (event.keyCode == 13) {
      this._elements.form.dispatchEvent(new Event('submit'));
    }
  }
}


customElements.define('message-form', MessageForm);
