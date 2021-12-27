const Stack = require("../index");

// Problem : Performs Postfix Evaluation on a given exp

function postfixEvaluation(exp) {
  const stack = new Stack();
  for (let i = 0; i < exp.length; i++) {
    const character = exp[i];
    if (!isNaN(character)) {
      stack.push(parseInt(character));
    } else {
      const num1 = stack.pop();
      const num2 = stack.pop();
      if (num1 === "underflow" || num2 === "underflow")
        return "Can't perform postfix evaluation";

      switch (character) {
        case "+":
          stack.push(num2 + num1);
          break;
        case "-":
          stack.push(num2 - num1);
          break;
        case "/":
          stack.push(num2 / num1);
          break;
        case "*":
          stack.push(num2 * num1);
          break;
      }
    }
  }
  return stack.pop();
}

// calling the above method
// returns 9
console.log(postfixEvaluation("235*+8-"));

// returns postfix evaluation can't be performed
console.log(postfixEvaluation("23*+"));
