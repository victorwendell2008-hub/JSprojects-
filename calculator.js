const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculator() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}

document.querySelectorAll('#keys button').forEach((btn) => {
    btn.addEventListener('click', () => {
        const val = btn.textContent.trim();
        if (val === 'C') {
            clearDisplay();
        } else if (val === '=') {
            calculator();
        } else {
            appendToDisplay(val);
        }
    });
});