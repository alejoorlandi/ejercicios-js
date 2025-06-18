/* 
1. Variables y Operadores
a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor
de la suma de ambos números en una 3er variable. */

var numero1, numero2, resultado;
numero1 = 2;
numero2 = 4;
resultado = numero1 + numero2;

console.log("la suma es", resultado);

/* Crear dos variables de tipo String y concatenarlas guardando el resultado en una
3er variable */

var string1, string2, concatenacion;
string1 = "hola";
string2 = "mundo";
concatenacion = string1 + string2;
console.log(concatenacion);

/* Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de
letras del string) guardando el resultado de la suma en una 3er variable (utilizar
length). */

var string3, string4, resultado1;
string3 = "alejo";
string4 = "orlandi";
resultado1 = string3.length + string4.length;
console.log(resultado1);

/* Strings
a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
texto en mayúscula (utilizar toUpperCase) */

/* var palabra;
palabra = "programacion";
palabra.toUpperCase();
console.log(palabra.toUpperCase()); */

/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los primeros 5 caracteres guardando el resultado en una nueva
variable (utilizar substring */

var palabra, palabraCaracteres;
palabra = "programacion";
palabraCaracteres = palabra.substring(0, 5);
console.log(palabraCaracteres);

/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los últimos 3 caracteres guardando el resultado en una nueva variable
(utilizar substring). */

var palabra, palabraCaracteres;
palabra = "programacion";
palabraCaracteres = palabra.substring(9);
console.log(palabraCaracteres);

/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con la primera letra en mayúscula y las demás en minúscula. Guardar el
resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
el operador +) */

var palabra, primeraLetra, letraMinuscula, palabraFinal;
palabra = "programacion";
primeraLetra = palabra.substring(0, 1).toUpperCase();
letraMinuscula = palabra.substring(1).toLowerCase();
console.log(primeraLetra + letraMinuscula);

/* Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
variable (utilizar indexOf) */

var frase, blanco;
frase = "hola como estas";
blanco = frase.indexOf(" ");
console.log("la posicion en blanco es ", blanco);

/* Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
generar un nuevo string que tenga la primera letra de ambas palabras en
mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
toUpperCase, toLowerCase y el operador + */

// Crear la variable con dos palabras largas
let texto = "programacion orientada";

let espacioIndex = texto.indexOf(" ");

let palabra1 = texto.substring(0, espacioIndex);

let palabra2 = texto.substring(espacioIndex + 1);

let palabra1Formateada =
  palabra1.charAt(0).toUpperCase() + palabra1.substring(1).toLowerCase();
let palabra2Formateada =
  palabra2.charAt(0).toUpperCase() + palabra2.substring(1).toLowerCase();

let resultado2 = palabra1Formateada + " " + palabra2Formateada;

console.log(resultado2);

// ARRAYS
/* 
Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
consola los meses 5 y 11 (utilizar console.log) */

let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
console.log("Los meses son", meses[4], "y", meses[10]);

/* Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */

meses.sort();
console.log(meses);

/* Agregar un elemento al principio y al final del array (utilizar unshift y push) */

let autos = ["bmw", "mercedes"];
autos.push("peugeot");
autos.unshift("toyota");
console.log(autos);

/* Quitar un elemento del principio y del final del array (utilizar shift y pop). */
let ultimo = autos.pop();
let primero = autos.shift();
console.log(autos);

/* Invertir el orden del array (utilizar reverse) */

let invertir = autos.reverse();
console.log(autos);

/* Unir todos los elementos del array en un único string donde cada mes este
separado por un guión - (utilizar join) */

let resultado3 = meses.join();
console.log(meses.join("-"));

/* Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
(utilizar slice) */
let meses1 = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
let mayoDiciembre = meses1.slice(4, 11);
console.log(mayoDiciembre);

// IF ELSE

/* Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el
valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than
0,5” y sino un alerta con el mensaje “Lower than 0,5” */

/* let numero = Math.random(); //

console.log(numero);

if (numero >= 0.5) {
  alert("es mayor o igual a 0,5");
} else {
  alert("es menor a 0,5");
} */

/* Crear una variable “Age” que contenga un número entero entre 0 y 100 y
muestre los siguientes mensajes de alerta:
i. “Bebe” si la edad es menor a 2 años;
ii. “Niño” si la edad es entre 2 y 12 años;
iii. “Adolescente” entre 13 y 19 años;
iv. “Joven” entre 20 y 30 años;
v. “Adulto” entre 31 y 60 años;
vi. “Adulto mayor” entre 61 y 75 años;
vii. “Anciano” si es mayor a 75 años
 */

/* let age = Math.floor(Math.random() * 101); */
/* console.log(age);

if (age <= 2) {
  alert("bebe");
} else if (age >= 2 && age <= 12) {
  alert("niño");
} else if (age >= 13 && age <= 19) {
  alert("adolescente");
} else if (age >= 20 && age <= 30) {
  alert("joven");
} else if (age >= 31 && age <= 60) {
  alert("adulto");
} else if (age >= 61 && age <= 75) {
  alert("adulto mayor");
} else if (age >= 75) {
  alert("anciano");
}
 */
//FOR

/* Crear un array que contenga 5 palabras y recorrer dicho array utilizando un
bucle for de JavaScript para mostrar una alerta utilizando cada una de las
palabras */

let palabrasFor = ["casa", "auto", "planta", "arbol", "vidrio"];

for (let index = 0; index < palabrasFor.length; index++) {
  const palabrasFor1 = palabrasFor[index];
  console.log(palabrasFor1); //en realidad es alert, pero para no tener que comentarlo.
}

/* Al array anterior convertir la primera letra de cada palabra en mayúscula y
mostrar una alerta por cada palabra modificada */

for (let index = 0; index < palabrasFor.length; index++) {
  let palabra = palabrasFor[index];

  let palabraModificada =
    palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();

  console.log(palabraModificada);
}

/* Crear una variable llamada “sentence” que tenga un string vacío, luego al array
del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de
la variable sentence. Al final mostrar una única alerta con la cadena completa. */

let sentence = "";
for (let index = 0; index < palabrasFor.length; index++) {
  sentence += palabrasFor[index] + " ";
  console.log(sentence);
}
/* 
Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con
el número de la repetición, es decir que al final de la ejecución del bucle for
debería haber 10 elementos dentro del array, desde el número 0 hasta al número
9. Mostrar por la consola del navegador el array final (utilizar console.log). */

let vacioArray = [];
for (let index = 0; index < 10; index++) {
  vacioArray.push(index);
  console.log(vacioArray);
}

/* funciones */

/* Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
dicha variable en la consola del navegador     */

function suma(num1, num2) {
  return num1 + num2;
}
let resultado8 = suma(2, 3);
console.log("El resultado es ", resultado8);

/* A la función suma anterior, agregarle una validación para controlar si alguno de
los parámetros no es un número, mostrar una alerta aclarando que uno de los
parámetros tiene error y retornar el valor NaN como resultado */

/* function suma(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    alert("Error: uno de los parámetros no es un número.");
    return NaN;
  }

  return num1 + num2;
}

let resultado9 = suma(5, 7);
console.log("Resultado 1:", resultado9); 

let resultado7 = suma(5, "hola");
console.log("Resultado 2:", resultado7);  */

/* 
Crear una función validate integer que reciba un número como parámetro y
devuelva verdadero si es un número entero */

function validateInteger(numero) {
  return Number.isInteger(numero);
}
console.log(validateInteger(10)); // true
console.log(validateInteger(10.5)); // false
console.log(validateInteger("10")); // false
console.log(validateInteger(NaN)); // false
console.log(validateInteger(0)); // true

function suma(num1, num2) {
  // Validar si los parámetros son números
  if (isNaN(num1) || isNaN(num2)) {
    alert("Error: uno de los parámetros no es un número.");
    return NaN;
  }

  // Validar si el primer número no es entero
  if (!Number.isInteger(num1)) {
    alert("Advertencia: el primer número no es entero. Será redondeado.");
    num1 = Math.round(num1);
  }

  // Validar si el segundo número no es entero
  if (!Number.isInteger(num2)) {
    alert("Advertencia: el segundo número no es entero. Será redondeado.");
    num2 = Math.round(num2);
  }

  return num1 + num2;
}

// Pruebas
let resultado13 = suma(5, 7);
console.log("Resultado 1:", resultado13); // 12

let resultado11 = suma(5, "hola");
console.log("Resultado 2:", resultado11); // NaN + alert

let resultado10 = suma(4.7, 3.3);
console.log("Resultado 3:", resultado10); // 8

function validarYRedondear(numero, nombreParametro) {
  if (!Number.isInteger(numero)) {
    alert(
      `Advertencia: el parámetro "${nombreParametro}" no es un entero. Será redondeado.`
    );
    return Math.round(numero);
  }
  return numero;
}
function suma(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    alert("Error: uno de los parámetros no es un número.");
    return NaN;
  }

  // Validar y redondear si es necesario
  num1 = validarYRedondear(num1, "num1");
  num2 = validarYRedondear(num2, "num2");

  return num1 + num2;
}
let resultado12 = suma(5, 7);
console.log("Resultado 1:", resultado12); // 12

let resultado15 = suma(4.6, 3.2);
// Alert ×2 y redondeo a 5 y 3
console.log("Resultado 2:", resultado15); // 8

let resultado16 = suma(5, "hola");
// Alert de error por parámetro no numérico
console.log("Resultado 3:", resultado16); // NaN
