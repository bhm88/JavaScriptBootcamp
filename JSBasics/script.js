console.log('hello from external js file')


// here  in js use single quotes
var firstName='John';
var age=31;

var fullAge=true;

var job;

console.log(firstName)
console.log(age)
console.log(fullAge)
console.log(job)

job='engineer'
console.log(job)


/*
* multiline comments 

*/

// variable  mutation and type coersion

var lastName='hiremath'
var age=31;
// type coersion example
console.log(lastName + '' + age)

var profession,isMarried;
profession='developer';

isMarried=true;
// type coersion example
console.log(lastName + '' + 'is a ' + age + 'year old ' + 'working as a ' + profession + 'is he married ?' + isMarried);

//variable mutation
age='forty one'
profession='driver'
alert(lastName + '' + 'is a ' + age + 'year old ' + 'working as a ' + profession + 'is he married ?' + isMarried);

var locaation=prompt('wts ur location ?');
console.log(lastName + '' + 'is a ' + age + 'year old ' + 'working as a ' + profession + 'is he married ?' + isMarried + 'his location is ' + locaation);

