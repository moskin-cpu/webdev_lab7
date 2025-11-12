// js/script.js
function init() {
  // Grab references to the DOM elements we need
  const input = document.getElementById('entryinput');
  const button = document.getElementById('entrybutton');
  const output = document.getElementById('textoutput');

  // Replace "YourName" with your actual name (example: "Debarlaben")
  const YOUR_NAME = 'Mark Oskin';

  // Add click event listener to the "Alert Me" div
  button.addEventListener('click', function () {
    const value = input.value; // read the text field
    // 1) Show an alert with "Name: <value>"
    alert(`${YOUR_NAME}: ${value}`);
    // 2) Update the h2 below the button with the exact contents (no name appended)
    output.textContent = value;
  });
}

window.addEventListener('load', init);
