// Select HTML Elements
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

// Mobile Menu Toggle
menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("show");

  // Update Button State
  const isOpen = navMenu.classList.contains("show");

  menuToggle.textContent = isOpen ? "✕" : "☰";

  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close Menu After Clicking a Link
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("show");

    menuToggle.textContent = "☰";

    menuToggle.setAttribute("aria-expanded", "false");
  });
});


// Select Elements
const seeMoreBtn = document.getElementById('see-more-btn');

const hiddenProjects = document.querySelectorAll('.hidden-project');

// See More Button Functionality
if (seeMoreBtn) {

    seeMoreBtn.addEventListener('click', function () {

        hiddenProjects.forEach(function (project) {

            project.classList.toggle('show-project');

        });

        // Update Button Text
        const isVisible = hiddenProjects[0].classList.contains('show-project');

        seeMoreBtn.textContent = isVisible ? 'See Less' : 'See More';

    });

}

// Contact Form Validation

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Get error elements
    const errorMessages = document.querySelectorAll(".error-message");
    const inputs = contactForm.querySelectorAll("input, textarea");

    // Clear previous errors
    errorMessages.forEach(function (error) {
      error.textContent = "";
    });

    inputs.forEach(function (input) {
      input.classList.remove("invalid");
    });

    let isValid = true;

    // Name validation
    if (name === "") {
      showError(0, "Name is required.");
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      showError(1, "Email is required.");
      isValid = false;
    } else if (!emailPattern.test(email)) {
      showError(1, "Please enter a valid email.");
      isValid = false;
    }

    // Message validation
    if (message === "") {
      showError(2, "Message is required.");
      isValid = false;
    }

    // Success
    if (isValid) {
      document.getElementById("form-status").textContent =
        "Validation successful! Your message is ready.";

      contactForm.reset();
    } else {
      document.getElementById("form-status").textContent = "";
    }

    // Error function
    function showError(index, message) {
      errorMessages[index].textContent = message;
      inputs[index].classList.add("invalid");
    }

  });
}

