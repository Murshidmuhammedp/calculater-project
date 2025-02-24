const display = document.getElementById('display');
const historySidebar = document.getElementById('history-sidebar');
const historyList = document.getElementById('history-list');

function clearDisplay() {
    display.value = " ";
}

function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    display.value += value;
}

function calculateResult() {
    try {
        if (display.value.includes('/0')) {
            alert("Division by zero is not allowed.");
            return;
        }
        const result = eval(display.value);
        addToHistory(display.value, result);
        display.value = result;
    } catch (error) {
        alert("Invalid calculation.");
    }
}

function addToHistory(calculation, result) {
    const listItem = document.createElement('li');
    listItem.textContent = `${calculation} = ${result}`;
    historyList.appendChild(listItem);
}

function toggleHistory() {
    if (historySidebar.style.display === "none" || historySidebar.style.display === "") {
        historySidebar.style.display = "block";
    } else {
        historySidebar.style.display = "none";
    }
}

document.addEventListener('keydown', (e) => {
    if (!isNaN(e.key) || ['+', '-', '*', '/'].includes(e.key)) {
        appendToDisplay(e.key);
    } else if (e.key === 'Enter') {
        calculateResult();
    } else if (e.key === 'Backspace') {
        deleteLastChar();
    } else if (e.key === 'Escape') {
        clearDisplay();
    }
});