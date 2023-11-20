let ages = [25, 30, 32]
let [firstAge, secondAge, thirdAge] = ages
console.log(firstAge, secondAge, thirdAge)

/*let colors = ['red', 'green']
let [firstColor, secondColor, thirdColor] = colors
console.log(firstColor, secondColor, thirdColor)
*/

let colors = ['red', 'green', 'black']
let [firstColor, secondColor, thirdColor = 'blue'] = colors
console.log(firstColor, secondColor, thirdColor)

let ranks = ['1', '2', '3']
let [,,firstNum] = ranks 
console.log(firstNum)