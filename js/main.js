// Mobile Menu
const hamburgerButton = document.querySelector(".hamburger-menu")
const closeButton = document.querySelector(".close-button")
const mobileMenu = document.querySelector(".mobile-menu")
const shadowBg = document.querySelector(".shadow-bg")
const arrowLeft = document.querySelector(".arrow-left")
const arrowRight = document.querySelector(".arrow-right")

// Cart
const cartButton = document.querySelector(".cart-btn")
const cartColor = document.querySelector(".cart-color")
const cart = document.querySelector(".cart")
const emptyCart = document.querySelector(".empty-cart-wrapper")
const cartItems = document.querySelector(".cart-items")
const deleteButton = document.querySelector(".delete-item-img")
const itemsAmount = document.querySelector(".items-amount")
const totalPrice = document.querySelector(".total-price")
const oneItemPrice = document.querySelector(".one-item-price")
const cartItemsNumberNotification = document.querySelector(".cart-items-number-notification")

// Main 
const sneakersImg = document.querySelectorAll(".sneakers-img")
const img1 = document.querySelector(".img-1")
const img2 = document.querySelector(".img-2")
const img3 = document.querySelector(".img-3")
const img4 = document.querySelector(".img-4")
const mainImgContainer = document.querySelector(".main-img-container")
const minusButton = document.querySelector(".minus-btn")
const plusButton = document.querySelector(".plus-btn")
const itemCounter = document.querySelector(".items-counter")
const addToCartButton = document.querySelector(".add-to-cart-btn")
const arrowLeftMobile = document.querySelector(".arrow-left-mobile")
const arrowRightMobile = document.querySelector(".arrow-right-mobile")

//POP-UP
const popupContainer = document.querySelector(".popup-images-slideshow")
const popupCloseImg = document.querySelector(".popup-slide-close-img")
const popupMainImg = document.querySelector(".popup-main-img")
const popupImg = document.querySelectorAll(".popup-image")
const popupImg1 = document.querySelector(".popup-img-1")
const popupImg2 = document.querySelector(".popup-img-2")
const popupImg3 = document.querySelector(".popup-img-3")
const popupImg4 = document.querySelector(".popup-img-4")


const mediaQuery = window.matchMedia('(max-width: 700px)')
const mediaQueryDesktop = window.matchMedia('(min-width: 700px)')

hamburgerButton.addEventListener('click', function(){
    mobileMenu.classList.add('active');
    shadowBg.classList.add('active');
})
closeButton.addEventListener('click', function(){
    mobileMenu.classList.remove('active');
    shadowBg.classList.remove('active');
})
cartButton.addEventListener('click', function(){
    cartColor.classList.toggle('active-cart');
    cart.classList.toggle('active');
})
img1.addEventListener('click', function(){
    img1.classList.add('selected');
    mainImgContainer.style.backgroundImage = "url('images/image-product-1.jpg')";
    img2.classList.remove('selected');
    img3.classList.remove('selected');
    img4.classList.remove('selected');
})
img2.addEventListener('click', function(){
    img2.classList.add('selected');
    mainImgContainer.style.backgroundImage = "url('images/image-product-2.jpg')";
    img1.classList.remove('selected');
    img3.classList.remove('selected');
    img4.classList.remove('selected');
})
img3.addEventListener('click', function(){
    img3.classList.add('selected');
    mainImgContainer.style.backgroundImage = "url('images/image-product-3.jpg')";
    img2.classList.remove('selected');
    img1.classList.remove('selected');
    img4.classList.remove('selected');
})
img4.addEventListener('click', function(){
    img4.classList.add('selected');
    mainImgContainer.style.backgroundImage = "url('images/image-product-4.jpg')";
    img2.classList.remove('selected');
    img3.classList.remove('selected');
    img1.classList.remove('selected');
})
if (mediaQueryDesktop.matches) {
mainImgContainer.addEventListener('click', function(){
    popupContainer.classList.add('active');
    shadowBg.classList.add('active');
    for(let i=0;i<sneakersImg.length;i++){
        if(sneakersImg[i].classList.contains('selected')) {
            popupImg[i].classList.add('selected-popup');
            let imgNumber = i+1;
            popupMainImg.src = "images/image-product-"+imgNumber.toString()+".jpg";
        }
    }
})
}
popupCloseImg.addEventListener('click', function(){
    popupContainer.classList.remove('active');
    shadowBg.classList.remove('active');
    for(let i=0;i<popupImg.length;i++){
        popupImg[i].classList.remove('selected-popup');
    }
})
popupImg1.addEventListener('click', function(){
    popupImg1.classList.add('selected-popup');
    popupMainImg.src = "images/image-product-1.jpg";
    popupImg2.classList.remove('selected-popup');
    popupImg3.classList.remove('selected-popup');
    popupImg4.classList.remove('selected-popup');
})
popupImg2.addEventListener('click', function(){
    popupImg2.classList.add('selected-popup');
    popupMainImg.src = "images/image-product-2.jpg";
    popupImg1.classList.remove('selected-popup');
    popupImg3.classList.remove('selected-popup');
    popupImg4.classList.remove('selected-popup');
})
popupImg3.addEventListener('click', function(){
    popupImg3.classList.add('selected-popup');
    popupMainImg.src = "images/image-product-3.jpg";
    popupImg2.classList.remove('selected-popup');
    popupImg1.classList.remove('selected-popup');
    popupImg4.classList.remove('selected-popup');
})
popupImg4.addEventListener('click', function(){
    popupImg4.classList.add('selected-popup');
    popupMainImg.src = "images/image-product-4.jpg";
    popupImg2.classList.remove('selected-popup');
    popupImg3.classList.remove('selected-popup');
    popupImg1.classList.remove('selected-popup');
})
arrowRight.addEventListener('click', function counterFunction(){
    let i = popupMainImg.src.match(/\d+/g);
    console.log(typeof i[1]);
    let iNumber = Number(i[1]);
    let iNumberMinusOne = iNumber - 1;
    console.log(iNumber);
    let counter = iNumber + 1;
    let counterFinal = counter.toString();
    if(counterFinal<=popupImg.length) {
        popupMainImg.src = "images/image-product-"+ counterFinal +".jpg";
        popupImg[iNumber].classList.add('selected-popup');
        popupImg[iNumberMinusOne].classList.remove('selected-popup');
    }
})
arrowLeft.addEventListener('click', function counterFunction(){
    let i = popupMainImg.src.match(/\d+/g);
    console.log(typeof i[1]);
    let iNumber = Number(i[1]);
    let iNumberReal = iNumber - 2;
    let iNumberPlusOne = iNumberReal + 1;
    console.log(iNumber);
    let counter = iNumber - 1;
    let counterFinal = counter.toString();
    if(counterFinal>0) {
        popupMainImg.src = "images/image-product-"+ counterFinal +".jpg";
        popupImg[iNumberReal].classList.add('selected-popup');
        popupImg[iNumberPlusOne].classList.remove('selected-popup');
    }
})
plusButton.addEventListener('click', function(){
    let items = Number(itemCounter.innerHTML);
    let itemsPlusOne = items + 1;
    let itemsFinal = itemsPlusOne.toString();
    if(itemsPlusOne <= 20) {
        itemCounter.innerHTML=itemsFinal;
    } else {
        itemCounter.innerHTML="20";
    }
})
minusButton.addEventListener('click', function(){
    let items = Number(itemCounter.innerHTML);
    let itemsPlusOne = items - 1;
    let itemsFinal = itemsPlusOne.toString();
    if(itemsPlusOne > 0) {
        itemCounter.innerHTML=itemsFinal;
    } 
    else {
        itemCounter.innerHTML="0";
    }
})
addToCartButton.addEventListener('click', function(){
    let itemAmount = Number(itemCounter.innerHTML);
    console.log(itemAmount);
    if(itemAmount == 0) {
        emptyCart.classList.add('active-flex');
    } else if(itemAmount > 0) {
        emptyCart.classList.remove('active-flex');
        emptyCart.classList.add('hidden');
        cartItems.classList.add('active');
        itemsAmount.innerHTML = itemAmount.toString();
        let itemPriceNumber = Number(oneItemPrice.innerHTML);
        console.log(itemPriceNumber);
        let totalCartPrice = itemPriceNumber * itemAmount;
        console.log(totalCartPrice);
        let totalCartPriceString = totalCartPrice.toString();
        console.log(totalCartPriceString);
        totalPrice.innerHTML = totalCartPriceString;
        cartItemsNumberNotification.classList.add('active-flex');
        cartItemsNumberNotification.innerHTML = itemCounter.innerHTML;
    }
})
deleteButton.addEventListener('click', function(){
    emptyCart.classList.remove('hidden');
    emptyCart.classList.add('active-flex');
    cartItems.classList.remove('active');
    cartItemsNumberNotification.classList.remove('active-flex');
})

let mainBackgroundImage = "url('images/image-product-1.jpg')";
console.log(mainBackgroundImage);

if (mediaQuery.matches) {
    mainImgContainer.style.backgroundImage = mainBackgroundImage;
    arrowRightMobile.addEventListener('click', function(){
        let i = mainBackgroundImage.match(/\d+/g);
        console.log(typeof i);
        console.log[i];
        let iNumber = Number(i);
        console.log(iNumber);
        console.log(typeof iNumber);
        let counter = iNumber + 1;
        let counterFinal = counter.toString();
        console.log(counterFinal);
        console.log(typeof counterFinal);
        if(counterFinal<=popupImg.length) {
            mainBackgroundImage = "url('images/image-product-"+ counterFinal +".jpg')";
        }
        console.log(mainBackgroundImage);
        mainImgContainer.style.backgroundImage = mainBackgroundImage;
    })
    arrowLeftMobile.addEventListener('click', function(){
        let i = mainBackgroundImage.match(/\d+/g);
        console.log(typeof i);
        console.log[i];
        let iNumber = Number(i);
        console.log(iNumber);
        console.log(typeof iNumber);
        let counter = iNumber - 1;
        let counterFinal = counter.toString();
        console.log(counterFinal);
        console.log(typeof counterFinal);
        if(counterFinal>0) {
            mainBackgroundImage = "url('images/image-product-"+ counterFinal +".jpg')";
        }
        console.log(mainBackgroundImage);
        mainImgContainer.style.backgroundImage = mainBackgroundImage;
    })
}

if (mediaQueryDesktop.matches) {
    mainImgContainer.style.backgroundImage = "url('images/image-product-1.jpg')";
}