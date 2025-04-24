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
document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = document.querySelectorAll('#mobileMenu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function () {
      document.getElementById('mobileMenu').classList.remove('open');
    });
  });

  // Handle form submission
  const form = document.querySelector('#newsletter-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const data = new FormData(form);

    fetch('https://script.google.com/macros/s/AKfycbwOj7yTC1g7F9XATs4-LI4y8oXF3aZTDzJykgv0rlFUIjQ8nbK1Q6RWopvI-O6DoyzDhA/exec', {
      method: 'POST',
      body: data,
    })
    .then(response => response.text())
    .then(text => {
      if (text.includes('Success')) {
        const successDiv = document.getElementById('success-message');
        successDiv.classList.add('show'); // 👈 replaces style.display = 'block'
        form.reset();
      } else {
        alert('There was a problem. Try again later.');
      }
    })
    .catch(error => {
      alert('Error: ' + error.message);
    });
  });
});

document.getElementById('subscribeButton').addEventListener('click', function(e) {
  e.preventDefault();  // Prevent the default form submission
  // Show the success message
  document.getElementById('success-message').style.display = 'block';

  // Optionally, you can hide the message after a few seconds
  setTimeout(function() {
    document.getElementById('success-message').style.display = 'none';
  }, 3000); // Hide after 3 seconds
});