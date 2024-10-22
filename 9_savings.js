const monthlySavings = (payments, cost) => {
    let tax = 0;
    let total = 0;
    if (!Array.isArray(payments))   //checking it is array or not...using isArray() method.
        return "invalid input";
    else {
        for (let i = 0; i < payments.length; i++) {
            total += payments[i];
            if (payments[i] >= 3000) {
                tax += payments[i] * 0.2;
            }
        }
    }
    let savings = total - tax - cost;
    if (savings < 0)
        return "earn more";
    else
        return savings;
}

console.log(monthlySavings([1000, 2000, 3000], 5400));;
console.log(monthlySavings([1000, 2000, 2500], 5000));;
console.log(monthlySavings([900, 2700, 3400], 10000));;
console.log(monthlySavings(100, [900, 2700, 3400]));;