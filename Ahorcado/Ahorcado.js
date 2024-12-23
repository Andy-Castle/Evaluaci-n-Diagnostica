import { palabrasAhorcado } from "./palabras.js";

let numeroRandom = Math.round(Math.random() * palabrasAhorcado.length);

function normalizarDividirPalabra(array) {
  let palabra = array[numeroRandom];
  palabra = palabra
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase();
  return palabra;
}

function progresoLineas(palabra) {
  let lineasSecreta = [];
  for (let i = 0; i < palabra.length; i++) {
    lineasSecreta.push("_");
  }
  return lineasSecreta;
}

let palabraSecreta = normalizarDividirPalabra(palabrasAhorcado);
let progreso = progresoLineas(palabraSecreta);

function juegoAhorcado() {
  let intentosRestantes = 5;
  let letrasIncorrectas = [];

  while (intentosRestantes > 0) {
    let letra = prompt(
      `Palabra: ${progreso.join(
        " "
      )}\n Intestos restantes: ${intentosRestantes}\n Letras intentadas: ${letrasIncorrectas.join(
        ", "
      )}\n Ingresa una letra para adivinar la palabra secreta:`
    );

    if (!letra || letra.length !== 1 || !/^[a-zA-Z]$/.test(letra)) {
      alert("Ingrese una letra valida");
      continue;
    }

    letra = letra.toLowerCase();

    if (letrasIncorrectas.includes(letra)) {
      alert("Ya intestaste esa letra.");
      continue;
    }

    letrasIncorrectas.push(letra);

    if (palabraSecreta.includes(letra)) {
      alert("Correcto, letra encontrada");
      for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letra) {
          progreso[i] = letra;
        }
      }
    } else {
      alert("La letra no esta en la palabra");
      intentosRestantes--;
    }

    if (!progreso.includes("_")) {
      alert(`Felicidades la palabra es ${palabraSecreta}`);
      return;
    }
  }

  alert(`Perdiste la palabra era ${palabraSecreta}`);
}

juegoAhorcado();
