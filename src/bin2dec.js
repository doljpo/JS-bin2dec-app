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
	hideWarning();
	let input = e.key;
		
	if (maxLengthNotReached(input) && isValidInput(input)) {
		computeInput(input);
	}
	else {
		showWarning(input);
		e.preventDefault();
	}
});

function computeInput(input) {
	let binary = BINARY_INPUT.value + input;
	convert(binary);
}

function isValidInput(input) {	
	return VALID_KEYS.includes(input);
}

function maxLengthNotReached(character) {
	if (isBinary(character)) {
		return (BINARY_INPUT.value.length + 1) <= BINARY_MAX_LENGTH;
	}

	return true;
}

function isBinary(character) {
	return character.match(/^[0-1]+$/g);
}

function showWarning(character) {	
	if (isBinary(character)) {
		document.getElementById('warning').innerText = "Converter max length of binary reached (" + BINARY_MAX_LENGTH + " digits)";
	} else {
		document.getElementById('warning').innerText = "Invalid character '" + character + "' (binary accepts only 1 and 0)";	
	}
}

function hideWarning() {
	document.getElementById('warning').innerText = '';	
}

function convert(binary) {	
	let decimalValue = 0;
	let pow = binary.length - 1;

	for (let index = 0; index < binary.length; index++) {
		const digit = binary[index];		
		decimalValue += (digit * Math.pow(2, pow));
		pow--;
	}

	RESULT.value = decimalValue;
}

function reset() {
	BINARY_INPUT.value = '';
	RESULT.value = '';
	hideWarning();
}
