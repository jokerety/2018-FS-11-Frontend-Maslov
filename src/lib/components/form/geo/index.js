
import shadowStyles from './shadow.css';
import getPosition from './getPosition';

const template = `
	<style>${shadowStyles.toString()}</style>
	<div class="geo">
	    <button class="button">Get your geoposition</button>
    </div>
	
`;

class FormGeo extends HTMLElement {
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
    const button = this.shadowRoot.querySelector('button');
    const geo = this.shadowRoot.querySelector('.geo');
    this._elements = {
      button,
      geo,
    };
  }

  _addHandlers() {
    this._elements.button.addEventListener('click', () => {
      const options = {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000,
      };
      const promise = getPosition();
      promise
        .then(
          (result) => {
            this._elements.geo.innerHTML = `latitude: ${result.coords.latitude} , longtitude: ${result.coords.longitude}`;
          },
          (error) => {
            this._elements.geo.innerHTML = `${error}`;
          },
        );
    });
  }
}

customElements.define('form-geo', FormGeo);
