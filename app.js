let input=document.getElementById('input')
let button=document.getElementById('add')
let todolist=document.getElementById('todolist');
let todos=[];
button.addEventListener('click',()=>{
    todos.push(input.value)
    addtodo(input.value)
    input.value=''
})

function addtodo(todo){
    let para=document.createElement('p');
    para.innerText=todo;
    todolist.appendChild(para)
    para.addEventListener('click',()=>{
        para.style.textDecoration='line-through'
    })
}