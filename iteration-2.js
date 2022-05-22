//2.1
const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const {title} = game;
console.log(game.title);
const {gender} = game;
console.log(gender[0], gender[1], gender[2]);
const {year} = game;
console.log(game.year) 

//2.2
const fruits = ['Banana', 'Strawberry', 'Orange'];

const fruit1 = fruits[0];
console.log(fruit1);
const fruit2 = fruits[1];
console.log(fruit2);
const fruit3 = fruits[2];
console.log(fruit3);

//2.3
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

const {name} = animalFunction();
console.log(name);
const {race} = animalFunction();
console.log(race); 

//2.4
const car = {brand: 'Mazda 6', itv: [2015, 2011, 2020] }

const {brand} = car;
console.log(car.brand);
const {itv} = car;
console.log(car.itv);
const year1 = itv[0];
console.log(year1);
const year2 = itv[1];
console.log(year2);
const year3 = itv[2];
console.log(year3);
