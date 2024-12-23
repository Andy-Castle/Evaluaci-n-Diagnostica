/*
•	Realizar un algoritmo que maneje una lista de usuarios, permitiendo agregar, listar, actualizar y eliminar usuarios.
I.	Agregar un usuario (Nombre usuario, edad, y contraseña).
II.	Editar datos de un usuario por su id (Nombre usuario, edad, y contraseña).
III.	Eliminar un usuario por su id.
IV.	Ver la lista de los usuarios agregados.
Permitiendo que cada vez que se edite, agregue o elimine un dato muestre la lista actualizada.

*/

let listaDeUsuarios = [
  {
    id: 1,
    nombre: "Frida",
    edad: 26,
    password: "123456",
  },
  {
    id: 2,
    nombre: "Pedro",
    edad: 27,
    password: "Pepe123",
  },
];

function mostrarListaDeUsuarios() {
  console.log(listaDeUsuarios);
}

//Esta función invierte el array para mostrar los ultimos usuarios agragados
function verListaDeUsuarioAgregados() {
  return console.log(listaDeUsuarios.reverse());
}

function agregarUsuario(nombre, edad, password) {
  if (nombre == null || edad == null || password == null)
    return console.log("Tiene que completar todos los campos");
  let lastIndex = listaDeUsuarios.length - 1;
  let lastObj = listaDeUsuarios[lastIndex].id;
  let idLastObj = lastObj;
  listaDeUsuarios.push({
    id: idLastObj + 1,
    nombre: nombre,
    edad: edad,
    password: password,
  });
  return mostrarListaDeUsuarios();
}
function actualizarUsuario(id, nombre = null, edad = null, password = null) {
  let result = listaDeUsuarios.filter((list) => list.id === id);
  if (nombre.trim() == "" || edad < 0 || password == "") {
    return console.log("No coloque datos vacios, edad menor a 0");
  }
  for (const elements of result) {
    if (nombre !== null) {
      elements.nombre = nombre;
    }
    if (edad !== null) {
      elements.edad = parseInt(edad);
      if (String(edad).trim() == "") {
        elements.edad = 18;
      }
    }
    if (password !== null) {
      elements.password = password;
    }
  }

  result = listaDeUsuarios;

  return mostrarListaDeUsuarios();
}

function eliminarUsuario(id) {
  let result = listaDeUsuarios.filter((p) => p.id !== id);
  listaDeUsuarios = result;
  return mostrarListaDeUsuarios();
}

//agregarUsuario("Diana", 28, "Diana123");

//actualizarUsuario(2, "Pepe", 27, "papasfritas");

//eliminarUsuario(1);

//verListaDeUsuarioAgregados();
