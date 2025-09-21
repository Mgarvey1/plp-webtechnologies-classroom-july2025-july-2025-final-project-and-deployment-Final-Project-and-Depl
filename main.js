// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Contact form validation and submission
const contactForm = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if(name === "" || email === "" || message === "") {
        formMsg.textContent = "Please fill in all fields.";
        formMsg.style.color = "red";
        return;
    }

    // Simple success message (replace with server call if needed)
    formMsg.textContent = "Thank you! Your message has been sent.";
    formMsg.style.color = "green";

    contactForm.reset();
});
