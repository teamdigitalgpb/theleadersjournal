// Scroll Animation Handler
document.addEventListener('DOMContentLoaded', function() {
  // Create Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  // Add scroll-animate class and observe elements
  const elementsToAnimate = [
    // Cards
    '.intro-card',
    '.card',
    '.feature',
    '.book-card',
    // Sections
    '.section-header',
    '.hero-copy',
    '.hero-card',
    // Individual elements
    'h2',
    '.collections'
  ];

  elementsToAnimate.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
      element.classList.add('scroll-animate');
      observer.observe(element);
    });
  });

  // Add staggered delays to elements
  document.querySelectorAll('.intro-card').forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
  });

  document.querySelectorAll('.book-card').forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
  });

  document.querySelectorAll('.feature').forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
  });

  document.querySelectorAll('.card').forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
  });
});
