class ThemedButton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' }).innerHTML = `
        <style>
          button {
            background-color: var(--button-bg, #007bff); /* Default blue */
            color: var(--button-color, white);
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
          }
          button:hover {
            background-color: var(--button-hover-bg, #0056b3); /* Darker blue */
          }
        <\/style>
        <button><slot>Button<\/slot></button>
      `;
    }
  }
  
  customElements.define('themed-button', ThemedButton);