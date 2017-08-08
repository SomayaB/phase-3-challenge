document.addEventListener("DOMContentLoaded", function(event) {

  var cartCountDisplay = document.querySelector("#cart-item-count");
  var addItemButtons = document.querySelectorAll(".add-item-btn")
  var cartButton = document.querySelector("#cart-button")
  var cartModal = document.querySelector('.cartModal')

  ;(function cartCount(){
      var itemsInCart = []
      var cartCount = 0
      addItemButtons.forEach(function(button){
        button.addEventListener('click', function(){
          var itemName = button.parentNode.querySelector('.item-name').textContent
          var itemPrice = button.parentNode.querySelector('.item-price').textContent
          itemsInCart.push(`${itemName} ${itemPrice}`)
          console.log(itemsInCart);
          cartCount = itemsInCart.length
          cartCountDisplay.textContent = `(${cartCount})`
        })
      })
  })()

  ;(function openModal(){
    cartButton.addEventListener('click', function(){
      cartButton.addEventListener("click", function(){
        cartModal.style.display = "block"
      })
    })
  })()



})
