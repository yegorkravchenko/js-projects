const input = document.querySelector('#input');
const output = document.querySelector('#output');
const btn = document.querySelector('#btn');

function bin2Dec() {
    const regEx = /^[0-1]+$/;

    if (input.value.match(regEx)) {
        const binArray = input.value.split('').reverse();

        let decNumber = 0;
        for (let i = 0; i < binArray.length; i++) {
            if (binArray[i] === '1') {
                decNumber += Math.pow(2, i);
            }
        }

        output.value = decNumber.toString();
        output.style.cursor = 'input';
    } else {
        window.alert('You should enter a binary number composed by 0 and 1');
    }
}

btn.addEventListener('click', bin2Dec);