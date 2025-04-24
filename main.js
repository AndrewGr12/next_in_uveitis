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

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("newsletter-form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent traditional form submission
  
      const firstName = document.getElementById("first-name").value;
      const lastName = document.getElementById("last-name").value;
      const email = document.getElementById("email").value;
  
      fetch("https://script.google.com/macros/s/AKfycbyl4RdFZsJEud_nwesQ4X835KfxhTe9dIccUMNVxRGiLeNFVKlnM_Q4g-XO6HLVJDEBhw/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email
        })
      })
        .then((res) => res.text())
        .then((response) => {
          alert("✅ Thanks for subscribing!");
          form.reset(); // Clear form
        })
        .catch((err) => {
          console.error("Submission error", err);
          alert("❌ Something went wrong. Please try again.");
        });
    });
  });