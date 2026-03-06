//Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

const numero = parseInt(prompt("Ingresa el número"));

if (numero % 2 === 0) {
    if (numero % 3 === 0) {
        if (numero % 5 === 0) {
            if (numero % 7 === 0) {
                document.writeln(`El número ${numero} es divisible en 2, 3, 5 y 7`);
            } else {
                document.writeln(`El número ${numero} es divisible en 2, 3 y 5`);
            }
        } else {
            if (numero % 7 === 0) {
                document.writeln(`El número ${numero} es divisible en 2, 3 y 7`);
            } else {
                document.writeln(`El número ${numero} es divisible en 2 y 3`);
            }
        }
    } else {
        if (numero % 5 === 0) {
            if (numero % 7 === 0) {
                document.writeln(`El número ${numero} es divisible en 2, 5 y 7`);
            } else {
                document.writeln(`El número ${numero} es divisible en 2 y 5`);
            }
        } else {
            if (numero % 7 === 0) {
                document.writeln(`El número ${numero} es divisible en 2 y 7`);
            } else {
                document.writeln(`El número ${numero} es divisible solo en 2 `);
            }
        }
    }
} else {
    if (numero % 3 === 0) {
        if (numero % 5 === 0) {
            if (numero % 7 === 0) {
                document.writeln(`El número ${numero} es divisible por 3, 5 y 7`);
            } else {
                document.writeln(`El número ${numero} es divisible por 3 y 5`);
            }
        } else {
            if (numero % 7 === 0) {
                document.writeln(`El número ${numero} es divisible por 3 y 7`);
            } else {
                document.writeln(`El número ${numero} es solo es divisible por 3`);
            }
        }
    } else {
        if (numero % 5 === 0) {
            if (numero % 7 === 0) {
                document.writeln(`EL número ${numero} es divisible por 5 y 7`);
            } else {
                document.writeln(`EL número ${numero} solo es divisible por 5`);
            }
        } else {
            if (numero % 7 === 0) {
                document.writeln(`EL número ${numero} solo es divisible por 7`);
            } else {
                document.writeln(`El número ${numero} no es divisible por 2, 3, 5 ni 7`);
            }
        }
    }
}