function validate1(data) {
	var count = 0;
	const length = data.password.length;
	for(var index = 0; index < length; ++index) {
		var character = data.password[index];
		if(character == data.character) {
			++count;
		}
	}
	if(count < data.min || count > data.max) {
		return false;
	}
	return true;
}

function validate2(data) {
	const a = data.password[data.min - 1] == data.character;	
	const b = data.password[data.max - 1] == data.character;


	if(a && b)  {
		return false;
	}

	if(a || b) {
		return true;
	}

	return false;
}

function parse(line) {
	const split = line.split(" ");
	const minMax = split[0].split("-");
	const min = parseInt(minMax[0]);
	const max = parseInt(minMax[1]);
	const character = split[1].substring(0, split[1].length - 1);
	const password = split[2];

	return {
		min: min,
		max: max,
		character: character,
		password: password
	}
}

function main() {
	fetch("./data.txt")
	.then(response => response.text())
	.then(data => {
		var answer1 = 0;
		var answer2 = 0
		data = data.split("\n");
		const length = data.length - 1;
		for(var index = 0; index < length; ++index) {
			line = data[index];
			parsedLine = parse(line);
			if(validate1(parsedLine)) {
				answer1 += 1;
			}
			if(validate2(parsedLine)) {
				answer2 += 1;
			}
		}
		return {
			a: answer1,
			b: answer2
		}
	})
	.then(answer => {
		const answer1Dom = document.getElementById("answer1");
		answer1Dom.innerHTML = answer.a;
		const answer2Dom = document.getElementById("answer2");
		answer2Dom.innerHTML = answer.b;
	});
}

document.addEventListener("DOMContentLoaded", main);
