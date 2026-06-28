let bills = [];
let tips = [];
let bill;
let tip;
let totalValue;

while (true) {
    bill = Number(prompt("Bill value: U$$ "));
    
    if (bill == 0) {
        break;
    }
    
    function calcTips (bill) {
        if (bill >= 50 && bill <= 300) {
            return bill * 0.15;
        }
        return bill * 0.2;
    }
    
    tip = calcTips(bill);
    totalValue = bill + tip;
    
    bills[bills.length] = bill;
    tips[tips.length] = tip;
    
    console.log("The bill was", bill.toFixed(2) +", the tip was", tip.toFixed(2) +", and the total value", totalValue.toFixed(2));
}
bills[bills.length] = tips;
console.log(bills);
