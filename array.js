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
