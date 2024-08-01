document.addEventListener('DOMContentLoaded', function() {
  var addToCartButton = document.querySelector('.animated-btn');
  var productHolder = document.querySelector('.buttons-holder');

  if (addToCartButton) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          addToCartButton.classList.remove('add-to-cart-fixed-btn');
        } else {
          addToCartButton.classList.add('add-to-cart-fixed-btn');
        }
      });
    }, {
      threshold: [0, 1] // Adjust the threshold as needed
    });

    // Observe the button element to stop the animation
    observer.observe(productHolder);
  }
});
