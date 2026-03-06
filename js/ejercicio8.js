//Escribe un programa que pida un número y diga si es divisible por 2

const numero = parseInt(prompt("Ingresa el número"));

if (numero % 2 === 0) {
    document.writeln(`El número es divisible por 2`)
} else {
    document.writeln(`El número no es divisible por 2`)
}