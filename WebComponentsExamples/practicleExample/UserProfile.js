class UserProfile extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:'open'}).innerHTML =`  
        <style>
        :host{display:block; border: 1px solid black; padding: 8px;}
        .name{font-weight: bold;}
        </style>
        <div class ="name"><slot name ="name">Name</slot></div>
         <div class ="email"><slot name ="email">Email</slot></div>
        `;
    }
}
customElements.define('user-profile', UserProfile)

export default UserProfile