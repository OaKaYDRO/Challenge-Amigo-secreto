let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if (nombre === ''){
        alert('Por favor, inserte un nombre');
    } else {
        amigos.push(nombre);
        limpiarCampo();
    }
    actualizarLista();
    return;
}

function actualizarLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = "";
    
    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.innerHTML = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert('No has agregado nombres')
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = "";
    let li = document.createElement("li");
    li.innerHTML = amigos[indiceAleatorio];
    resultado.appendChild(li);
}

function limpiarCampo(){
    document.querySelector('#amigo').value = '';
}
