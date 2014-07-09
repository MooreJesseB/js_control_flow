var data = require("./products.json");
var items = data.items;
var counter = 0;

// Soultion #1
console.log("\n*\n*\n*\nSolution #1");
for (var i = 0, counter = 0; i < items.length; i++) {
	if (items[i].kind === "shopping#product") {
		counter++;
	}
}
console.log("\n*\n*\n*\nThe total number of shopping#products is: " + counter);
console.log("An alternative way to get this value is to read the 'currentItemCount : 25' key near the top of the data structure.")

// Solution #2 - I didn't have to but I wanted to try a nested loop.
console.log("\n*\n*\n*\nSolution #2");
for (var i = 0, counter = 0; i < items.length; i++) {
	for (var j = 0; j < items[i].product.inventories.length; j++) {
		if (items[i].product.inventories[j].availability === "backorder") {
			counter++;
			console.log(data.items[i]);
			break;
		}
	}
}
console.log("\n*\n*\n*\nTotal number of items on backorder: " + counter);


// Solution #3
console.log("\n*\n*\n*\nSolution #3");
for (var i = 0, counter = 0; i < items.length; i++) {
	if (items[i].product.images.length > 1) {
		console.log(items[i]);
		counter++;
	}
}
console.log("\n*\n*\n*\nTotal number of items with more than one image link: " + counter);

// Solution # 4
console.log("\n*\n*\n*\nSolution #4");
for (var i = 0, counter = 0; i < items.length; i++) {
	if (items[i].product.brand === "Canon") {
		console.log(items[i]);
		counter++;
	}
}
console.log("\n*\n*\n*\nTotal number of 'Brand : Canon' items: " + counter);


// Solution #5
console.log("\n*\n*\n*\nSolution #5");
for (var i = 0, counter = 0; i < items.length; i++) {
	if (items[i].product.author.name === "eBay" && items[i].product.brand === "Canon") {
		console.log(items[i]);
		counter++;
	}
}

console.log("\n*\n*\n*\nTotal number of items with 'name: eBay' and 'brand: Canon': "+ counter);


// Solution #6
console.log("\n*\n*\n*\nSolution #6"); 
for (var i = 0; i < items.length; i++) {
	console.log(items[i].product.brand);
	console.log(items[i].product.inventories[0].price);
	console.log(items[i].product.images[0].link + "\n*");
}



//console.log(data["items"]);

















