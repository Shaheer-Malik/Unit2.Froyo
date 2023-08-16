let flavors = prompt(
    "Please enter a comma separated list of flavors.", 
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
).split(",");

console.log(flavors);

let flavorObj = {}

flavors.forEach((flavor) => {
    if (flavor in flavorObj) {
        flavor.flavor++;
    } else {
        flavorObj.flavor = 1;
    }
});

console.log(flavorObj);