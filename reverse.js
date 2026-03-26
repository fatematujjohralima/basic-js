// reverse array te use hoy
// string k split korle protita character k alada kore array return kore

const name = 'Fatema Tuj Johra Lima';

// use for-of 
let reverse = '';
for(const letter of name){
    // console.log(letter);
    reverse=letter+reverse;
   
} 
// console.log(reverse)

// use for loop
let revers = '';
for(let i = 0; i <name.length; i++){
    revers = name[i] + revers; 
}
console.log(revers);
