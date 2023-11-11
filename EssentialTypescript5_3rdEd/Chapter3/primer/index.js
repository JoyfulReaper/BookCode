let hatprice = 100;
console.log(`Hat price: ${hatprice}`);
let bootsprice = "100";
console.log(`Boots price: ${bootsprice}`);

if (hatprice === bootsprice) {
    console.log("Prices are the same");
} else {
    console.log("Prices are different");
}

let totalPrice = Number(hatprice) + Number(bootsprice);
console.log(`Total price: ${totalPrice}`);

let myVariable = "Adam";
console.log(`Type: ${typeof myVariable}`);
myVariable = 100;
console.log(`Type: ${typeof myVariable}`);

let firstCity;
let secondCity = firstCity || "London";
console.log(`City: ${secondCity}`);

let taxRate; // No tax rate has been defined
console.log(`Tax rate: ${taxRate || 10}%`);
taxRate = 0; // Tax rate has been defined as zero
console.log(`Tax rate: ${taxRate || 10}%`);

let taxRate2; // No tax rate has been defined
console.log(`Tax rate: ${taxRate2 ?? 10}%`);
taxRate2 = 0; // Tax rate has been defined as zero
console.log(`Tax rate: ${taxRate2 ?? 10}%`);