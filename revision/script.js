const link = document.querySelector('.button-click')
const link1 = document.querySelector('.button-click1')

function ButtonAlert (event){
    event.preventDefault()
    event.target.textContent ='clicked';
    alert('Button clicked')
}


link.addEventListener('click', ButtonAlert)

link1.addEventListener('click', ButtonAlert)

link1.removeEventListener('click',ButtonAlert)

