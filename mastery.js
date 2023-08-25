//Перегрузка функций в JS

// getRectangleArea(x1, y1, x2, y2) или
// getRectangleArea(width, height)
function getRectangleArea(x1, y1, x2, y2) {
  if (arguments.length == 2) return x1 * y1;
  return x1 + y1 + x2 + y2;
}

console.log("Second function", getRectangleArea(1, 2, 3, 4));
console.log("First function", getRectangleArea(2, 3));

function squareOrSum(a, b, c) {
  return arguments.length == 2 ? a * b : a + b + c;
}

console.log("Square function", squareOrSum(2, 3));
console.log("Sum function", squareOrSum(2, 3, 4));
