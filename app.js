// console.log('sanity check my boy')
const inp = document.getElementById('input-id')
const btn = document.getElementById('submit-button')
const btnReset = document.getElementById('reset-button')
const list = document.getElementById('todo-list')

btn.addEventListener('click', function(evt){
    const li = document.createElement('li')
    const inp = document.querySelector('input')
    li.textContent = inp.value
    document.querySelector('ul').appendChild(li)
    inp.value = ''
    const btnReset = document.querySelector(li)
})