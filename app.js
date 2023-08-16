let flavors = prompt(
	"Please enter a comma separated list of flavors",
	"vanilla,vanilla,vanilla,vanilla,strawberry,coffee,coffee"
).split(",");

let flavorObj = {};

flavors.forEach((flavor) => {
	if (flavor in flavorObj) {
		flavorObj[flavor] += 1;
	} else {
		flavorObj[flavor] = 1;
	}
});

console.log(flavors);
console.log(flavorObj);