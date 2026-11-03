
// Mobile navigation menu

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

// Close menu after clicking a navigation link

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
    });
});

// Automatically update the copyright year

document.getElementById("year").textContent =
    new Date().getFullYear();

// Contact form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
        return;
    }

    // Replace with your actual email address
    const myEmail = "your-email@example.com";

    const subject = encodeURIComponent(
        "Portfolio Contact from " + name
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\nMessage: " + message
    );

    window.location.href =
        "mailto:" + myEmail +
        "?subject=" + subject +
        "&body=" + body;

});