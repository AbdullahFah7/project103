let numbers = [1, 2, [3, 4]]
let [first, second, [firstValue, secondValue]] = numbers
console.log(first, second, firstValue, secondValue)

let num1 = 5, num2 = 7;
[num1, num2] = [num1, num1]
console.log(num1, num2)