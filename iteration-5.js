//5.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const overEighteen = ages.filter(function(age){
    return age >= 18 ;});

console.log(overEighteen);

//5.2
const result = ages.filter(function(numPar) {
    return numPar%2 === 0; });

    console.log(result);


//5.3 
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamerFiltered = streamers.filter((streamer) => streamer.gameMorePlayed === 'League of Legends');
console.log(streamerFiltered);

//5.4
 const streamer1 = streamers.filter((streamer) => streamer.name.includes('u'));
 console.log(streamer1);

 //5.5

 const streamer2 = streamers.filter((streamer) => {
    if (streamer.gameMorePlayed.includes('Legends')) {
        streamer.age > 35
        ? (streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase())
        : streamer.gameMorePlayed;
        return streamer;
    }
    
 });
 console.log(streamer2);

 //5.6 & //5.7

 const input = document.querySelector('input');
 const button = document.querySelector('button');

 const handleInput = (event) => {
     console.log(input.value);
     const filterStreamers = streamers.filter((streamer) => 
     streamer.includes(input.value.toLowerCase())
     );
     console.log(filterStreamers);
 };

 input.addEventListener('input', handleInput);
 button.addEventListener('click', handleInput);




