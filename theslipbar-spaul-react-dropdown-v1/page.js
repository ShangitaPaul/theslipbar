// Toggle mobile navigation links
function toggleMobileNav() {
  const mobileNavLinks = document.querySelector(".mobile-nav-links");
  mobileNavLinks.style.display =
    mobileNavLinks.style.display === "flex" ? "none" : "flex";
}

// // Mobile navigation links
// function toggleMobileNav() {
//   document.body.classList.toggle('mobile-nav-active');
// }

// Corrected JavaScript function for toggling mobile navigation

// // function toggleMobileNav() {
//   document.body.classList.toggle('mobile-nav-active');
// }

//   // Toggle mobile navigation links
// document.addEventListener('DOMContentLoaded', function () {
//     const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
//     const mobileNavLinks = document.querySelector('.mobile-nav-links');

//     mobileNavToggle.addEventListener('click', function () {
//       if (mobileNavLinks.style.display === 'flex' || mobileNavLinks.style.display === '') {
//         mobileNavLinks.style.display = 'none';
//       } else {
//         mobileNavLinks.style.display = 'flex';
//       }
//     });
//   });
function toggleDropdown() {
  const dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    const dropdowns = document.querySelector(".dropdown-content");
    if (dropdowns.classList.contains("show")) {
      dropdowns.classList.remove("show");
    }
  }
};

function toggleDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
  }
  
  const dropbtn = document.querySelector('.dropbtn');
  dropbtn.addEventListener('click', toggleDropdown);
  