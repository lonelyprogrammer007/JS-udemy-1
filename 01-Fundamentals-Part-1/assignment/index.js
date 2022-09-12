const country = "Colombia";
const continent = "South America";
let population = 422_500_000;
const isIsland = false;
let language;

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

language = "Spanish";

/* If your country split in half, and each half would contain half the population,
then how many people would live in each half? */

console.log(`in each half would live ${population / 2} people`);

/* Increase the population of your country by 1 and log the result to the console */

population++;
console.log(population);

/* Finland has a population of 6 million. Does your country have more people than
Finland? */

console.log(
  `${country} has ${
    population > 6_000_000 ? "" : "not"
  } more people than Finland`
);

/* The average population of a country is 33 million people. Does your country
have less people than the average country? */

console.log(
  `${country} have ${
    population > 33_000_000 ? "more" : "less"
  } people than the average country`
);

/* Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese */

const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description);
