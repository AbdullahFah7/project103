const str = `The quick brown fox jumps over the lazy dog. The dog, named Rover, was too lazy to chase the fox. Rover's owner, 
a man named John, was reading a book under the shade of a tree. The book, titled "Adventures in the Wild", was a gift from his 
friend, Jane. Jane, a wildlife photographer, had many adventures of her own.`;

let myRegex = str.match(/was/g)
console.log(myRegex)
console.log(myRegex.length)