const VALID_KEYS = [
	'0',
	'1',
	'Backspace',
	'Delete',
	'Enter',
	'ArrowLeft',
	'ArrowUp',
	'ArrowRight',
	'ArrowDown',
	'F5'
]

document.addEventListener('keydown', e => {
	if (!VALID_KEYS.includes(e.key)) {
		e.preventDefault();
	}
	else {
		validateInput(e.key);
	}
});

function validateInput(digit) {
	let binary = document.getElementById('binary').value + digit;
	if (binary.length > 8) return;
}

function convert() {
	let binary = document.getElementById('binary').value;
	let decimal = 0;
	let pow = binary.length - 1;

	for (let index = 0; index < binary.length; index++) {
		const element = binary[index];		
		var calc = element * Math.pow(2, pow);
		decimal += calc;
		pow--;
	}

	document.getElementById('result').innerText = decimal;
}

function reset() {
	document.getElementById('binary').value = '';
	document.getElementById('result').innerText = '';
}
