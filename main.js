// Toggle mobile menu
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function () {
  console.log("DOM fully loaded ✅");

  // Close mobile menu when a link is clicked
  const menuLinks = document.querySelectorAll('#mobileMenu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function () {
      document.getElementById('mobileMenu').classList.remove('open');
    });
  });

  // Newsletter sign up submission
  const newsletterForm = document.querySelector('#newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent default form submission

      const data = new FormData(newsletterForm);

      fetch('https://script.google.com/macros/s/AKfycbxhgfcFANZSAfSYPHZXnYwaPEXmzBpgDJW5p-QuxlGP67GgtP4ytjR2JnJ7Y_sq-hLeFA/exec', {
        method: 'POST',
        body: data,
      })
      .then(response => response.text())
      .then(text => {
        if (text.includes('Success')) {
          // Show success message
          document.getElementById('newslettersuccessMessage').style.display = 'block';
          document.getElementById('newslettersuccessMessage').innerHTML = 'Subscribed! ✅ You will receive an e-mail confirmation shortly';
           // Scroll to the success message
          successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

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
  }

  // Contact us submission
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      console.log("Contact form submitted 🚀");

      const data = new FormData(contactForm);

      fetch('https://script.google.com/macros/s/AKfycbwhibZFQ4EeMHV4mln_o_uU5SwnQhH-SI_IV51nJO8-HP3YaM8VF8oruZvUbEFIt8nXuQ/exec', {
        method: 'POST',
        body: data,
      })
      .then(response => response.text())
      .then(text => {
        console.log("Response text:", text);
        if (text.includes('Success')) {
          const successMessage = document.getElementById('signupsuccessMessage');
          successMessage.style.display = 'block';
          successMessage.innerHTML = 'Message sent! ✅ Our team will reach out soon!';
           // Scroll to the success message
          successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
          contactForm.reset();
        } else {
          alert('There was a problem. Try again later.');
        }
      })
      .catch(error => {
        console.error("Error sending form:", error);
        alert('Error: ' + error.message);
      });
    });
  }

  const navItems = document.querySelectorAll('.nav-item');

  // Function to set the active class
  function setActiveNavItem() {
    navItems.forEach(item => {
      item.classList.remove('active'); // Remove 'active' class from all items
    });
    this.classList.add('active'); // Add 'active' class to the clicked item
  }

  // Attach click event listeners to each nav item
  navItems.forEach(item => {
    item.addEventListener('click', setActiveNavItem);
  });

  const navLinks = document.querySelectorAll('.nav-item');
  const currentPage = window.location.pathname.split('/').pop(); // e.g., "index.html"

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });

  const fadeElements = document.querySelectorAll('.fade-in');

  // Options for the intersection observer
  const options = {
    threshold: 0.5, // Element must be 50% visible
  };

  // Callback function to handle when element comes into view
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Apply staggered delay by setting a delay based on the index
        entry.target.style.transitionDelay = `${index * 0.2}s`; // Increase delay for later elements

        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once element has entered the viewport
      }
    });
  }, options);

  // Observe each fade-in element
  fadeElements.forEach(element => {
    observer.observe(element);
  });

  // Select all the 'read more' buttons
  const readMoreButtons = document.querySelectorAll(".read-more");

  readMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const expandable = button.previousElementSibling;

      if (expandable.classList.contains("expanded")) {
        expandable.classList.remove("expanded");
        button.textContent = "(read more)";
      } else {
        expandable.classList.add("expanded");
        button.textContent = "(read less)";
      }
    });
  });
});

