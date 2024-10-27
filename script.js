document.getElementById('budget').addEventListener('input', function() {
    document.getElementById('budgetValue').textContent = this.value;
    filterByBudget(this.value);
  });
  
  function filterByBudget(maxBudget) {
    const trips = document.querySelectorAll('.trip-card');
    trips.forEach(trip => {
      const tripBudget = parseInt(trip.querySelector('p:nth-child(3)').textContent.replace('Budget: Rs', ''));
      trip.style.display = tripBudget <= maxBudget ? 'block' : 'none';
    });
  }
  
  function filterTrips(category) {
    const trips = document.querySelectorAll('.trip-card');
    trips.forEach(trip => {
      trip.style.display = trip.dataset.category === category ? 'block' : 'none';
    });
  } const navbar = document.querySelector("nav");

  // JavaScript to change navbar color on scroll
  
window.addEventListener("scroll", function() {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");  // Add scrolled class
  } else {
    navbar.classList.remove("scrolled");  // Remove scrolled class
  }
});
