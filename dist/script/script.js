const cartItems = document.querySelector(".cart-items")
const subtotal = document.querySelector(".subtotal")
const menuButton = document.querySelector(".menu-button")
const burger = document.querySelector(".burger")
const menu = document.querySelector(".menu")
const cart = document.querySelector(".cart")
const closeCart = document.querySelector(".close")
const cartButton = document.querySelector(".cart-button")
let num = 0

// burger
menuButton.addEventListener("click", openBurger)

// cart close and open
closeCart.addEventListener("click", () =>  cart.classList.remove("open"))
cartButton.addEventListener("click", () =>  cart.classList.add("open"))


// onload
if(localStorage.getItem("cart-storage")){
cartItems.innerHTML = localStorage.getItem("cart-storage")
num = parseInt(localStorage.getItem("cart-num"))
cartButton.setAttribute("data-count", `${num}`)
subtotal.innerHTML = `${ num * 15.00 }`}


//// add item from cart
const addToCart = document.getElementById("add-to-cart")
if(addToCart) addToCart.addEventListener("click", addItem)

//// delete item from cart
const remove = document.getElementById("remove")
if(remove) remove.addEventListener("click", deleteItem)

// checkout
const checkout = document.getElementById("checkout")
if(checkout) checkout.addEventListener("click", check)



function openBurger(){
    burger.classList.toggle("open")
    menu.classList.toggle("open")
}



function addItem(){
    cart.classList.add("open")
    let qnty = document.querySelector(".qnty")
    if (!qnty.value>0) qnty.value = 1

    num  += parseInt(qnty.value)
    cartItems.innerHTML =   `<a id="remove" class="close">&times;</a>
                    <img class="front" src="./img/front.jpg" alt="front">
                    <div class="product-des">
                        <h3 class="product-name">THE GOOD MORNING</h3>
                        <p>$ <span class="price"> 15.00 </span> USD</p>
                    </div>
                    <div class="quantity">${ num }</div>`
    cartButton.setAttribute("data-count", `${ num }`)
    subtotal.innerHTML = `${ num * 15.00 }`
    localStorage.setItem("cart-storage", cartItems.innerHTML)
    localStorage.setItem("cart-num", num)
    
    const remove = document.getElementById("remove")
    if(remove) remove.addEventListener("click", deleteItem)
}


function deleteItem(){
cartItems.innerHTML = "<p>No items found.</p>"
num = 0
cartButton.setAttribute("data-count", `${ num }`)
subtotal.innerHTML = `${ num * 15.00 }`

localStorage.setItem("cart-storage", cartItems.innerHTML)
localStorage.setItem("cart-num", num)
}



function check() {
    checkout.textContent = "Out of stock!"
}