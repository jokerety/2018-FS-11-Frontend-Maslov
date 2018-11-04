
import shadowStyles from './shadow.css';

const template = `
	<style>${shadowStyles.toString()}</style>
	<div class="file-drop">
        <p>Upload file with the file dialog </p>
        <img>
        <input type="file"> 
    </div>
`;


class FormFile extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = template;
    this._initElements();
    this._addHandlers();
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this._elements.input[attrName] = newVal;
  }

  _initElements() {
    const input = this.shadowRoot.querySelector('input');
    const image = this.shadowRoot.querySelector('img');
    const fileDrop = this.shadowRoot.querySelector('.file-drop');
    this._elements = {
      input,
      image,
      fileDrop,
    };
  }

  _addHandlers() {
    this._elements.input.addEventListener('change', this._onChange.bind(this));
  }

  _onChange(event) {
    const url = URL.createObjectURL(event.target.files[0]);
    this._elements.image.onload = () => URL.revokeObjectURL(url);
    this._elements.image.src = url;
    return false;
  }
}

customElements.define('form-file', FormFile);
