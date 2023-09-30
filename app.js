const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const cleareBtn = document.getElementById("clear");

let action;

plusBtn.onclick = () => {
  action = "+";
};
minusBtn.onclick = () => {
  action = "-";
};
multiplyBtn.onclick = () => {
  action = "*";
};
divideBtn.onclick = () => {
  action = "/";
};
cleareBtn.onclick = () => {
  resultElement.textContent ="";
  input1.value = "";;
  input2.value = "";;
};


function printResult(result) {
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
  resultElement.textContent = result;
}

function calculateByAction(val1, val2, actionSymbol) {
  const num1 = Number(val1.value);
  const num2 = Number(val2.value);
  if (actionSymbol == "+") {
    return num1 + num2;
  }
  if (actionSymbol == "-") {
    return num1 - num2;
  }
  if (actionSymbol == "*") {
    return num1 * num2;
  }
  if (actionSymbol == "/") {
    if (num2 == 0) {
      return 0;
    } else {
      const notFixed = num1 / num2;
      if (num1 % num2 === 0) {
        return notFixed;
      } else {
        return notFixed.toFixed(1);
      }
    }
  }
}

submitBtn.onclick = () => {
  const result = calculateByAction(input1, input2, action);
  printResult(result);
};
