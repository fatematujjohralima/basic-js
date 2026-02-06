/* array methods
1.includes()
2.indexOf()
3.isArray()
4.join()-----returns array as a string
5.concat()
6.slice()
7.splice()
*/



const numbers = [1,2,3,4,5,6,7];
//  element push in last position
numbers.push(8);
// console.log(numbers);
// last element pop
numbers.pop();
// console.log(numbers);
// push element in first position
numbers.unshift(0);
// console.log(numbers);
// pop first element
numbers.shift();
// console.log(numbers);
// check any element exists inside an array
console.log(numbers.includes(9));
if(!numbers.includes(9)){
    numbers.push(9);
}
else{
    numbers.pop();
}
console.log(numbers);
// check array
const food = ['apple','banana','watermelon','strawberry'];
const cat='meow'
console.log(Array.isArray(food));
console.log(Array.isArray(cat));

// indexOf()---->return index if element exist
console.log(food.indexOf('banana'));
// returns array as a string
console.log(numbers.join('+'));
console.log(numbers.concat(food));
console.log(food.slice(1,3));
