const priceinjpy = 5000;

let currency = new Map([
    ["USD", 14000],
    ["JPY", 131],
    ["SGD", 11000],
    ["MYR", 3500],
])

let priceinidr = (currency.get("JPY")*priceinjpy);

console.log(priceinidr);