// Ex1: Mensajes básicos
// Este script imprime un mensaje en la consola al cargar la página
console.log("Hola Mundo!");
// Este mensaje se mostrará después del primer mensaje
console.log("Soy el primer script");

// Ex2: Mensaje con comillas
var mensaje = "Hola Mundo!\nQué fácil es incluir 'comillas simples'\ny \"comillas dobles\"";
console.log(mensaje);

// Ex3: Mostrar los meses
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
for (var i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}

// Ex4: Comparaciones de texto y booleanos
var valores = [true, 5, false, "hola", "adios", 2];
var texto1 = valores[3];
var texto2 = valores[4];

console.log(texto1.length > texto2.length ? texto1 + " es más largo." : texto2 + " es más largo o igual.");

var resultadoTrue = valores[0] && valores[2];
var resultadoFalse = valores[0] || valores[2];
console.log("Resultado true: " + resultadoTrue);
console.log("Resultado false: " + resultadoFalse);

// Ex5: Operaciones matemáticas y comparaciones
var numero1 = 5;
var numero2 = 8;

console.log(numero1 <= numero2 ? numero1 + " no es mayor que " + numero2 : numero1 + " es mayor que " + numero2);
console.log(numero2 > 0 ? numero2 + " es positivo" : "Número no positivo.");
console.log((numero1 < 0 || numero1 !== 0) ? numero1 + " es negativo o distinto de cero" : "Número positivo o cero.");
console.log(++numero1 <= numero2 ? "Incrementar en 1 unidad no hace a " + numero1 + " mayor o igual que " + numero2 : "Incrementar en 1 hace a " + numero1 + " mayor que " + numero2);

// Ex6: Cálculo de letra DNI
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var numeroDNI = prompt("Introduce el número de DNI (sin letra):");
var letraUsuario = prompt("Introduce la letra del DNI:");

if (isNaN(numeroDNI) || numeroDNI < 0 || numeroDNI > 99999999) {
    console.log("Número de DNI no válido.");
} else {
    var resto = numeroDNI % 23;
    var letraCalculada = letras[resto];
    console.log(letraCalculada !== letraUsuario.toUpperCase() ? "La letra indicada no es correcta." : "Número y letra de DNI correctos.");
}

// Ex7: Cálculo de factorial
var numeroFactorial = prompt("Introduce un número entero para calcular su factorial:");
numeroFactorial = parseInt(numeroFactorial);

if (isNaN(numeroFactorial) || numeroFactorial < 0) {
    console.log("Por favor, introduce un número entero positivo.");
} else {
    var factorial = 1;
    for (var i = 1; i <= numeroFactorial; i++) {
        factorial *= i;
    }
    console.log("El factorial de " + numeroFactorial + " es: " + factorial);
}

// Ex8: Determinar par o impar
var numeroParOImpar = prompt("Introduce un número entero:");
numeroParOImpar = parseInt(numeroParOImpar);

if (isNaN(numeroParOImpar)) {
    console.log("Por favor, introduce un número entero válido.");
} else {
    var resultadoParOImpar = numeroParOImpar % 2 === 0 ? "Par" : "Impar";
    console.log("El número " + numeroParOImpar + " es: " + resultadoParOImpar);
}

// Ex9: Analizar cadena de texto
function analizarCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        return "La cadena está formada solo por mayúsculas.";
    }
    else if (cadena === cadena.toLowerCase()) {
        return "La cadena está formada solo por minúsculas.";
    }
    else {
        return "La cadena es una mezcla de mayúsculas y minúsculas.";
    }
}

var inputCadena = prompt("Introduce una cadena de texto:");
var resultadoAnalisis = analizarCadena(inputCadena);
console.log(resultadoAnalisis);

// Ex10: Verificar palíndromo
function esPalindromo(cadena) {
    var cadenaSinEspacios = cadena.toLowerCase().replace(/\s/g, '');
    var cadenaInvertida = cadenaSinEspacios.split('').reverse().join('');
    return cadenaSinEspacios === cadenaInvertida;
}

var inputPalindromo = prompt("Introduce una cadena de texto para verificar si es un palíndromo:");
var resultadoPalindromo = esPalindromo(inputPalindromo) ? "sí es" : "no es";
console.log("La cadena " + resultadoPalindromo + " un palíndromo.");