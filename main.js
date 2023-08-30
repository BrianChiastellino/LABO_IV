function miFuncion() {
   
  let numero = document.getElementById("numero").value;

  numero = parseFloat(numero);

  switch (numero) {
    case 1:
      primerEjercicio();
      break;
    case 2:
      segundoEjercicio();
      break;
    case 3:
      tercerEjercicio();
      break;
    case 4:
      cuaertoEjercicio();
      break;
    case 5:
      ejercicioCinco();
      break;
    case 6:
      ejercicioSeis();
      break;
    case 7:
      ejercicioSiete();
      break;
    case 8:
      ejerciciOcho();
      break;
    case 9:
      ejercicioNueve();
      break;
    case 10:
      ejerciciDiez();
      break;
    case 11:
      ejercicioOnce();
      break;
    default:
      alert("Incorrecto");
      break;
  }
}

function primerEjercicio() {
  let edad = parseFloat(prompt("Ingrese su edad"));

  if (edad >= 18) {
    alert("La edad ingresada es mayor de edad");
  } else {
    alert("La edad ingresada es menor de edad");
  }
}

function segundoEjercicio() {
  let nota = parseFloat(prompt("Ingrese nota"));

  if (!isNaN(nota)) {
    if (nota >= 0 && nota <= 3) {
      alert(`Su nota ${nota} es muy deficiente`);
    } else if (nota >= 3 && nota <= 5) {
      alert(`Su nota ${nota} es insuficiente`);
    } else if (nota == 5 || nota == 6) {
      alert(`Su nota ${nota} es suficiente`);
    } else if (nota == 6 || nota == 7) {
      alert(`Su nota ${nota} es bien`);
    } else if (nota >= 7 && nota <= 9) {
      alert(`Su nota ${nota} es notable`);
    } else if (nota == 9 || nota == 10) {
      alert(`Su nota ${nota} es sobresaliente`);
    }
  } else {
    alert("El digito ingresado no es valido");
  }
}

function cuaertoEjercicio() {
  let texto = prompt("Ingrese un texto");

  if (isNaN(texto)) {
    texto = texto.toUpperCase();
    alert(`Su texto en mayuculas: ${texto}`);
  } else {
    alert("Formato no valido");
  }
}

function ejercicioCinco() {
  let i = 1;

  alert(
    `${i}` +
      "\n" +
      `${++i} ${++i}` +
      "\n" +
      `${++i} ${++i} ${++i}` +
      "\n" +
      `${++i} ${++i} ${++i} ${++i}` +
      "\n" +
      `${++i} ${++i} ${++i} ${++i} ${++i}` +
      "\n" +
      `${++i} ${++i} ${++i} ${++i} ${++i} ${++i}` +
      "\n" +
      `${++i} ${++i} ${++i} ${++i} ${++i} ${++i} ${++i}` +
      "\n" +
      `${++i} ${++i} ${++i} ${++i} ${++i} ${++i} ${++i} ${++i}`
  );
}

function ejercicioSeis() {
  for (let i = 0; i <= 500; i++) {
    if (i % 4 == 0 && i % 9 == 0) {
      alert(`El numero ${i} es multiplo de 4 y 9`);
    } else if (i % 4 == 0) {
      alert(`El numero ${i} es multiplo de 4`);
    } else if (i % 9 == 0) {
      alert(`El numero ${i} es multiplo de 9`);
    }
  }
}

function ejercicioSiete() {
  let acumulador = 0;
  let numero;

  do {
    numero = parseFloat(prompt("Ingrese un numero - Para salir 0"));

    if (!isNaN(numero)) {
      acumulador += numero;
    } else {
      alert("Numero no valido");
    }
  } while (numero != 0);

  alert(`Suma total: ${acumulador}`);
}

function ejerciciOcho() {
  let texto;
  let cadena = new Array();

  do {
    texto = prompt("Ingrese un texto - Escriba 'fin' para cancelar.");

    if (!(texto === "fin")) {
      cadena.push(texto);
    }
  } while (!(texto === "fin"));

  texto = cadena.join(" - ");

  alert(`${texto}`);
}

function ejercicioNueve() {
  const vocales = ["a", "e", "i", "o", "u"];

  const texto = prompt("Ingrese un texto");

  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
      contador++;
    }
  }

  alert(`El texto: ${texto} tiene ${contador} vocales`);
}

function ejerciciDiez() {
  const texto = prompt("Ingrese un texto");

  const nuevoTexto = texto.split("").reverse().join("");

  // Split Divide el String en un array de carcateres
  // Reverese da vuelta ese array
  // Join Une los caracteres invertidos

  alert(`Su texto ${texto} su texto al revez ${nuevoTexto}`);
}

function ejercicioOnce() {
  const radio = parseFloat(prompt("Ingrese el radio del circulo"));
  const PI = 3.1416;
  let area;
  area = PI * radio ** 2;

  /////////////////////////////////////////

  // area = Math.PI * Math.pow(radio,2);
  //PI * radio elevado al cuadrado

  alert(`El area del cirulo es ${area}`);
}
