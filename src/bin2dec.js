const BINARY_INPUT = document.getElementById('binary');
const RESULT = document.getElementById('decimal');
const WARNING = document.getElementById('warning');
const BINARY_MAX_LENGTH = 8;

BINARY_INPUT.addEventListener('keydown', e => {
	hideWarning();
	
	if (isValidInput(e.key)) {
		convert(e.key);
	} else {
		e.preventDefault();
	}
});

function hideWarning() {
	WARNING.innerText = '';	
}

function isValidInput(pressedKey) {
	if (!isBinary(pressedKey)) {
		WARNING.innerText = "Invalid character '" + pressedKey + "' (binary accepts only 1 and 0)";	
		return false;
	}

	if (maxLengthReached()) {
		WARNING.innerText = "Maximum length reached (" + BINARY_MAX_LENGTH + " digits)";
		return false;
	}

	return true;
}

function isBinary(pressedKey) {
	return pressedKey.match(/^[0-1]+$/g);
}

function maxLengthReached() {
	return (BINARY_INPUT.value.length + 1) >= BINARY_MAX_LENGTH;
}

function convert(pressedKey) {	
	let binary = BINARY_INPUT.value + pressedKey;
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
