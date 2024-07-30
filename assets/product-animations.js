document.addEventListener('DOMContentLoaded', function() {
  var addToCartButton = document.querySelector('.product__add-to-cart');

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
      threshold: 100 // Adjust the threshold as needed
    });

    // Observe the "Add to cart" button
    observer.observe(addToCartButton);
  }
});
