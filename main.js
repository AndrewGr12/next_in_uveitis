/* main.js */
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
});

// Handle form submission
document.querySelector('#newsletter-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Stop the form from doing a normal submit

  const form = e.target;
  const data = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: data,
  }).then(response => response.text())
    .then(text => {
      if (text.includes('Success')) {
        // Show your custom message with a fade-in
        const successDiv = document.getElementById('success-message');
        successDiv.classList.add('show');
        form.reset();
      } else {
        alert('There was a problem. Try again later.');
      }
    }).catch(error => {
      alert('Error: ' + error.message);
    });
});