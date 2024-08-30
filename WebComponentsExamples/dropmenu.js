class myDropdown extends HTMLElement{
    constructor(){
        super();
        this.toggle = this.toggle.bind(this)
    }
    connectedCallback(){
        this.addEventListener("click",this.toggle)
    }
    disconnectedCallback(){
        this.removeEventListener("click", this.toggle)
    }
    toggle(){

    }
}

customElements.define("my-dropdown", myDropdown)