//Escribe un programa que pida una frase y escriba las vocales que aparecen

const frase = prompt("Ingrese una frase:");
let i = 0;

while (i < frase.length) {
  let letra = frase.charAt(i);
  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u" ||
    letra === "A" ||
    letra === "E" ||
    letra === "I" ||
    letra === "O" ||
    letra === "U"
  ) {
    console.log(letra);
  }
  i = i + 1;
}

//length: cantidad de caracteres
//charAt: devuelve la letra que está en posicion
