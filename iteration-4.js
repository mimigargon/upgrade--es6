const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

//4.1
const usersName = users.map(user => user.name);
console.log(usersName);

//4.2
const newUsersName = users.map(user => {
	if (user.name[0] == 'A') {
		user.name = 'Anacleto';
		
	}
}); 
console.log(users);

//4.3
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const myPlaces = cities.map(city => {
	if(city.isVisited === true) {
		city.name = city.name + " " + 'Visitado';
	}
});
console.log(cities);




