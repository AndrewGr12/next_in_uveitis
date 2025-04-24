// Toggle mobile menu
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Close menu when a link is clicked
document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = document.querySelectorAll('#mobileMenu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function () {
      document.getElementById('mobileMenu').classList.remove('open');
    });
  });

  // Newsletter sign up submission
  const newsletterForm = document.querySelector('#newsletter-form');
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const data = new FormData(newsletterForm);

    fetch('https://script.google.com/macros/s/AKfycbwOj7yTC1g7F9XATs4-LI4y8oXF3aZTDzJykgv0rlFUIjQ8nbK1Q6RWopvI-O6DoyzDhA/exec', {
      method: 'POST',
      body: data,
    })
    .then(response => response.text())
    .then(text => {
      if (text.includes('Success')) {
        // Show success message
        document.getElementById('newslettersuccessMessage').style.display = 'block';
        document.getElementById('newslettersuccessMessage').innerHTML = 'Subscribed! ✅';

        // Reset form after success
        newsletterForm.reset();
      } else {
        alert('There was a problem. Try again later.');
      }
    })
    .catch(error => {
      alert('Error: ' + error.message);
    });
  });

  // Contact us submission
  const contactForm = document.querySelector('#contact-form');
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const data = new FormData(contactForm);

    // Replace with the URL of your Google Apps Script
    fetch('https://script.google.com/macros/s/AKfycbzKksDBgMkaTXfNjxQKXQmOc3Twn2b8MrbTdw2rLImfu7OANRB4bBEsDK_s6g4TkoAuRg/exec', {
      method: 'POST',
      body: data,
    })
    .then(response => response.text())
    .then(text => {
      if (text.includes('Success')) {
        // Show success message
        const successMessage = document.getElementById('signupsuccessMessage');
        successMessage.style.display = 'block';
        successMessage.innerHTML = 'Message sent! ✅';

        // Reset form after success
        contactForm.reset();
      } else {
        alert('There was a problem. Try again later.');
      }
    })
    .catch(error => {
      alert('Error: ' + error.message);
    });
  });
});