// Toggle mobile navigation links
function toggleMobileNav() {
    const mobileNavLinks = document.querySelector('.mobile-nav-links');
    mobileNavLinks.style.display = (mobileNavLinks.style.display === 'flex') ? 'none' : 'flex';
  }
  
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
  