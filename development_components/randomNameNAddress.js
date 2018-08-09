var random = require('random-name')
var faker = require('faker');

faker.locale = "en_US";

//random provides first, middle, and last names.

//random name generator 
// for(var i = 0; i<1000; i++){
//     console.log(i, random.first() +' '+ random.first());
// }

//random address generator
for(var i = 0; i<1000; i++){
    console.log(i, faker.fake("{{address.streetAddress}}"));
}

