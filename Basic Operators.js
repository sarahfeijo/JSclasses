const now = 2037;
const ageSarah = now - 2008;
const ageJonas = now - 1991;
console.log(ageSarah, ageJonas);

console.log(ageSarah * 2, ageJonas / 10, 2 ** 3);// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Sarah";
const lastName = "Feijó";
console.log(firstName +" "+ lastName);

let x = 10 + 5;
x += 10;
x *= 2;
x /= 2;
console.log(x);

// Comparison operators
console.log(ageSarah > ageJonas); // If that's true, it shows true, if it's nor, then it shows false. That's a condition in a console.log
console.log(ageSarah >= 18); // Only results
const isFullAge = ageSarah >= 18;// A boolean cause that's is a condition

console.log(typeof isFullAge);
console.log(now - 1991 > now - 2008);
