function main() {
	fetch("./data.txt")
	.then(response => response.text())
	.then(data => {
		data = data.split("\n");
		const length = data.length;
		for(var a = 0; a < length; ++a) {
			for(var b = 0; b < length; ++b) {
				const a_data = parseInt(data[a]);
				const b_data = parseInt(data[b]);
				if(a_data + b_data == 2020) {
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
