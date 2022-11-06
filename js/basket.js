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



///// BASKET SHOW START/////

let about_flower = ["While red roses are synonymous with celebrating the joy and passion of love, they are also a special gift during times of grieving. Red roses are a beautiful way to convey your respect and love for someone who has passed and can also represent courage and gratitude.",
    "Historically, the white rose symbolized innocence and purity, which is how it became associated with weddings and bridal bouquets.",
    "Pink roses symbolize grace, admiration, gratitude, comfort and joy, but each shade of pink carries its own meaning. Light pink roses mean comfort, elegance and gratitude. Hot pink roses represent thankfulness and joy.",
    "Tulips are a genus of spring-blooming perennial herbaceous bulbiferous geophytes. The flowers are usually large, showy and brightly coloured, generally red, pink, yellow, or white.",
    "Buy our mixed bouquets for your special days.",
    "Buy our mixed bouquets for your special days.",
    "Buy our bridial bouquets for your weedings.",
    "Buy our bridial bouquets for your weedings."
]


if (JSON.parse(localStorage.getItem("basket")).length != 0) {
    let basket = JSON.parse(localStorage.getItem("basket"))

    let main_list = document.getElementById("main-list")
    
    let countPro = document.querySelector(".navbar .buttons sup")
    countPro.innerText = basket.length

    let total_price = document.querySelector(".total-price h2")
    let total = 0
   
    for (const product of basket) {

        let col = document.createElement("div")
        col.classList.add("col-lg-12")

        let product_list_item = document.createElement("div")
        product_list_item.classList.add("product-list-item")

        let row = document.createElement("div")
        row.classList.add("row")

        let col_6_img = document.createElement("div")
        col_6_img.classList.add("col-lg-6")

        let product_image = document.createElement("div")
        product_image.classList.add("product-image")

        let img = document.createElement("img")
        img.setAttribute("src", product.image)
        img.classList.add("img-fluid", "h-100", "w-100")

        product_image.append(img)
        col_6_img.append(product_image)



        let col_6_text = document.createElement("div")
        col_6_text.classList.add("col-lg-6")

        let product_text = document.createElement("div")
        product_text.classList.add("product-text")

        let product_name = document.createElement("h2")
        product_name.innerText = product.name

        let product_count = document.createElement("p")
        product_count.classList.add("count-text")
        product_count.innerText = product.count


        let product_price = document.createElement("p")
        product_price.classList.add("price-text")
        product_price.innerText = product.price


        let delete_btn = document.createElement("button");
        delete_btn.classList.add("btn", "btn-danger")
        delete_btn.innerText = "Delete Product"

        delete_btn.addEventListener("click", function (e) {
            e.preventDefault()
            product_list_item.remove()
            basket.splice(basket.indexOf(product), 1)
            countPro.innerText = basket.length
            localStorage.setItem("basket", JSON.stringify(basket))
        })


        let hr = document.createElement("hr")
        

        let product_about = document.createElement("p")
        product_about.innerText = about_flower[product.id - 1]


        product_text.append(product_name);
        product_text.append(product_count);
        product_text.append(product_price);
        product_text.append(delete_btn);
        product_text.append(hr);
        product_text.append(product_about);
        col_6_text.append(product_text)

        row.append(col_6_img)
        row.append(col_6_text)

        product_list_item.append(row)
        col.append(product_list_item)

        total += parseInt(product.price * product.count)

        main_list.append(col)
    }
    total_price.innerText = total
}
else {
    document.getElementById("basket").classList.add("d-none")
    document.getElementById("no-pro").classList.remove("d-none")
}

///// BASKET SHOW END/////