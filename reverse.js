const sentence = 'I am learning Web Dev.';
//cont result = '.veD beW gninrael ma I';

//donal
//d
//od
//nod
//anod
// lanod

let reverse = '';
for(const letter of sentence){
    // console.log(letter);
    reverse = letter + reverse;
}
// console.log(reverse);

// =====================================================
let rev = '';
for(let i = 0 ; i< sentence.length ; i++){
    console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i];
    rev = letter + rev; 
}
// console.log(rev);

// ==================================================================

//shortcut 

const reversed = sentence.split('').reverse().join('');
console.log(reversed);