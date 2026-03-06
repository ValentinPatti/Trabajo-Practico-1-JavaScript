//Escribe un programa que pida dos números y escriba en la pantalla
//cual es el mayor.

const numero1 = Number(prompt("Ingresa el primer número"));
const numero2 = Number(prompt("Ingresa el segundo número"));
if (numero1 > numero2) {
  document.writeln(`El número ${numero1} es el mayor`);
} else {
  document.writeln(`El número ${numero2} es el mayor`);
}