let palabra = "la ruta natural";

function validarPalindromo(palabra) {
  //Quitamos los espacios de la palabra y lo ponemos en minúscula
  let palabraNormalizada = palabra.replace(/ /gi, "").toLocaleLowerCase();

  //Quitamos los espacios, dividimos e invertimos la palabra, los unimos y lo ponemos en minúscula
  let palabraInvertida = palabra
    .replace(/ /gi, "")
    .split("")
    .reverse()
    .join("")
    .toLocaleLowerCase();

  if (palabraNormalizada === palabraInvertida) {
    return `La palbra "${palabra}" es un palíndromo , ${true}`;
  } else {
    return `La palbra "${palabra}" no es un palindromo,  ${false}`;
  }
}

console.log(validarPalindromo(palabra));
