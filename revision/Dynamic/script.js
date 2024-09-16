const generate = document.querySelector('.generatebutton');
function generatef(){   
const FirstButton = document.createElement('button');
FirstButton.textContent = 'click me';
document.body.append(FirstButton);

};

generate.addEventListener('click', generatef )