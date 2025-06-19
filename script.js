// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dummy form handler
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});
