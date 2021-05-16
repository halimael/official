const seperators = document.querySelectorAll('.seperator') 
let products_wrapper = document.querySelector('.product-list')
const product = document.querySelectorAll('.product')
let display_status = document.querySelector('.display-status')

const product_imgs = document.querySelectorAll('.product_img')
const product_prices = document.querySelectorAll('.price')
const product_title = document.querySelectorAll('.product .description h3')

const one_stars = document.querySelectorAll(".one_stars")
const two_stars = document.querySelectorAll(".two_stars")
const three_stars = document.querySelectorAll(".three_stars")
const four_stars = document.querySelectorAll(".four_stars")
const five_stars = document.querySelectorAll(".five_stars")

const grid_btn = document.querySelector("#grid-btn")
const list_btn = document.querySelector("#list-btn")

const one_stars_btn = document.querySelector("#one_stars_btn")
const two_stars_btn = document.querySelector("#two_stars_btn")
const three_stars_btn = document.querySelector("#three_stars_btn")
const four_stars_btn = document.querySelector("#four_stars_btn")
const five_stars_btn = document.querySelector("#five_stars_btn")

let rating_btns = [one_stars_btn, two_stars_btn, three_stars_btn, four_stars_btn, five_stars_btn, all_stars_btn];

//filtring function
const filtred = (list)=>{
    while (products_wrapper.firstChild) {
        products_wrapper.removeChild(products_wrapper.firstChild);
    }
    if(list == product){
        list.forEach(child =>{
            products_wrapper.appendChild(child)
    })
    }else{
        list.forEach(categorie =>{
            categorie.forEach(child =>{
                products_wrapper.appendChild(child)
            })
        })
    }
}

// Rating Stars Buttons


rating_btns.forEach((btn, i) =>{
    let product_list;
    switch (i) {
        case 0:
            product_list = [one_stars]
            break;

        case 1:
            product_list = [two_stars, three_stars, four_stars, five_stars]
            break;

        case 2:
            product_list = [three_stars, four_stars, five_stars]
            break;

        case 3:
            product_list = [four_stars, five_stars]
            break;

        case 4:
            product_list = [five_stars]
            break;
        
        case 5:
            product_list = product
            break;

    }

    btn.addEventListener('click', ()=>{
        filtred(product_list)
        if (i === 5){
            display_status.innerHTML =  `All Products`
        }else if (i === 0){
            display_status.innerHTML =  `${i+1} Stars or less rated products`
        }else{
            display_status.innerHTML =  `${i+1} Stars or higher rated products`
        }
    })
})


// grid - list Buttons

grid_btn.addEventListener('click', () => {
    products_wrapper.classList.remove('list')
    seperators.forEach(element =>{
        element.classList.remove('hide-sep')
    })
    product.forEach(element =>{
        element.classList.remove('product_listed')
    })
    product_imgs.forEach(img =>{
        img.classList.remove('img_listed')
        img.classList.add('product_img')
    })
    product_prices.forEach(price =>{
        price.classList.remove('price_listed')
    })
    product_title.forEach(title =>{
        title.classList.remove('h3_listed')
    })
})

list_btn.addEventListener('click', () => {
    products_wrapper.classList.add('list')
    seperators.forEach(element =>{
        element.classList.add('hide-sep')
    })
    product.forEach(element =>{
        element.classList.add('product_listed')
    })
    product_imgs.forEach(img =>{
        img.classList.add('img_listed')
        img.classList.remove('product_img')
    })
    product_prices.forEach(price =>{
        price.classList.add('price_listed')
    })
    product_title.forEach(title =>{
        title.classList.add('h3_listed')
    })
})

