//Escribe un programa que pida 3 números y escriba en la pantalla el 
//mayor de los tres.

const numero1 = Number(prompt("Ingresa el primer número"));
const numero2 = Number(prompt("Ingresa el segundo número"));
const numero3 = Number(prompt("Ingresa el tercer número"));

if (numero1 > numero2) {
    if (numero1 > numero3) {
        document.writeln(`El número ${numero1} es el mayor`);
    } else {
        document.writeln(`El número ${numero3} es el mayor`);
    }
} else {
    if (numero2 > numero3) {
        document.writeln(`El número ${numero2} es el mayor`);
    } else {
        document.writeln(`El número ${numero3} es el mayor`);
    }
}