//XGreeting
class XGreeting extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:'open'}).innerHTML=`
        <style>p {color:blue;} </style>
        <p>Hello, OLa Nordmenn!</p>
        `;
    }
}
customElements.define('x-greeting', XGreeting)

export default XGreeting;