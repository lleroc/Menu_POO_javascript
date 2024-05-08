//inicializo la la libreria de Prompt-sync
var PedirxTeclado = require("prompt-sync")();
//declarar la clase operaciones
var Operaciones_Matematicas = require("./operaciones");
var operacion = new Operaciones_Matematicas();
//espacio para poder el do while

//
console.log("Calculadora de Operaicones");
console.log("***MENU PRINCIPAL***");
console.log("1 - Suma");
console.log("2 - Resta");
console.log("3 - Multiplicacion");
console.log("4 - Division");
var operacionElejida = PedirxTeclado("Digite la opcion que desea realziar: ");
if (operacionElejida == 1) {
  var numero1 = PedirxTeclado("Ingrese el primer numero: ");
  var numero2 = PedirxTeclado("Ingrese el segundo numero: ");
  var resultado = operacion.suma(numero1, numero2);
  console.log("El resutlado es " + resultado);
} else if (operacionElejida == 2) {
  var numero1 = PedirxTeclado("Ingrese el primer numero: ");
  var numero2 = PedirxTeclado("Ingrese el segundo numero: ");
  var resultado = operacion.resta(numero1, numero2);
  console.log("El resutlado es " + resultado);
} else if (operacionElejida == 3) {
  var numero1 = PedirxTeclado("Ingrese el primer numero: ");
  var numero2 = PedirxTeclado("Ingrese el segundo numero: ");
  var resultado = operacion.multiplicacion(numero1, numero2);
  console.log("El resutlado es " + resultado);
} else {
  var numero1 = PedirxTeclado("Ingrese el primer numero: ");
  var numero2 = PedirxTeclado("Ingrese el segundo numero: ");
  var resultado = operacion.division(numero1, numero2);
  console.log("El resutlado es " + resultado);
}
