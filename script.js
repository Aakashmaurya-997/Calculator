let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function clearPrevious() {
  const currentValue = display.value;
  display.value = currentValue.substring(0, currentValue.length - 1);
}