// variables
var a, b;
var operation;
var result = document.getElementsByName("result")[0];
var checkPoint = false; // is used for adding only one point to number

// add number
function addNumber (number) {
   // looking for operation before number
   if (result.value != "" && isNaN(result.value)) {
      result.value = "";
      result.value += number;
      checkPoint = true;

   }
   else {
      result.value += number;
      checkPoint = true;
   }
}

// add operation
function addOperation (op) {
     a = result.value;
     checkPoint = false;
     result.value = "";
     result.value = op;
     operation = result.value;
}

// add point
function addPoint () {
   if (checkPoint) {
      result.value += ".";
      checkPoint = false;
   }
}

// solution
function solution (firstArgument, secondArgument, numberOperation) {
   firstArgumentNumber = +firstArgument;
   secondArgumentNumber = +secondArgument;
   switch(numberOperation) {
      case "+":
         return firstArgumentNumber + secondArgumentNumber;
         break;
      case "-":
         return firstArgumentNumber - secondArgumentNumber;
         break;
      case "*":
         return firstArgumentNumber * secondArgumentNumber;
         break;
      case "/":
         if (secondArgumentNumber == 0) {
            return "division by zero";
         }
         else {
            return firstArgumentNumber / secondArgumentNumber;
         }
      default:
         return "unexpected token";
   }
}

// add plus or minus
function addPlusMinus () {
   if (isNaN(result.value.charAt(0))) { // delete minus
      result.value = result.value.substring(1, result.value.length);
   }
   else { // add minus
      result.value = "-" + result.value;
   }
}

// button "clear"
document.getElementsByName("clear")[0].onclick = function () {
   result.value = "";
}

// button "point"
document.getElementsByName("point")[0].onclick = function () {
   addPoint();
}

// buttons "numbers"
document.getElementsByName("zero")[0].onclick = function () {
   addNumber(document.getElementsByName("zero")[0].value);
}
document.getElementsByName("one")[0].onclick = function () {
   addNumber(document.getElementsByName("one")[0].value);
}
document.getElementsByName("two")[0].onclick = function () {
   addNumber(document.getElementsByName("two")[0].value);
}
document.getElementsByName("three")[0].onclick = function () {
   addNumber(document.getElementsByName("three")[0].value);
}
document.getElementsByName("four")[0].onclick = function () {
   addNumber(document.getElementsByName("four")[0].value);
}
document.getElementsByName("five")[0].onclick = function () {
   addNumber(document.getElementsByName("five")[0].value);
}
document.getElementsByName("six")[0].onclick = function () {
   addNumber(document.getElementsByName("six")[0].value);
}
document.getElementsByName("seven")[0].onclick = function () {
   addNumber(document.getElementsByName("seven")[0].value);
}
document.getElementsByName("eight")[0].onclick = function () {
   addNumber(document.getElementsByName("eight")[0].value);
}
document.getElementsByName("nine")[0].onclick = function () {
   addNumber(document.getElementsByName("nine")[0].value);
}

// buttons "operations"
document.getElementsByName("plus")[0].onclick = function () {
   addOperation("+");
}
document.getElementsByName("minus")[0].onclick = function () {
   addOperation("-");
}
document.getElementsByName("multiplication")[0].onclick = function () {
   addOperation("*");
}
document.getElementsByName("division")[0].onclick = function () {
   addOperation("/");
}
document.getElementsByName("plusmn")[0].onclick = function () {
   addPlusMinus();
}

// button "solution"
document.getElementsByName("equally")[0].onclick = function () {
   b = result.value;
   result.value = solution(a, b, operation);
}