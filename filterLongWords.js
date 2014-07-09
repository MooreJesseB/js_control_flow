var arr = ["Banana", "Polar Bear", "Baobob Tree", "Mangosteen", "Alphabet", "knock", "bub", "plank", "harbor"]
var maxLength = 5;

var longWords = [];

for (i = 0; i < arr.length; i++) {
	if (arr[i].length > maxLength) {
		longWords.push(arr[i]);
	}
}

console.log(longWords);
