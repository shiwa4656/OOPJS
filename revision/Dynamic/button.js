function createElement(beforeText, afterText){
    const button = document.createElement('button');
    button.textContent = beforeText;
    button.classList.add('btn');
    button.id = 'example-buttom';

    button.addEventListener('click', ()=>{
        button.textContent = afterText;
        button.disabled = true;
        button.style.backgroundColor= 'blue';
        button.style.color = 'red';
    })
    document.body.append(button)
}

createElement('click me', 'clicked me')