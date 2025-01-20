const sidebarOpenbutton = document.querySelector('#menuopenbutton')

const sidebarmenu = document.getElementById('sidebarcontainer')
const sidebarClosebutton = document.querySelector('#sidebarclosebutton')

const mainimagecontainer = document.querySelector('.mainimagecontainer')
const mainimage = document.querySelector('.mainimage')
const mainimageselection = document.querySelector('#productimages .imageselection')

const lightbox = document.querySelector('.lightbox')
const lighboximageselection = document.querySelector('#lightboximagecontainer .imageselection')
const lightboximagecontainer = document.querySelector('#lightboximagecontainer')

const lightboxnext = document.querySelector('.lightbox .nextbutton')
const lightboxprevious = document.querySelector('.lightbox .previousbutton')
const lightboximage = document.querySelector('.lightboximage')


const mainnextbutton = document.querySelector('.mainimagecontainer .nextbutton')
const mainprevbutton = document.querySelector('.mainimagecontainer .previousbutton')


const addtocart = document.querySelector('#addtocartbutton')
const quantityselect = document.querySelector('.quantityselect')
const increasebutton = document.querySelector('#increasebutton')
const subtractbutton = document.querySelector('#subtractbutton')
const quantity = document.querySelector('#quantity')
const cartbutton = document.querySelector('.cart')
const cartelement = document.querySelector('#cartcontents')
const cartContainer = document.getElementById('cartitemcontainer')
const cartclosebutton = document.querySelector('button .cartclose')

const inventory = [
    {
    'productname': 'Fall Limited Edition Sneakers',
    'price': 125.00,
    }
]

sidebarOpenbutton.addEventListener('click', function() {
    sidebarmenu.style.display = 'flex';
        requestAnimationFrame(() => {
            sidebarmenu.classList.add('expanded');
        });
    mainprevbutton.style.display= 'none'
    mainnextbutton.style.display= 'none'

});

sidebarClosebutton.addEventListener('click', (event) => {
    sidebarmenu.classList.remove('expanded');
    setTimeout(() => {
        sidebarmenu.style.display = 'none';
    }, 500);
        mainprevbutton.style.display = 'block'
        mainnextbutton.style.display = 'block'
})

mainimageselection.addEventListener('click', function(event){
 if (event.target.tagName === 'IMG') {
    const opaque = document.querySelector('.opaque')
    if (opaque !== null) {
        opaque.classList.remove('opaque')

    }
    event.target.classList.add('opaque')

    const srcParts = event.target.src.split('/');
    const filename = srcParts[srcParts.length - 1]; 
    const productNumber = filename.match(/\d+/)[0]; 
    mainimage.src = `images/image-product-${productNumber}.jpg`;    
 }   
})

lighboximageselection.addEventListener('click', function(event){
 if (event.target.tagName === 'IMG') {
    const opaque = document.querySelector('.opaque')
    if (opaque !== null) {
        opaque.classList.remove('opaque')

    }
    event.target.classList.add('opaque')

    const srcParts = event.target.src.split('/');
    const filename = srcParts[srcParts.length - 1]; 
    const productNumber = filename.match(/\d+/)[0]; 
    lightboximage.src = `images/image-product-${productNumber}.jpg`;
 }   
})

quantityselect.addEventListener('click', function(event){
        if (event.target.classList.contains('add')) {
            quantity.value++
        }
        if (event.target.classList.contains('subtract')) {
            quantity.value--
        }
})
   
addtocart.addEventListener('click', function(event){

    addItemToCart(inventory[0], quantity.value)


})

mainimage.addEventListener('click', function(event) {
    if (window.innerWidth > 768) {
        lightbox.style.display = 'block';
        lightboxnext.style.display = 'block';
        lightboxprevious.style.display = 'block';
        lightboximage.src = mainimage.src;
        mainprevbutton.style.display = 'none'
        mainnextbutton.style.display = 'none'
    }
});

lightbox.addEventListener('click', function(event) {

    if (!event.target.classList.contains('previousbutton') && !event.target.classList.contains('nextbutton') && !event.target.classList.contains('lightboximage') && !event.target.classList.contains('imageselection') && !event.target.classList.contains('thumbnails')) {
        lightbox.style.display = 'none'
        lightboxnext.style.display= 'none'
        lightboxprevious.style.display= 'none'
        mainprevbutton.style.display = 'block'
        mainnextbutton.style.display = 'block'
    }
   
})

mainimagecontainer.addEventListener('click', function(event) {
    const srcParts = mainimage.src.split('/');
    const filename = srcParts[srcParts.length - 1]; 
    const productNumber = filename.match(/\d+/)[0]; 

    let currentImageNum = parseInt(productNumber)
    if (event.target.classList.contains('nextbutton')) {
        currentImageNum++
        if (currentImageNum >= 5) {
            currentImageNum = 1
        }
    }

    if (event.target.classList.contains('previousbutton')) {
        currentImageNum--
        if (currentImageNum <= 0) {
            currentImageNum = 4
        }
    }
    
 
    
    switch (currentImageNum) {
        case 1:
            mainimage.src = `images/image-product-1.jpg`
            mainimage.alt = 'Image of single tan shoe balanced with only heel on top of two stacked rocks'
            break;
    
        case 2:
            mainimage.src = `images/image-product-2.jpg`
            mainimage.alt = 'Two tan shoes posed on stones'
            break;

        case 3:
            mainimage.src = `images/image-product-3.jpg`
            mainimage.alt = 'Image of single tan shoe balanced on top of two stacked rocks'

            break;
        
        case 4:
            mainimage.src = `images/image-product-4.jpg`
            mainimage.alt = 'Image of single tan shoe balanced with only heel on top of two stacked rocks'

            break;

        default:
            mainimage.src = `images/image-product-1.jpg`
            mainimage.alt = 'Image of single tan shoe balanced with only heel on top of two stacked rocks'

            break;
    }

})

lightboximagecontainer.addEventListener('click', function(event) {
    const srcParts = lightboximage.src.split('/');
    const filename = srcParts[srcParts.length - 1]; 
    const productNumber = filename.match(/\d+/)[0]; 

    let currentImageNum = parseInt(productNumber)

    if (event.target.classList.contains('nextbutton')) {
        currentImageNum++
        if (currentImageNum >= 5) {
            currentImageNum = 1
        }
    }

    if (event.target.classList.contains('previousbutton')) {
        currentImageNum--
        if (currentImageNum <= 0) {
            currentImageNum = 4
        }
    }
    
 
    
    switch (currentImageNum) {
        case 1:
            lightboximage.src = `images/image-product-1.jpg`
            lightboximage.alt = 'Image of single tan shoe balanced with only heel on top of two stacked rocks'
            break;
    
        case 2:
            lightboximage.src = `images/image-product-2.jpg`
            lightboximage.alt = 'Two tan shoes posed on stones'
            break;

        case 3:
            lightboximage.src = `images/image-product-3.jpg`
            lightboximage.alt = 'Image of single tan shoe balanced on top of two stacked rocks'

            break;
        
        case 4:
            lightboximage.src = `images/image-product-4.jpg`
            lightboximage.alt = 'Image of single tan shoe balanced with only heel on top of two stacked rocks'

            break;

        default:
            lightboximage.src = `images/image-product-1.jpg`
            lightboximage.alt = 'Image of single tan shoe balanced with only heel on top of two stacked rocks'
            break;
    }



})


cartbutton.addEventListener('click', (event) => {
    if (cartelement.style.display === 'block') {
        cartelement.style.display = 'none'
        mainprevbutton.style.display = 'block'
        mainnextbutton.style.display = 'block'
        return
    }

    cartelement.style.display = 'block'
    mainprevbutton.style.display = 'none'
    mainnextbutton.style.display = 'none'

})

cartContainer.addEventListener('click', (event) => {

    if (event.target.classList.contains('deletebutton')) {
        if (event.target.tagName === 'IMG') {
            removeItemFromCart(event.target.parentElement)

        } else {
            removeItemFromCart(event.target)

        }
    }
})

cartclosebutton.addEventListener('click', (event) => {
    if (event.target.classList.contains('cartclose')) {
        cartelement.style.display = 'none'
        mainprevbutton.style.display = 'block'
        mainnextbutton.style.display = 'block'
    }
})

const checkoutbutton = document.getElementById('checkoutbutton')
const checkempty = document.querySelector('.cartitem p')


function addItemToCart(item, quantity) {

    //Sets the cart empty message to display none
    if (checkempty !== undefined) {
        checkempty.parentElement.style.display = 'none'
    }
    //The element that will contain all the info on the item in the cart.
    const newitem = document.createElement('div')

    //The thumbnail of the item in cart
    const cartthumbnail = document.createElement('img')

    //Container div for the name of item and it's price in cart and the p elements.
    const iteminfodiv = document.createElement('div')
    const cartitemname = document.createElement('p')
    const cartprice = document.createElement('p')
    //For styling purposes
    const cartpricetotal = document.createElement('span')
    
    //The button to remove an item from cart
    const adddeletebutton = document.createElement('button')
    const deletebuttonicon = document.createElement('img')

    //Set the checkout button to block, it is set to none by default or if cart is empty.
    const checkoutbutton = document.getElementById('checkoutbutton')
    checkoutbutton.style.display = 'block'

    //Building the elements of the cart item and adding them together.
    newitem.classList.add('cartitem')


    cartthumbnail.src = 'images/image-product-1-thumbnail.jpg'
    cartthumbnail.classList.add('carthumbnail')
    newitem.appendChild(cartthumbnail)

    iteminfodiv.classList.add('cartiteminfo')

    cartitemname.classList.add('cartitemname')
    cartitemname.textContent = item.productname

    cartprice.classList.add('cartprice')
    let carttotalprice = item.price * quantity
    cartprice.textContent = `$${item.price}.00 x ${quantity} `

    cartpricetotal.textContent = `$${carttotalprice}.00`
    cartpricetotal.classList.add('cartpricetotal')
    cartprice.appendChild(cartpricetotal)

    iteminfodiv.appendChild(cartitemname)
    iteminfodiv.appendChild(cartprice)

    newitem.appendChild(iteminfodiv)

    deletebuttonicon.src = 'images/icon-delete.svg'
    deletebuttonicon.classList.add('deletebutton')
    adddeletebutton.appendChild(deletebuttonicon)
    adddeletebutton.classList.add('deletebutton')
    newitem.appendChild(adddeletebutton)

    cartContainer.appendChild(newitem)

    //Change counter over cart icon for number of items and change it's display to block.
    const cartsizeelement = document.querySelector('#cartsize p')
    const cartsize = document.getElementsByClassName('cartitem').length - 1
    cartsizeelement.parentElement.style.display = 'block'
    cartsizeelement.textContent = cartsize

}

function removeItemFromCart (element) {
    element.parentElement.remove()
 
    //Checks if cart is empty, if so hides the cartsize and checkout button and displays empty cart message. If not empty updates the quantity.
    const cartsizeelement = document.querySelector('#cartsize p')
    const cartsize = document.getElementsByClassName('cartitem').length - 1

    if (cartsize < 1) {

        checkoutbutton.style.display = 'none'
        checkempty.parentElement.style.display = 'block'
        cartsizeelement.parentElement.style.display = 'none'                
  } else {
    cartsizeelement.textContent = cartsize
  }

}





