const adderss = 'andorKilla';
const part = adderss.slice(2,5); //slice টুকরা(start, end before)
// console.log(part);


const sentence = 'I am a good and hardworking person.';
// console.log(sentence.split(' '));

const friendStr = 'Amena,Kamina,Jamina,Pabena';
const friends = friendStr.split(',');
console.log(friends);

const realFriend = [ 'Amena', 'Kamina', 'Jamina', 'Pabena' ] ;
console.log(realFriend.join(' '));
const revFriend = realFriend.reverse(realFriend);
console.log(revFriend);
console.log(revFriend.join(' '));
console.log(revFriend.join(','));
console.log(revFriend.join('|'));
console.log(revFriend.join('-'));