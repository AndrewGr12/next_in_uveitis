/*main.js*/
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

// Submit the form and display a success message
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: data,
  }).then(response => {
    if (response.ok) {
      document.getElementById("success-message").style.display = "block";  // Show success message
      form.reset();  // Optionally reset the form
    } else {
      alert('There was a problem. Try again later.');
    }
  });
});