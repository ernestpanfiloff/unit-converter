const unitInput = document.querySelector('#unit-input');
const convertButton = document.querySelector("#convert-button");
const mainSection = document.querySelector(".main");

let enteredUnit = null;

// Main
function main() {
    enteredUnit = unitInput.value;
    renderCards();
}

// Render cards
function renderCards() {
    let metersInFeet = enteredUnit * 3.281;
    let feetInMeters = enteredUnit / 3.281;

    mainSection.innerHTML += `<div class="card"><h2>Meter / Feet</h2><p> ${enteredUnit} meters = ${metersInFeet.toFixed(3)} feet / ${enteredUnit} feet = ${feetInMeters.toFixed(3)} meters</p></div>`

    let litersInGallons = enteredUnit / 4.546;
    let gallonsInLiters = enteredUnit * 4.546;

    mainSection.innerHTML += `<div class="card"><h2>Liters / Gallons</h2><p> ${enteredUnit} liters = ${litersInGallons.toFixed(3)} gallons / ${enteredUnit} gallons = ${gallonsInLiters.toFixed(3)} liters</p></div>`

    let kgInPounds = enteredUnit * 2.205;
    let poundsInKg = enteredUnit / 2.205;

    mainSection.innerHTML += `<div class="card"><h2>Kilograms / Pounds</h2><p> ${enteredUnit} kilograms = ${kgInPounds.toFixed(3)} pounds / ${enteredUnit} pounds = ${poundsInKg.toFixed(3)} kilograms</p></div>`
}

// Update values
function updateValues() {
    mainSection.innerHTML = "";
    enteredUnit = unitInput.value;
    renderCards();
}

// Enable the convert button when the user enters a value
function enableConvertButton() {
    convertButton.classList.remove("disabled");
    if (unitInput.value === "") {
        convertButton.classList.add("disabled");
    }
}

// Validate input (Not validating paste)
function validate(evt) {
    let theEvent = evt || window.event;

    // Handle key press
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);

    let regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

