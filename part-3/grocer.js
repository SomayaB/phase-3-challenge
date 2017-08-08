document.addEventListener("DOMContentLoaded", function(event) {

  var cartCountDisplay = document.querySelector("#cart-item-count");
  var addItemButtons = document.querySelectorAll(".add-item-btn")
  var cartButton = document.querySelector("#cart-button")
  var cartModal = document.querySelector('.cart-modal')
  var closeModalBtn = document.querySelector('.close-modal')
  var shoppingList = document.querySelector('.shopping-list')
  var cartTotalNumber = document.querySelector('.cart-total-number')
  var clearBtn = document.querySelector('.clear-button')

  var itemsInCart = []
  var cartCount
  var cartTotal = 0.00


  ;(function addToCart(){
      addItemButtons.forEach(function(button){
        button.addEventListener('click', function(){
          var itemName = button.parentNode.querySelector('.item-name').textContent
          var itemPrice = button.parentNode.querySelector('.item-price').textContent
          itemsInCart.push(`${itemName} ${itemPrice}`)
          shoppingList.appendChild(document.createElement('p')).innerHTML=`${itemName} <span class="added-item-price">${itemPrice}</span>`

          //seperate this out? updateCartCount()
          cartCount = itemsInCart.length
          cartCountDisplay.textContent = `(${cartCount})`

          //seperate this out? updateCartTotal()
          var priceWithoutDollarSign = Number(itemPrice.replace(/[^0-9\.]+/g,""))
          cartTotal += priceWithoutDollarSign
          var roundedTotal = Math.round(cartTotal * 100) / 100
          cartTotalNumber.textContent = roundedTotal
        })
      })
  })()


  ;(function openModal(){
    cartButton.addEventListener('click', function(){
        cartModal.style.display = "block"
      })
  })()

  ;(function closeModal(){
    closeModalBtn.addEventListener('click', function(){
      cartModal.style.display = "none"
    })
  })()

  ;(function clearCart(){
    clearBtn.addEventListener('click', function(){
      cartCount = 0
      cartTotal = 0.00
      itemsInCart = []
      cartCountDisplay.textContent = `(${cartCount})`
      cartTotalNumber.textContent = cartTotal
      shoppingList.parentNode.removeChild(shoppingList)
    })
  })()


})
