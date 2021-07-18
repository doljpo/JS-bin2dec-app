const BINARY_INPUT = document.getElementById('binary');
const RESULT = document.getElementById('decimal');
const BINARY_MAX_LENGTH = 8;
const VALID_KEYS = [
	'0',
	'1',
	'Enter',
	'Backspace',
	'Delete',
	'Tab',
	'F5',
	'Alt',
	'ArrowLeft',
	'ArrowRight'
]

BINARY_INPUT.addEventListener('keydown', e => {
	hideWarning();
	let pressedKey = e.key;
		
	if (maxLengthNotReached(pressedKey) && isValidInput(pressedKey)) {
		computeInput(pressedKey);
	} else {
		showWarning(pressedKey);
		e.preventDefault();
	}
});

function computeInput(input) {
	if (isBinary(input)) {
		let binary = BINARY_INPUT.value + input;
		convert(binary);
	}
}

function isValidInput(input) {
	return VALID_KEYS.includes(input);
}

function maxLengthNotReached(pressedKey) {
	if (isBinary(pressedKey)) {
		return (BINARY_INPUT.value.length + 1) <= BINARY_MAX_LENGTH;
	}

	return true;
}

function isBinary(pressedKey) {
	return pressedKey.match(/^[0-1]+$/g);
}

function showWarning(pressedKey) {	
	if (isBinary(pressedKey)) {
		document.getElementById('warning').innerText = "Max length reached (" + BINARY_MAX_LENGTH + " digits)";
	} else if (!isValidInput(pressedKey)) {
		document.getElementById('warning').innerText = "Invalid character '" + pressedKey + "' (binary accepts only 1 and 0)";	
	}
}

function hideWarning() {
	document.getElementById('warning').innerText = '';	
}

function convert(pressedKey) {	
	let decimalValue = 0;
	let pow = pressedKey.length - 1;

	for (let index = 0; index < pressedKey.length; index++) {
		const digit = pressedKey[index];		
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
