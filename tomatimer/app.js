const timerInput = document.querySelectorAll('.timer-input');
const presets = document.querySelectorAll('.preset');
const presetsContainer = document.querySelector('.presets-container');
const btn = document.querySelector('.btn');

const [minInput, secInput] = timerInput;

const imgSrc = ['./img/play-btn.svg', './img/pause-btn.svg'];

let isTimerActive = false;
let tomatimer;

// Input validation
timerInput.forEach(input => input.addEventListener('change', () => {
    if (/^[0-9]+$/.test(input.value)) {
        if (input.value.length === 1) {
            input.value = `0${input.value}`;
        } else if (input.value.length === 0) {
            input.value = '00';
        }
    } else {
        input.value = '00';
    }
}));

// Choose timer preset
presets.forEach(element => element.addEventListener('click', () => {
    if (!isTimerActive) {
        minInput.value = element.childNodes[1].firstChild.textContent;
        secInput.value = '00';
    }
}));

function setProps(isActive) {
    if (isActive) {
        timerInput.forEach(input => input.readOnly = true);
        presetsContainer.classList.add('not-active');
        btn.src = imgSrc[1];
    } else {
        timerInput.forEach(input => input.readOnly = false);
        presetsContainer.classList.remove('not-active');
        btn.src = imgSrc[0];
    }
}

// Start button
btn.addEventListener('click', () => {
    if (isTimerActive) {
        isTimerActive = false;
        setProps(isTimerActive);
        clearInterval(tomatimer);
    } else {
        isTimerActive = true;
        setProps(isTimerActive);

        tomatimer = setInterval(() => {
            if (minInput.value === '00' && secInput.value === '00') {
                
                // TODO: add on timer end event, a modal with a notification

                isTimerActive = false;
                clearInterval(tomatimer);
                setProps(isTimerActive);
                alert('The timer is over!');
            } else if (secInput.value === '00') {
                secInput.value = '59';
                minInput.value = (parseInt(minInput.value, 10) - 1) < 10 ? `0${parseInt(minInput.value, 10) - 1}` : parseInt(minInput.value, 10) - 1;
            } else {
                secInput.value = (parseInt(secInput.value, 10) - 1) < 10 ? `0${parseInt(secInput.value, 10) - 1}` : parseInt(secInput.value, 10) - 1;
            }
        }, 1000);
    }
});