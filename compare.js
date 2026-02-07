const subject = 'Chemistry';
const book = 'ChemIsTry';

if(subject.toLowerCase() === book.toLowerCase()){
    console.log('its chemistry');
}
else {
    console.log('other subject');
}

// trim() string er age o porer space sorai fele....kintu vitorer space sorai na
const drink = ' water';
const liquid = 'wAter '

if(drink.trim() === liquid.trim()){
    console.log('water');
}
else {
    console.log('jibon na')
}
