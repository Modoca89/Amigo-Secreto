// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del campo de texto
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre válido.");
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

    // Actualizar la lista de amigos en la página
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en la página
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // Recorrer el array de amigos y agregar cada uno a la lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.setAttribute('role', 'listitem'); // Añadir atributo ARIA
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre del amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSorteado}</strong>!</li>`;
}