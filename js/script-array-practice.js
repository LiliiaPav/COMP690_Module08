//STEP 1
/*
const arrMovies = ["Knockin' on Heaven's Door", "Forrest Gump", "Love Actually", "Midnight in Paris", "The Pianist"];
console.log(arrMovies[1]);
*/

//STEP 2
/*
let movies = new Array(5);
movies[0]="Knockin' on Heaven's Door";
movies[1]="Gone with the Wind";
movies[2]="Love Actually";
movies[3]="Midnight in Paris";
movies[4]="The Pianist";
console.log(movies[0]);
*/

//STEP 3
/*
let movies = new Array(5);
movies[0]="Knockin' on Heaven's Door";
movies[1]="Gone with the Wind";
movies[2]="Love Actually";
movies[3]="Midnight in Paris";
movies[4]="The Pianist";

movies[2]="Gone with the Wind";
console.log(movies.length);
*/

//STEP 4
/*
let movies = [];
movies[0]="Knockin' on Heaven's Door";
movies[1]="Forrest Gump";
movies[2]="Love Actually";
movies[3]="Midnight in Paris";
movies[4]="The Pianist";
delete movies[0];
console.log(movies);
*/

//STEP 5
/*
let movies = [];
movies[0]="Knockin' on Heaven's Door";
movies[1]="Forrest Gump";
movies[2]="Love Actually";
movies[3]="Midnight in Paris";
movies[4]="The Pianist";
movies[5]="Gone with the Wind";
movies[6]="The Others";
for (let i in movies) { console.log(movies[i]);} 
*/

//STEP 6
/*
let movies = [];
movies[0]="Knockin' on Heaven's Door";
movies[1]="Forrest Gump";
movies[2]="Love Actually";
movies[3]="Midnight in Paris";
movies[4]="The Pianist";
movies[5]="Gone with the Wind";
movies[6]="The Others";

for (const element of movies) {
  console.log(element);
}
*/

//STEP 7
/*
let movies = [];
movies[0]="Knockin' on Heaven's Door";
movies[1]="Forrest Gump";
movies[2]="Love Actually";
movies[3]="Midnight in Paris";
movies[4]="The Pianist";
movies[5]="Gone with the Wind";
movies[6]="You've Got Mail";
for (let i in movies.sort()) { console.log(movies[i]);} 
*/

//STEP 8
/*
let movies = [];
movies[0]="Knockin' on Heaven's Door";
movies[1]="Forrest Gump";
movies[2]="Love Actually";
movies[3]="Midnight in Paris";
movies[4]="The Pianist";
movies[5]="Gone with the Wind";
movies[6]="The Others";

let leastFavMovies= ["Holmes & Watson","Doom: Annihilation", "Sharknado"]; 
console.log("\nMovies I like:\n");
for (let i in movies) { console.log(movies[i]);} 
console.log("\nMovies I regret watching:\n");
for (let i in leastFavMovies) { console.log(leastFavMovies[i])} 
*/

//STEP 9
/*
let movies = [];
movies[0]="Knockin' on Heaven's Door";
movies[1]="Forrest Gump";
movies[2]="Love Actually";
movies[3]="Midnight in Paris";
movies[4]="The Pianist";
movies[5]="Gone with the Wind";
movies[6]="The Others";

let leastFavMovies= ["Holmes & Watson","Doom: Annihilation", "Sharknado"]; 

movies=movies.concat(leastFavMovies);
console.log(movies.sort().reverse());
*/

//STEP 10
/*
let movies = [];
movies[0]="Knockin' on Heaven's Door";
movies[1]="Forrest Gump";
movies[2]="Love Actually";
movies[3]="Midnight in Paris";
movies[4]="The Pianist";
movies[5]="Gone with the Wind";
movies[6]="The Others";

let leastFavMovies= ["Holmes & Watson","Doom: Annihilation", "Sharknado"]; 

movies=movies.concat(leastFavMovies);
movies.sort().reverse();
console.log(movies.slice(-1));
*/

//STEP 11
/*
let movies = [];
movies[0]="Knockin' on Heaven's Door";
movies[1]="Forrest Gump";
movies[2]="Love Actually";
movies[3]="Midnight in Paris";
movies[4]="The Pianist";
movies[5]="Gone with the Wind";
movies[6]="The Others";

let leastFavMovies= ["Holmes & Watson","Doom: Annihilation", "Sharknado"]; 

movies=movies.concat(leastFavMovies);
movies.sort().reverse();
console.log(movies.slice(0, 1));
*/

//STEP 12
/*
//I'm not sure that understood this task
let movies = [];
movies[0]="Knockin' on Heaven's Door";
movies[1]="Forrest Gump";
movies[2]="Love Actually";
movies[3]="Midnight in Paris";
movies[4]="The Pianist";
movies[5]="Gone with the Wind";
movies[6]="The Others";
movies.sort().reverse();
let leastFavMovies= ["Holmes & Watson","Doom: Annihilation", "Sharknado"]; 

movies=movies.concat(leastFavMovies);
let indexes=[];
for (let movie of leastFavMovies){
    const result = movies.findIndex((name) => name === movie);
    indexes.push(result);
}
indexes.forEach((element) => {console.log(movies[element])})
const extra=["You've Got Mail", "A Man Called Otto", "The Green Mile"];
let count=0;
indexes.forEach((element) => {
    movies[element]=extra[count];
    count+=1;
})

console.log(movies.sort());
*/

//STEP 13
/*
movies = [["You've Got Mail", 1], ["Forrest Gump", 2], ["Gone with the Wind", 3], ["Love Actually", 4], ["Midnight in Paris", 5]];
for (let movie of movies){
    let result = movie.filter((n) => typeof(n) == 'string')
    console.log(result);
}
*/

//STEP 14
/*
let employees=[];
employees.push('ZAK');
employees.push('JESSICA');
employees.push('MARK');
employees.push('FRED');
employees.push('SALLY');
const showEmployee = function (arrToShow) { 
    console.log("\nEmployees:\n");
    arrToShow.forEach(element => {
        console.log(element);
    });
    console.log("\n");
}; 

showEmployee(employees); 
*/

//STEP 15
/*
//filter out falsy items
function filterValues(arrToFilter){
    return arrToFilter.filter(i => !!i);
}

console.log(filterValues([58, '', 'abcd', true, null, false, 0]))
*/

//STEP 16
/*
function randomElement(arrayToWork){
    let elementReturn = Math.floor(Math.random() * arrayToWork.length);
    return arrayToWork[elementReturn];
}

console.log(randomElement([77, 88, 75, 17, 95, 85, 99, 100, 60, 68]));
*/

//STEP 17
/*
function largestElement(arrayToWork){
    let sortedArr= arrayToWork.sort((a,b) => b-a);
    return sortedArr[0];
}

console.log(largestElement([77, 88, 75, 17, 95, 85, 99, 100, 60, 68]));
*/