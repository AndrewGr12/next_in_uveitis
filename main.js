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

// Add this inside a <script> tag or in your JS file
if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
    document.body.classList.add('chrome-browser');
  }

  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
  
    fetch(form.action, {
      method: 'POST',
      body: data,
    }).then(response => {
      if (response.ok) {
        alert('Thanks for subscribing!');
        form.reset();
      } else {
        alert('There was a problem. Try again later.');
      }
    });
  });
