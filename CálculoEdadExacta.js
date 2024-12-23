//La hora esta en formato de 24 horas
function calcularEdad(dia, mes, año, hora) {
  const fechaActual = new Date();
  let edadAños = 0;
  let edadMeses = 0;
  let edadDias = 0;
  let edadHoras = 0;

  if (año > fechaActual.getFullYear() || año < 0) return console.log("Año invalido");
  if (mes < 1 || mes > 12) return console.log("Mes Invalido");
  if (dia < 1 || dia > 31) return console.log("Día Invalido");
  if (hora > 23 || hora < 0) return console.log("Hora invalida");

  const añoActual = fechaActual.getFullYear();
  const mesActual = fechaActual.getMonth() + 1;
  const diaActual = fechaActual.getDate();
  const horaActual = fechaActual.getHours();

  edadAños = añoActual - año;

  if ((mesActual, diaActual) > (año, dia)) {
    edadAños--;
  }

  edadMeses = mesActual - mes;

  if (diaActual < dia) {
    edadMeses--;
    if (edadMeses < 0) {
      edadMeses += 12;
    }
  }

  edadDias = diaActual - dia;
  if (edadDias < 0) {
    edadDias += 31;
  }

  edadHoras = horaActual - hora;

  if (edadHoras < 0) {
    edadHoras += 24;
    edadDias--;
  }

  return `El usuario tiene ${edadAños} con ${edadMeses} mes(es) y ${edadDias} día(s), con ${edadHoras} hora(s)`;
}

console.log(calcularEdad(30, 8, 1970, 12));
