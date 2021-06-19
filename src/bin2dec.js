const BINARY_INPUT = document.getElementById('binary');
const RESULT = document.getElementById('decimal');
const BINARY_MAX_LENGTH = 8;
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

BINARY_INPUT.addEventListener('keydown', e => {
	if (isValidKey(e.key)) {
		hideWarning();

		if (inputHasValidLength(e.key))
			validateInput(e.key);
	}
	else {
		showWarning(e.key);
		e.preventDefault();
	}
});

//TODO: melhorar validação de char usando regex
function isValidKey(character) {
	return VALID_KEYS.includes(character);
}

function inputHasValidLength(character) {
	if (isBinary(character)) {
		return (BINARY_INPUT.value.length + 1) <= BINARY_MAX_LENGTH;
	}

	return true;
}

function isBinary(character) {
	return character == '1' || character == '0';
}

function showWarning(character) {
	if (character == '1' || character == '0') {
		document.getElementById('warning').innerText = "Converter max length of binary reached (" + BINARY_MAX_LENGTH + " digits)";
	} else {
		document.getElementById('warning').innerText = "Invalid character '" + character + "' (binary accepts only 1 and 0)";	
	}
}

function hideWarning() {
	document.getElementById('warning').innerText = '';	
}

function validateInput(digit) {
	let binary = BINARY_INPUT.value + digit;
	if (binary.length > BINARY_MAX_LENGTH) return;

	convert(binary);
}

function convert(binary) {	
	let decimal = 0;
	let pow = binary.length - 1;

	for (let index = 0; index < binary.length; index++) {
		const element = binary[index];		
		var calc = element * Math.pow(2, pow);
		decimal += calc;
		pow--;
	}

	RESULT.value = decimal;
}

function reset() {
	BINARY_INPUT.value = '';
	RESULT.value = '';
	hideWarning();
}
