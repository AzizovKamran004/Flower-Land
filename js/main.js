///// SIDEBAR and ONSCROLL BG-CHANGE START/////

let navbar = document.querySelector(".navbar")
let openBtn = document.querySelector(".navbar .open-button i")
let menuLinks = document.querySelector(".menu-links")
let mainLinks = document.querySelector(".main-links")
let closeBtn = document.querySelector(".menu-links i")
let body = document.querySelector("body")

if (window.innerWidth < 1201) {
    menuLinks.appendChild(mainLinks.firstElementChild)
}

openBtn.addEventListener("click", function () {
    menuLinks.classList.remove("closed")
})

closeBtn.addEventListener("click", function () {
    menuLinks.classList.add("closed")
})

body.onscroll = function () {
    if (window.scrollY > 15) {
        navbar.classList.add("scrolled")
    }
    else {
        navbar.classList.remove("scrolled")
    }
}

///// SIDEBAR and ONSCROLL BG-CHANGE END/////



///// ADD BASKET START /////

if (localStorage.getItem("basket") == null) {
    localStorage.setItem("basket", JSON.stringify([]))
}

let addBasket = document.querySelectorAll(".flower-buttons")
let countPro = document.querySelector(".navbar .buttons sup")


for (const btn of addBasket) {
    btn.addEventListener("click", function () {

        if (localStorage.getItem("basket") == null) {
            localStorage.setItem("basket", JSON.stringify([]))
        }

        let basket = JSON.parse(localStorage.getItem("basket"))

        let id = this.getAttribute("data-id")
        let img = this.parentElement.previousElementSibling.previousElementSibling.firstElementChild.getAttribute("src")
        let name = this.parentElement.firstElementChild.innerText
        let price = this.previousElementSibling.innerText

        let exist = basket.find(pro => pro.id == id)

        if (exist == undefined) {
            let item = {
                id: id,
                image: img,
                name: name,
                price: price,
                count: 1
            }
            basket.push(item)
            countPro.innerText = basket.length
        }
        else {
            exist.count++;
        }
        localStorage.setItem("basket", JSON.stringify(basket))
    })
}
countPro.innerText = JSON.parse(localStorage.getItem("basket")).length

///// ADD BASKET END /////



///// ADD FAVORITE START /////

let addFavorite = document.querySelectorAll(".favorite")

if (localStorage.getItem("favorite") == null) {
    localStorage.setItem("favorite", JSON.stringify([]))
}

for (const btn of addFavorite) {
    btn.addEventListener("click", function () {

        if (!btn.firstElementChild.classList.contains("fa-solid")) {
            btn.firstElementChild.classList.add("fa-solid")

            if (localStorage.getItem("favorite") == null) {
                localStorage.setItem("favorite", JSON.stringify([]))
            }

            let favorite = JSON.parse(localStorage.getItem("favorite"))

            let id = this.nextElementSibling.lastElementChild.getAttribute("data-id")
            let img = this.previousElementSibling.firstElementChild.getAttribute("src")
            let name = this.nextElementSibling.firstElementChild.innerText
            let price = this.nextElementSibling.lastElementChild.previousElementSibling.innerText


            let exist = favorite.find(pro => pro.id == id)


            if (exist == undefined) {
                let item = {
                    id: id,
                    image: img,
                    name: name,
                    price: price,
                }
                favorite.push(item)
            }
            localStorage.setItem("favorite", JSON.stringify(favorite))
        }
        else {
            btn.firstElementChild.classList.remove("fa-solid")
            let id = this.nextElementSibling.lastElementChild.getAttribute("data-id")
            console.log(id)
            let favorite = JSON.parse(localStorage.getItem("favorite"))
            for (const favItem of favorite) {
                if (favItem.id == id) {
                    favorite.splice(favorite.indexOf(favItem), 1)
                }
            }
            localStorage.setItem("favorite", JSON.stringify(favorite))
        }
    })
}

let flower_buttons = document.querySelectorAll(".flower-buttons")

for (const button of flower_buttons) {
    let id = button.getAttribute("data-id")
    for (const fav of JSON.parse(localStorage.getItem("favorite"))) {
        if (fav.id == id) {
            button.parentElement.previousElementSibling.firstElementChild.classList.add("fa-solid")
        }
    }
}

///// ADD FAVORITE END /////



///// TESTIMONIAL CHANGE START /////

let leftBtn = document.getElementById("left")
let rightBtn = document.getElementById("right")

rightBtn.addEventListener("click", function () {
    let activeElm = document.querySelector(".active")
    if (activeElm.nextElementSibling !== leftBtn) {
        activeElm.classList.remove("active")
        activeElm.nextElementSibling.classList.add("active")
    }
    else{
        activeElm.classList.remove("active")
        this.parentElement.firstElementChild.classList.add("active")
    }
})

leftBtn.addEventListener("click", function () {
    let activeElm = document.querySelector(".active")
    if (activeElm.previousElementSibling != null) {
        activeElm.classList.remove("active")
        activeElm.previousElementSibling.classList.add("active")
    }
    else{
        activeElm.classList.remove("active")
        this.parentElement.lastElementChild.previousElementSibling.previousElementSibling.classList.add("active")
    }
})

///// TESTIMONIAL CHANGE END /////
