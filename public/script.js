const button = document.getElementById('enviar');
const textbox = document.getElementById('texto');
const chat = document.getElementById('mensagens')

const socket = io();

textbox.addEventListener("keypress", ({key}) => {
    if (key == "Enter") button.click();
});

button.addEventListener('click',()=>{
    if (textbox.value !== ""){
        socket.emit('nova mensagem', textbox.value);
        textbox.value = "";
    }
});

socket.addEventListener('nova mensagem', (msg)=>{
    const li = document.createElement('li');
    li.textContent = msg;
    li.classList.add('mensagem');
    chat.appendChild(li);
    chat.scrollTop = chat.scrollHeight;
    if (chat.childElementCount > 19){
        chat.removeChild(chat.children.item(0))
    }
    console.log(chat.childElementCount)
})