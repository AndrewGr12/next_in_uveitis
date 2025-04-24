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

  fetch('https://script.google.com/macros/s/AKfycbwOj7yTC1g7F9XATs4-LI4y8oXF3aZTDzJykgv0rlFUIjQ8nbK1Q6RWopvI-O6DoyzDhA/exec', {
    method: 'POST',
    body: data,
  }).then(response => response.text())
    .then(text => {
      if (text.includes('Success')) {
        // Instead of showing success on the same page, open success page in a new tab
        window.open('https://script.google.com/macros/s/AKfycbwOj7yTC1g7F9XATs4-LI4y8oXF3aZTDzJykgv0rlFUIjQ8nbK1Q6RWopvI-O6DoyzDhA/exec', '_blank');
        form.reset(); // Optionally reset the form
      } else {
        alert('There was a problem. Try again later.');
      }
    }).catch(error => {
      alert('Error: ' + error.message);
    });
});