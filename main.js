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

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('newsletter-form');
    const responseMsg = document.getElementById('form-response');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const data = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        email: document.getElementById('email').value
      };
  
      fetch('https://script.google.com/macros/s/AKfycbxXEhyixQQBgeR2IzfMathhinX0byHi5YbWDtEnsXI/exec', {
        method: 'POST',
        mode: 'no-cors', // Prevents CORS errors but disables response reading
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      form.reset();
      responseMsg.textContent = '✅ Thanks for subscribing!';
      responseMsg.style.color = 'green';
    });
  });

// Add this inside a <script> tag or in your JS file
if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
    document.body.classList.add('chrome-browser');
  }