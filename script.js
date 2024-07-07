function appendCharacter(character) {
    document.getElementById('display').value += character;
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/[0-9]/.test(key)) {
        appendCharacter(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
        appendCharacter(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === '.') {
        appendCharacter(key);
    }
});

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

function calculateResult() {
    let expression = document.getElementById('display').value;
    try {
        let result = eval(expression);
        document.getElementById('display').value = result;
    } 
    catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
