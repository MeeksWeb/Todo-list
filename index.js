const text = document.getElementById('todo-text');
const addBtn = document.getElementById('add-button');
const list = document.querySelector('.list');
const time = document.getElementById('time');
const clear = document.getElementById('clear');
const check = document.getElementById('check');


let valueTxt = ''
let dateValue = ''

function addItem(e) {
    e.preventDefault()
    valueTxt = text.value;
    dateValue = time.value;
    if (valueTxt === '') {
        alert("Please add todo")
        return;
   } 

   const li = document.createElement('li');
   li.className = 'items'
   li.innerHTML = `<input type="checkbox" name="check" id="check" class="check"> ${valueTxt}  
   <span class="span">${dateValue}</span> 
   <button class="delete">
   <i class="fa fa-trash fa-lg delete"></i>
   </button>`
   list.appendChild(li)


    text.value = '';

    display()

}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove()

    }
    display()
}

function clearAll() {
   let confirm1 = confirm('Are you sure?')
   if (confirm1) {
       list.innerText = '';
   } 
    display()
}

function display() {
    const items = document.querySelectorAll('.items');
    if (items.length === 0) {
        clear.style.display = 'none'
    } else {
        clear.style.display = 'block'
    }
}

function checkDone(e) {
    if (e.target.checked) {

        e.target.parentElement.style.textDecoration = 'line-through'
        e.target.parentElement.style.textDecorationColor = 'red'
         

    } else {
        e.target.parentElement.style.textDecoration = 'none'
        e.target.parentElement.style.textDecorationColor = 'none'

    }
}
display()



list.addEventListener('click', removeItem)
addBtn.addEventListener('click', addItem)
clear.addEventListener('click', clearAll)
list.addEventListener('change', checkDone)
document.addEventListener('DOMContentLoaded', display)









