var grade = function(score) {
	switch (true) {
		case score >= 90:
			return "A";
			break;
		case score >= 80:
			return "B";
			break;
		case score >= 70:
			return "C";
			break;
		case score >= 60:
			return "D";
			break;
		default:
			return "F";
			break;
	}
}
val = Math.floor(Math.random()*100)
console.log("With a value of " + val);
console.log(grade(val));