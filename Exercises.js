// Imprime fecha
function fecha() {
  alert(Date()) ;
}
// Obten el área de un triángulo. Pidele los 3 lados al usuario
function area() {
  let lado1 = Number(window.prompt("¿Cuál es el lado 1"));
  let lado2 = Number(window.prompt("¿Cual es el lado 2"));
  let lado3 = Number(window.prompt("¿Cuál es el lado 3"));
  semiperim = (lado1 + lado2 + lado3) / 2;
  console.log(semiperim);
  area = Math.sqrt(semiperim *((semiperim - lado1), (semiperim - lado2), (semiperim - lado3) ));
  alert("El area del triangulo es " + area);
}
//invertir palabra con metodo revert
function volteaoracion() {
  let oracion = window.prompt("¿Qué oración quieres voltear?");
  let oracion_volteada = oracion.split('').reverse().join('')
	 alert( "La oración volteada es " + oracion_volteada);
}
//invertir palabra sin metodo revert
function invertsinrevert () {
let oracion = window.prompt("¿Qué oración quieres voltear?");
let palabravolteada = '';
for (let x = oracion.length - 1 ; x >= 0; x--){
  palabravolteada += oracion[x];
  }
  alert("Tu oración volteada es " + palabravolteada)
}
// funciones internas de celsius a fahrenheits
function celToFah(cels) {
  return((cels * 9/5) + 32);
}
//funciones internas de fahrenheits a celsius
function fahToCel(fahrenheits) {
  return( (fahrenheits - 32) * 5/9);
}
// convierte grados dados por el usuario de fahrenheits a celsius y a la inversa
 function convertFyC () {
  let temperatura =window.prompt("Qué temperatura vas a convertir: Fahrenheit o Celsius");
  if (temperatura == "cel") {
    let celsius = Number(window.prompt("¿Cuantos grados Celsius a Fahrenheit?"));
    alert( celsius + " grados celsius son " + celToFah(celsius) + " grados Fahrenheit");
  } else if ( temperatura == "fah") {
    let fahr = Number(window.prompt("¿Cuantos grados Fahrenheit a Celsius"));
    alert ( fahr + " grados Fahrenheit son " + fahToCel(fahr) + " grados Celsius");
  } else {
    alert("No entiendo que quieres convertir");
  }
}
// agrega la propiedad de un objeto con valor true
function prop() {
  let prop = window.prompt("¿Qué propiedad del objeto quieres definir?");
  a ={};
  a.prop = true
  console.log(a);
  alert("Tu propiedad " + prop + " es " + a.prop);
}
//suma los valores dados por el usuario hasta que sea negativo
function sumaValores() {
  let i = Number(window.prompt("¿Qué valor quieres sumar"));
  let suma = 0
   while (i >= 0)
   {
    suma += i;
    i = Number(window.prompt("¿Qué valor quieres sumar"));
  }
  alert("oh! diste un número negativo, tu suma final es " + suma)
}
// Regresa cada inicial de cada palabra en mayuscula
function firstLetterUp() {
  let cadena= window.prompt("Dame una cadena de palabras :)");
  palabras = cadena.split(' ');
    var mayusculas= palabras.map(function(palabra){
      return (palabra.charAt(0).toUpperCase() + palabra.slice(1));
    }) ;
    alert(mayusculas.join(' '));
}
// revisa si el numero dado por el usuario es  multiplo de 3 o 7, o ambos.
function multiplos() {
  let numero = Number(window.prompt("Dame un número :)")) ;
  if ((Number.isInteger(numero / 7 )) && (Number.isInteger(numero / 3))) {
    alert("Tu numero es multiplo de 3 y 7 ;)");
  } else if (Number.isInteger(numero / 7 )) {
    alert("Tu número es multiplo de 7 ;)");
  } else if (Number.isInteger(numero / 3)) {
    alert("Tu número es multiplo de 3");
  }else {
    alert("Tu número no es multiplo de 3 ni 7 :(");
  }
}
//Revisa cuantas veces se repite un caracter dado en una cadena dada
function caracterRepeats(){
  var oracion = window.prompt("Dame una cadena :)");
  var character = window.prompt("¿Qué letra quieres saber si se repite?");
  let index = 0;
  let count = 0;
  while (oracion.indexOf(character, index) != -1  && index < oracion.length -1) {
    index = oracion.indexOf(character, index) + 1;
    count++;
} alert("La letra " + character + " se repite " + count + " veces.");
}

// Haz una función que lanza un error con el mensaje dado por el usuario
function error() {
  let error = window.prompt("¿Qué mensaje te gustaría poner en el error?");
  throw new Error(error);
}
//Extiende la función anterior para atrapar el error e imprimir su mensaje y stack
function errorCatch() {
  let error = window.prompt("¿Qué mensaje te gustaría poner en el error?");
  try {
  throw new Error(error);
  } catch (error) {
    alert(error + " " + error.stack);
  } finally {
  }
}
