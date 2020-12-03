function main() {
	fetch("./data.txt")
	.then(response => response.text())
	.then(data => {
		data = data.split("\n");
		for(var index = 0; index < data.length ; ++index) {
			data[index] = parseInt(data[index]);
		}
		data.splice(-1, 1);

		var a_data = 0;
		var b_data = 0;
		for(var a = 0; a < data.length; ++a) {
			for(var b = 0; b < data.length; ++b) {
				a_data = parseInt(data[a]);
				b_data = parseInt(data[b]);
				var sum = a_data + b_data;
				if(sum == 2020) {
					return a_data * b_data;
				}
			}
		}
	}).then(answer => {
		var aDom = document.getElementById("answer");
		aDom.innerHTML = answer;
	});
}

document.addEventListener("DOMContentLoaded", function(event) {
	main();
});
