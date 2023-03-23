var chat = document.querySelector('.chat')
var send = document.querySelector('.send')
console.log(send)
var close = document.querySelector('.close')
var form = document.querySelector('.form')
var display = document.querySelector('#display')

chat.addEventListener('click',openForm)

function openForm(){
    form.classList.remove('hidden')
}

close.addEventListener('click',closeForm)

function closeForm(){
    form.classList.add('hidden')
}
send.addEventListener('click',sendButton)

function sendButton(){
    display.value = ""
}
