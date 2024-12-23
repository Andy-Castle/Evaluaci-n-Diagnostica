//Generador de contraseñas
/*-longitud mínima de 8 caracteres
  -al menos una letra mayúscula
  -un carácter especial
  -un número
*/
const todosLosCaracteres = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

function generarContraseña(length) {
  if (length < 8) return "Las contraseña no puede ser menor a 8 caracteres";
  let arrayRandomChar = [];
  let password = "";
  //Esta expresión regular pide 1 mayúscula, 1 digito, 1 caracter especial y mínimo 8 caracteres
  const expresionRegular = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  do {
    for (let i = 0; i < length; i++) {
      let obtenerTamañoDelArray = Math.round(
        Math.random() * todosLosCaracteres.length
      );
      arrayRandomChar.push(todosLosCaracteres[obtenerTamañoDelArray]);
    }
    password = password.concat(...arrayRandomChar);
    if (arrayRandomChar > length || password.length > length) {
      arrayRandomChar = [];
      password = "";
    }
  } while (!expresionRegular.test(password));

  return password;
}

console.log(generarContraseña(8));
