const school = 'RAJ UK Uttara Model School';
console.log(school); // mixcase
console.log(school.toLowerCase()); //lowercase
console.log(school.toUpperCase()); //uppercase

//uppercase: ABCD EFG
//lowercase: abcd efg
const subject = 'Chemistry';
const book = 'chemistry';

if(subject.toLowerCase() === book.toLowerCase()){
    console.log('I am reading book.');
}
else{
    console.log('I am not reading book.');
}

const drink = ' water';
const liquid = '  water  ';

if(drink.trim() === liquid.trim()){
    console.log('Water is life.');
}
else{
    console.log('Water is not life.');
}