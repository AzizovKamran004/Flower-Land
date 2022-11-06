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



///// SHOW FAVORITE START /////

if (JSON.parse(localStorage.getItem("favorite")).length != 0) {
    let favorite = JSON.parse(localStorage.getItem("favorite"))

    let main_list = document.getElementById("main-list")



    for (const fav of favorite) {

        let col = document.createElement("div")
        col.classList.add("col-lg-3", "col-self-6", "col-self-4", "col-self-12")


        let item = document.createElement("div")
        item.classList.add("flower-item")


        let flower_image = document.createElement("div")
        flower_image.classList.add("flower-image")
        let customImg = document.createElement("img")
        customImg.setAttribute("src", fav.image)
        customImg.classList.add("w-100", "h-100")
        flower_image.append(customImg)

        let flower_info = document.createElement("div")
        flower_info.classList.add("flower-info", "pb-2")

        let favName = document.createElement("h3")
        favName.innerText = fav.name

        let favPrice = document.createElement("h3")
        favPrice.classList.add("price")
        favPrice.innerText = fav.price

        let buttons = document.createElement("div")
        buttons.classList.add("flower-buttons", "mt-2")
        buttons.setAttribute("data-id", fav.id)
        let btn_rmv = document.createElement("button")
        btn_rmv.setAttribute("type", "button")
        btn_rmv.classList.add("btn", "rmv-btn", "btn-danger")
        btn_rmv.innerText = "Remove Favorite"
        btn_rmv.addEventListener("click", function () {
            col.remove()
            favorite.splice(favorite.indexOf(fav), 1)
            localStorage.setItem("favorite", JSON.stringify(favorite))
        })

        buttons.append(btn_rmv)

        flower_info.append(favName, favPrice, buttons)

        item.append(flower_image, flower_info)

        col.append(item)

        main_list.append(col)

    }
}

///// SHOW FAVORITE END /////



///// FIND BASKET COUNT START /////

let basket = JSON.parse(localStorage.getItem("basket"))
let countPro = document.querySelector(".navbar .buttons sup")
countPro.innerText = basket.length

///// FIND BASKET COUNT END /////