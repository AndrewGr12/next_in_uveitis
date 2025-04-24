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
// Handle form submission
document.querySelector('#newsletter-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission behavior (i.e., navigating to the success page)

  const form = e.target;
  const data = new FormData(form); // Collect form data

  fetch(form.action, {
    method: 'POST',
    body: data,
  }).then(response => response.text()) // Parse the response as text
    .then(text => {
      if (text.includes('Success')) { // Check if the response contains 'Success'
        document.getElementById("success-message").style.display = "block"; // Show success message
        form.reset(); // Optionally reset the form after submission
      } else {
        alert('There was a problem. Try again later.');
      }
    }).catch(error => {
      alert('Error: ' + error.message); // Catch any error
    });
});