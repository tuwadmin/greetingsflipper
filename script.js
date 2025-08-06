// Array of different greetings
const greetings = [
    "Hello, Friend!",
    "Hi there! 😊",
    "You are awesome!",
    "Have a great day!",
    "Keep smiling!",
    "Stay positive!"
];

// Array of background colors to switch between
const colors = [
    "#f0f8ff",
    "#e0ffe0",
    "#fff0f5",
    "#ffffe0",
    "#f5f5dc",
    "#e6e6fa"
];

let current = 0;

// This function runs when the button is clicked
function changeGreeting() {
    // Move to the next message/color
    current = (current + 1) % greetings.length;

    // Change the text of the greeting
    document.getElementById("greeting").innerText = greetings[current];

    // Change the background color
    document.body.style.backgroundColor = colors[current];

}