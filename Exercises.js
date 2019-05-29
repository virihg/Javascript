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
function volteaoracion() {
  let oracion = window.prompt("¿Qué oración quieres voltear?");
  let oracion_volteada = oracion.split('').reverse().join('')
	 alert( "La oración volteada es " + oracion_volteada);
}

function invertsinrevert () {
let oracion = window.prompt("¿Qué oración quieres voltear?");
let palabravolteada = '';
for (let x = oracion.length - 1 ; x >= 0; x--){
  palabravolteada += oracion[x];
  }
  alert("Tu oración volteada es " + palabravolteada)
}
function celToFah(cels) {
  return((cels * 9/5) + 32);
}
function fahToCel(fahrenheits) {
  return( (fahrenheits - 32) * 5/9);
}

 function convertFyC () {
  let temperatura =window.prompt("Qué temperatura vas a convertir: Fahrenheit o Celsius");
  if (temperatura == "celsius") {
    let celsius = Number(window.prompt("¿Cuantos grados Celsius a Fahrenheit?"));
    alert( celsius + " grados celsius son " + celToFah(celsius) + " grados Fahrenheit");
  } else if ( temperatura == "fahrenheit") {
    let fahr = Number(window.prompt("¿Cuantos grados Fahrenheit a Celsius"));
    alert ( fahr + " grados Fahrenheit son " + fahToCel(fahr) + " grados Celsius");
  } else {
    alert("No entiendo que quieres convertir");
  }
}
function prop() {
  let prop = window.prompt("¿Qué propiedad del objeto quieres definir?");
  a ={};
  a.prop = true
  console.log(a);
  alert("Tu propiedad " + prop + " es " + a.prop);
}
function sumavalores() {
  let valores = Number(window.prompt("¿Qué valores quieres sumar"));
  
}
