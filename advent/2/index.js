function validate(data) {
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
		var answer = 0;
		data = data.split("\n");
		const length = data.length - 1;
		for(var index = 0; index < length; ++index) {
			line = data[index];
			parsedLine = parse(line);
			if(validate(parsedLine)) {
				++answer;
			}
		}
		return answer;
	})
	.then(answer => {
		const answerDom = document.getElementById("answer");
		answerDom.innerHTML = answer;
	});
}

document.addEventListener("DOMContentLoaded", main);
