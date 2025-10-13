// First test to include an JS element in my portfolio
document.getElementById("date").textContent =
    "Today is " + new Date().toDateString();

// Dynamic greeting
const hour = new Date().getHours()
let message;
if (hour < 12) message = "Good Morning";
else if (hour < 18) message = "Good afternoon #1F31E";
else message = "Good evening";

let greeting = document.getElementById("greeting")
greeting.textContent = message;

// console.log("test")