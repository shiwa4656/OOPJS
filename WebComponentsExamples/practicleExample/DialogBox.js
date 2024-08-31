class DialogBox extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'}).innerHTML= ` 
        <style>
        :host {display :block; background: white; border :2px solid black; padding:16px;}
        ::slotted(h2) {color :darkblue}
        ::slotted(p) {font-size :16px}
        <\/style>
        <slot name ="header"></slot>
        <div class = "content">
        <slot></slot> <!--Default slot for content-->
        </div>
        <slot name = "footer"></slot> 
        
        `;
    }
}
customElements.define('dialog-box', DialogBox)