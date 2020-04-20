const addToCart = document.getElementById("add-to-cart")
const checkout = document.getElementById("checkout")
const container = document.querySelector(".cart-container")
const cartItems = document.querySelector(".cart-items")
const subtotal = document.querySelector(".subtotal")
const burger = document.querySelector(".burger")
const menu = document.querySelector(".menu")
const cart = document.querySelector(".cart")
const closeCart = document.querySelector(".close")
const cartButton = document.querySelector(".cart-button")
const price = document.querySelector(".price")
let qnty = document.querySelector(".qnty")
let num = 0


// onload
cartItems.innerHTML = localStorage.getItem("cart-storage")
num = parseInt(localStorage.getItem("cart-num"))
cartButton.setAttribute("data-count", `${ num }`)
subtotal.innerHTML = `${ num * 15.00 }`



// burger
burger.addEventListener("click", open)
function open(){
    burger.classList.toggle("open")
    menu.classList.toggle("open")
}

// cart
closeCart.addEventListener("click", () =>  cart.classList.remove("open"))
cartButton.addEventListener("click", () =>  cart.classList.add("open"))


// checkout
checkout.addEventListener("click", check)
function check() {
    checkout.textContent = "Out of stock!"
}




