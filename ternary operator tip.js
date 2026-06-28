let bill = Number(prompt("Bill value: U$$ "));
let tip;

bill >= 50 && bill <= 300 ? tip = bill * 0.15 : tip = bill * 0.2;

let totalValue = bill + tip;

console.log("The bill was", bill.toFixed(2) +", the tip was", tip.toFixed(2) +", and the total value", totalValue.toFixed(2));
