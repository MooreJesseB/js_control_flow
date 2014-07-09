

var grade = function(score) {
	switch (score) {
		case 9:
			return "A";
			break;
		case 8:
			return "B";
			break;
		case 7:
			return "C";
			break;
		case 6:
			return "D";
			break;
		default:
			return "F";
			break;
	}
}
var rawScore = Math.floor(Math.random()*100)
var score = Math.floor(rawScore/10);
console.log("With a value of " + rawScore);
console.log(grade(score));