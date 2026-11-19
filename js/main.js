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

