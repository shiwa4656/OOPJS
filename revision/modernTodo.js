const todo = document.querySelector("#todo");
const formTo = document.querySelector("#formClass");

function addtoItem(text){
    const li = document.createElement("li");
    li.textContent = text;
    li.addEventListener('click', completed)
    todo.appendChild(li)
}

function completed(event){
    alert ("well done");
    event.target.removeEventListener('click', completed)
    event.target.textContent += 'completd'
}

function OnNewToDo(event){
    event.preventDefault();
    const text = formTo.querySelector('#new').value;
    addtoItem(text);
    formTo.querySelector('#new').value = '';

}
formTo.addEventListener('submit', OnNewToDo);