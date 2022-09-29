// FIXME: Functions
/* 1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console */

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const describeCountryCall1 = describeCountry("Colombia", 50.88, "Bogotá");
const describeCountryCall2 = describeCountry(
  "Estados Unidos",
  329.5,
  "Washington D. C."
);
const describeCountryCall3 = describeCountry(
  "México",
  128.9,
  "Ciudad de México"
);

console.log(describeCountryCall1);
console.log(describeCountryCall2);
console.log(describeCountryCall3);

// FIXME: Function Declarations vs. Expressions

/* 1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations) */

function percentageOfWorld1(population) {
  return (population * 100) / 7900;
}

const percentageOfWorld1Call1 = percentageOfWorld1(50.88);
const percentageOfWorld1Call2 = percentageOfWorld1(329.5);
const percentageOfWorld1Call3 = percentageOfWorld1(128.9);

console.log(percentageOfWorld1Call1);
console.log(percentageOfWorld1Call2);
console.log(percentageOfWorld1Call3);

const percentageOfWorld2 = function (population) {
  return (population * 100) / 7900;
};

const percentageOfWorld2Call1 = percentageOfWorld1(50.88);
const percentageOfWorld2Call2 = percentageOfWorld1(329.5);
const percentageOfWorld2Call3 = percentageOfWorld1(128.9);

console.log(percentageOfWorld2Call1);
console.log(percentageOfWorld2Call2);
console.log(percentageOfWorld2Call3);

// FIXME: Arrow Function

/* Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3' */

const percentageOfWorld3 = (population) => {
  return (population * 100) / 7900;
};

const percentageOfWorld3Call1 = percentageOfWorld1(50.88);
const percentageOfWorld3Call2 = percentageOfWorld1(329.5);
const percentageOfWorld3Call3 = percentageOfWorld1(128.9);

console.log(percentageOfWorld3Call1);
console.log(percentageOfWorld3Call2);
console.log(percentageOfWorld3Call3);

// FIXME: Functions Calling other Functions

/* 1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice */

const describePopulation = (
  country,
  population
) => `${country} has ${population} million people,
which is about ${percentageOfWorld1(population)}% of the world.`;

const describePopulationCall1 = describePopulation("Colombia", 50.88);
const describePopulationCall2 = describePopulation("Estados Unidos", 329.5);
const describePopulationCall3 = describePopulation("México", 128.9);

console.log(describePopulationCall1);
console.log(describePopulationCall2);
console.log(describePopulationCall3);
