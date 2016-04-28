window.onload = initAll;
var input = '';
var result = false;
var display_handle = document.getElementById('display');


function initAll() {
	var x = document.getElementsByClassName('button');
	for (var i = 0;i< x.length;i++) {
		x[i].onclick = function() {
			input += this.value;
			display_handle.innerHTML = input;
		}
	}

	document.getElementById('clear').onclick = clear_input;
}

function clear_input() {
	input='';
	display_handle.innerHTML = input;
}

