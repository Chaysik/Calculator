window.onload = initAll;

var input = '';
var result = false;
var display_handle = document.getElementById('display');
var bin_btns = document.getElementsByClassName('bin_btn');
var octa_btns = document.getElementsByClassName('octa_btn');
var dec_btns = document.getElementsByClassName('dec_btn');
var hexa_btns = document.getElementsByClassName('hexa_btn');



function initAll() {

	/*Funkcja odpowiadajaca za pobieranie wartosci z przyciskow i wypisywanie na ekranie kalkulatora*/
	var input_buttons = document.getElementsByClassName('button');
	for (var i = 0;i< input_buttons.length;i++) {
		input_buttons[i].onclick = function() {
			input += this.value;
			display_handle.innerHTML = input;
		}
	}
	/*Koniec funkcji pobierajacej*/

	/*Funkcja odpowiadajaca za zmiane systemu*/
	var radio_buttons = document.getElementsByClassName('calc_from');
	for (var i = 0; i<radio_buttons.length; i++) {
		radio_buttons[i].onclick = function() {
			clear_display();
			if (this.value == 'bin') {
				remove_disabled(bin_btns);
				add_disabled(octa_btns);
				add_disabled(dec_btns);
				add_disabled(hexa_btns);
			}
			if (this.value == 'octa') {
				remove_disabled(bin_btns);
				remove_disabled(octa_btns);
				add_disabled(dec_btns);
				add_disabled(hexa_btns);
			}
			if (this.value == 'dec') {
				remove_disabled(bin_btns);
				remove_disabled(octa_btns);
				remove_disabled(dec_btns);
				add_disabled(hexa_btns);	
			}
			if (this.value == 'hexa') {
				remove_disabled(bin_btns);
				remove_disabled(octa_btns);
				remove_disabled(dec_btns);
				remove_disabled(hexa_btns);	
			}

		}
	}
	/*Koniec funkcji odpowiadajacej za zmiane systemu*/



	document.getElementById('clear').onclick = clear_display;
/*Koniec initAll()*/
}

function remove_disabled(btns_name) {
	for (var j = 0; j < btns_name.length; j++) {
		btns_name[j].removeAttribute('disabled');
	}
}

function add_disabled(btns_name) {
	for (var k = 0; k < btns_name.length; k++) {
		btns_name[k].setAttribute('disabled', 'disabled');
	}
}

function clear_display() {
	input='';
	display_handle.innerHTML = input;
}