/*
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
        // Removed success message handling here

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

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form from submitting to the default action (Google Sheets submission)

  // You may submit the form data to Google Sheets here using AJAX or another method
  // For now, we'll show the success message:

  document.getElementById('successMessage').style.display = 'block';
  document.getElementById('successMessage').innerHTML = 'Subscribed! ✅ 🎉';
});
*/

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
        // Show success message
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('successMessage').innerHTML = 'Subscribed! ✅';

        // Reset form after success
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