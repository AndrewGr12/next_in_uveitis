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
      
      // Show loading indicator
      const submitButton = form.querySelector("button[type='submit']");
      const originalText = submitButton.innerHTML;
      submitButton.innerHTML = "Submitting...";
      submitButton.disabled = true;
      
      // Create URL with form data as query parameters
      const scriptURL = "https://script.google.com/macros/s/AKfycbyl4RdFZsJEud_nwesQ4X835KfxhTe9dIccUMNVxRGiLeNFVKlnM_Q4g-XO6HLVJDEBhw/exec";
      const url = `${scriptURL}?firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}&email=${encodeURIComponent(email)}`;
      
      // Use fetch with GET method instead
      fetch(url, {
        method: "GET",
        mode: "no-cors"
      })
      .then(() => {
        alert("✅ Thanks for subscribing!");
        form.reset();
      })
      .catch((err) => {
        console.error("Submission error", err);
        alert("❌ Something went wrong. Please try again.");
      })
      .finally(() => {
        // Reset button state
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
      });
    });
  });