function calculadora(num1, operacion, num2){
  switch(operacion){
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "operacion no definida";
  }
}
let operador = "-";
let resultado = calculadora(10, operador, 2);
console.log("El resultado de la operacion es: ", resultado);



