document.addEventListener("DOMContentLoaded", function(event) {

  var cartCountDisplay = document.querySelector("#cart-item-count");
  var addItemButtons = document.querySelectorAll(".add-item-btn")
  var cartButton = document.querySelector("#cart-button")
  var cartModal = document.querySelector('.cart-modal')
  var closeModalBtn = document.querySelector('.close-modal')
  var clearBtn = document.querySelector('.clear-button')
  var shoppingList = document.querySelector('.shopping-list')
  var cartTotalNumber = document.querySelector('.cart-total-number')

  var itemsInCart = []
  var cartCount
  var cartTotal = 0

  ;(function addToCart(){
      addItemButtons.forEach(function(button){
        button.addEventListener('click', function(){
          var itemName = button.parentNode.querySelector('.item-name').textContent
          var itemPrice = button.parentNode.querySelector('.item-price').textContent
          itemsInCart.push(`${itemName} ${itemPrice}`)
          shoppingList.appendChild(document.createElement('p')).innerHTML=`${itemName} <span class="added-item-price">${itemPrice}</span>`
          updateCartCount()
          updateCartTotal(itemPrice)
        })
      })
  })()

  function updateCartCount(){
    cartCount = itemsInCart.length
    cartCountDisplay.textContent = `(${cartCount})`
  }

  function updateCartTotal(total) {
    if(typeof total === 'string'){
      var priceWithoutDollarSign = Number(total.replace(/[^0-9\.]+/g,""))
      cartTotal += priceWithoutDollarSign
    }
    cartTotal = Math.round(cartTotal * 100) / 100
    cartTotalNumber.textContent = cartTotal
  }

  ;(function openModal(){
    cartButton.addEventListener('click', function(){
        cartModal.style.display = "block"
      })
  })()

  ;(function closeModal(){
    closeModalBtn.addEventListener('click', function(){
      cartModal.style.display = "none"
    })
    cartModal.addEventListener("click", function(event){
      if (event.target == cartModal) {
        cartModal.style.display = "none"
        }
      })
  })()

  ;(function clearCart(){
    clearBtn.addEventListener('click', function(){
      cartTotal = 0
      itemsInCart = []
      shoppingList.innerHTML = ''
      updateCartCount()
      updateCartTotal(0)
    })
  })()

})
