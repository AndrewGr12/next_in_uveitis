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

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('newsletter-form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent page reload
  
      // Get form values
      const firstName = document.getElementById('first-name').value;
      const lastName = document.getElementById('last-name').value;
      const email = document.getElementById('email').value;
  
      // Create data object
      const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email
      };
  
      // Send to backend (you'll change this URL to your actual endpoint)
      fetch('https://your-backend-url.com/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (response.ok) {
          alert('✅ You’re subscribed!');
          form.reset(); // Clear form
        } else {
          throw new Error('Subscription failed.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('❌ There was an issue. Please try again.');
      });
    });
  });