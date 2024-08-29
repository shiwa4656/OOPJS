class MyGreeting extends HTMLElement {
  constructor() {
    super(); // Always call super() first in the constructor.
    // Element functionality written in here.
  }

  connectedCallback() {
    this.innerHTML = `<p>Hello, Shabalaza!</p>`; // Set a greeting message
  }
}

// Registers the custom element with the browser's Custom Elements registry
customElements.define('my-greeting', MyGreeting);