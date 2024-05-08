class Operaciones_Matematicas {
  constructor() {
    this.listaoperacionesrealziadas = [];
  }
  suma(num1, num2) {
    let resultado = num1 + num2;
    this.listaoperacionesrealziadas.push([
      "suma",
      num1.toString() + " + " + num2.toString(),
      resultado,
    ]);
    return resultado;
  }
  resta(num1, num2) {
    let resultado = num1 - num2;
    this.listaoperacionesrealziadas.push([
      "resta",
      num1.toString() + " - " + num2.toString(),
      resultado,
    ]);
    return resultado;
  }
  multiplicacion(num1, num2) {
    let resultado = num1 * num2;
    this.listaoperacionesrealziadas.push([
      "multiplicacion",
      num1.toString() + " * " + num2.toString(),
      resultado,
    ]);
    return resultado;
  }
  division(num1, num2) {
    let resultado = num1 / num2;
    this.listaoperacionesrealziadas.push([
      "division",
      num1.toString() + " / " + num2.toString(),
      resultado,
    ]);
    return resultado;
  }
  Operaciones_Realziadas() {
    return this.listaoperacionesrealziadas;
  }
}

module.exports = Operaciones_Matematicas;
//npm install
