const age = 22;

const isAdult = age >= 18 ? "yes" : "no";
console.log(isAdult);

// Nullish Coeslancing Operator
//Null and undefined
// its used for only null and undefined
const isAuThenticatedUser = null;
const userName = isAuThenticatedUser ?? "Guest";
console.log(userName);
