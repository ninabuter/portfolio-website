// Dynamic greeting
const hour = new Date().getHours()
let message;
if (hour < 12) message = "Good Morning \u{1F31E}";
else if (hour < 18) message = "Good afternoon \u{1F308}";
else message = "Good evening \u{1F31D}";

let greeting = document.getElementById("greeting")
greeting.textContent = message;

// Responsive image (would be fun!!)
// const img = document.getElementById("profile");
// img.addEventListener("mouseenter", () => img.src = "images/fun_photo.jpg");
// img.addEventListener("mouseleave", () => img.src = "images/IMG_5342.jpg");

// console.log("test")

// Navigation
function navigation(a) {
    let pageTopics = a.parentElement.children;
    Array.from(pageTopics).forEach((child) => {
        if (child !== a) {
            let href = child.getAttribute("href").substring(1);
            document.getElementById(href).style.display = "none"
        } else {
            let href = a.getAttribute("href").substring(1);
            document.getElementById(href).style.display = "block"
        }
    });
}