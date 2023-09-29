// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Image slideshow
let slideIndex = 0;
const images = ["img/image1.jpg", "img/image2.jpg", "img/image3.jpg"]; // Replace with your image file paths

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (n < 0) {
        slideIndex = slides.length - 1;
    } else if (n >= slides.length) {
        slideIndex = 0;
    }
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

showSlide(slideIndex);

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting (for demonstration purposes)

    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Perform form validation here if needed

    // Display a confirmation message (replace with actual form submission logic)
    const confirmationMessage = `Thank you, ${name}! Your message has been submitted. We will contact you at ${email}. Message: ${message}`;
    alert(confirmationMessage);

    // Clear the form fields (optional)
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});

document.querySelectorAll('.social-button').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const socialMediaURL = this.getAttribute('href');
        window.open(socialMediaURL, '_blank');
    });
});