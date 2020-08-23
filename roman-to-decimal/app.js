const btn = document.querySelector('.btn');
const radioInputs = document.querySelectorAll('input[type="radio"]');
const labels = document.querySelectorAll('.text-label');
const inputs = document.querySelectorAll('input[type="text"]');

const [input, output] = inputs;
const symbolsVal = {
	i: 1,
	v: 5,
	x: 10,
	l: 50,
	c: 100,
	d: 500,
	m: 1000,
};

const romanRegex = /^[ivxlcdm]+$/i;
const decimalRegex = /^[0-9]+$/;

let isRomanChecked = radioInputs[0].checked;

radioInputs.forEach((input) =>
	input.addEventListener('change', () => {
		reset();

		if (input.checked === true && input.id === 'decimal') {
			isRomanChecked = false;
			[labels[0].textContent, labels[1].textContent] = [
				labels[1].textContent,
				labels[0].textContent,
			];
		} else {
			isRomanChecked = true;
			[labels[0].textContent, labels[1].textContent] = [
				labels[1].textContent,
				labels[0].textContent,
			];
		}
	})
);

input.addEventListener('keyup', () => {
	if (romanRegex.test(input.value)) {
		input.value = input.value.toUpperCase();
		input.style.borderColor = '#ccc';
	} else {
		input.style.borderColor = '#FF6347';
	}
});

function reset() {
	input.value = '';
	output.value = '';
	input.style.borderColor = '#ccc';
}

function convertNumber() {
	const inputValue = input.value.toLowerCase();

	if (isRomanChecked) {
		if (romanRegex.test(inputValue)) {
			let number = 0;

			for (let i = inputValue.length - 1; i >= 0; i--) {
				if (
					symbolsVal[inputValue[i]] > number ||
					inputValue[i] === inputValue[i + 1]
				) {
					number += symbolsVal[inputValue[i]];
				} else {
					number -= symbolsVal[inputValue[i]];
				}
			}

			output.value = number.toString();
		} else {
			input.style.borderColor = '#FF6347';
		}
	} else {
		if (decimalRegex.test(inputValue)) {
		} else {
			input.style.borderColor = '#FF6347';
		}
	}
}

btn.addEventListener('click', convertNumber);
