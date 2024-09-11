'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 534;


function logger() {
    console.log('My name is Abdulhazim');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

// fruitProcessor(5, 0);
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


// function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Abdulhazim'));
console.log(yearsUntilRetirement(1980, 'Ideee'));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }


}
console.log(yearsUntilRetirement(1991, 'Ideee'));
console.log(yearsUntilRetirement(1970, 'Babs'));


const calcAverage = (a, b, c) => (a + b + c) / 3;
const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphin wins (${avgDolphins} vs ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas wins (${avgKoalas} vs ${avgDolphins})`)
    } else {
        console.log('No team wins...')
    }
}

checkWinner(avgDolphins, avgKoalas);

const friend1 = 'Crownfit';
const friend2 = 'Tom';
const friend3 = 'John';

const friends = ['Crownfit', 'Tom', 'John'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(years[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = "Abdulhazim";
const abdulhazim = [firstName, 'Adebiyi', 2037 - 1991, 'teacher', friends];
console.log(abdulhazim);

// exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

const friends = ['Crownfit', 'Tom', 'John'];
// add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('Boss');
console.log(friends);

// remove elements
friends.pop(); // last element
friends.pop(); // last element
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Crownfit'));
console.log(friends.indexOf('Femi'));

friends.push(23);
console.log(friends.includes('Crownfit'));
console.log(friends.includes('Femi'));
console.log(friends.includes(23));

if (friends.includes('Tom')) {
    console.log('You have a friend called Tom');
}

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

// console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(bills, tips, totals);


const abdulhazim = {
    firstName: 'Abdulhazim',
    lastName: 'Adebiyi',
    age: 2037 - 1997,
    job: 'teacher',
    friends: ['Crownfit', 'Tom', 'John']
};
console.log(abdulhazim);

console.log(abdulhazim.lastName);
console.log(abdulhazim['lastName']);

const nameKey = 'Name';
console.log(abdulhazim['first' + nameKey]);
console.log(abdulhazim['last' + nameKey]);

const interestedIn = prompt('What do you want to know about abdulhazim? Choose between firstName, lastName, age, job and friends');


if (abdulhazim[interestedIn]) {
    console.log(abdulhazim[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}

abdulhazim.location = 'Nigeria';
abdulhazim['twitter'] = '@ideee007';
console.log(abdulhazim);

console.log(`${abdulhazim.firstName} has ${abdulhazim.friends.length} friends and his bestfriend is called ${abdulhazim.friends[0]}`);
*/

// const abdulhazim = {
//     firstName: 'Abdulhazim',
//     lastName: 'Adebiyi',
//     birthYear: 1991
//     age: 2037 - 1997,
//     job: 'teacher',
//     friends: ['Crownfit', 'Tom', 'John'],
//     hasDriversLicense: true,

//     calcAge: function (birthYear) {
//         return 2037 - birthYear;
//     }
// };

// console.log(abdulhazim.calcAge(1991));
// console.log(abdulhazim[calcAge(1991)]);

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);
// console.log(avgDolphins, avgKoalas);

// const checkWinner = function(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win ${avgdDolphins} vs ${avgKoalas}`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
//     } else {
//         console.log('No team wins...');
//     }
// }

// checkWinner(avgDolphins, avgKoalas);

