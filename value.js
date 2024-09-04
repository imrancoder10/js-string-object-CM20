const person = {
    name: 'Imran hossain',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'saintmartin', 'kuakata']
}
person.salary = 30000;
person['age'] = 35;
person['fav places'] = ['Maldives', 'bali', 'pataya'];
console.log(person);

const propName = 'profession';
person[propName] = 'devops';
console.log(person);
