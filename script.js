// First test to include an JS element in my portfolio
// document.getElementById("date").textContent =
//     "Today is " + new Date().toDateString();

// Dynamic greeting
const hour = new Date().getHours()
let message;
if (hour < 12) message = "Good Morning \u{1F31E}";
else if (hour < 18) message = "Good afternoon \u{1F308}";
else message = "Good evening \u{1F31D}";

let greeting = document.getElementById("greeting")
greeting.textContent = message;

// console.log("test")