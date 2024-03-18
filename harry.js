function appendToOutput(value) {
    document.getElementById('input').value += value;
}

function calculate() {
    const expression = document.getElementById('input').value;
    const result = eval(expression);
    document.getElementById('input').value = result;
}