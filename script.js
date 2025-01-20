document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.wrapper');
  const logo = document.querySelector('.logo');

  wrapper.style.transform = 'translateX(-100%)';
  logo.style.transform = 'translateX(-100%)';

  setTimeout(() => {
    wrapper.style.transition = 'transform 2s ease';
    logo.style.transition = 'transform 2s ease'; // Add transition to logo as well
    wrapper.style.transform = 'translateX(0)';
    logo.style.transform = 'translateX(0)'; // Move the logo to the starting position
  }, 100); // Small delay to allow initial load
});
