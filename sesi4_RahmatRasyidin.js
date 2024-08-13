let readline = require('readline-sync');

let Calculation = function(num1, num2, op) {
  this.x = parseInt(num1);
  this.y = parseInt(num2);
  this.op = op;

  this.result = function() {
    let x = this.x;
    let y = this.y;
    let op = this.op;

    switch (op) {
        case "*":
            result = x * y;
            break;
        case "/":
            result = x / y;
            break;
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
    }
    console.log("Result: " + result);
  };
}
let num1 = readline.question("Masukan angka pertama: ");
let num2 = readline.question("Masukan angka kedua: ");
let op = readline.question("Masukan operator: ");

let calc = new Calculation(num1, num2, op);

calc.result();