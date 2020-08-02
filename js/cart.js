'use strict';

const removeCartBtn = document.querySelectorAll('.remove');

const removeCartItem = () => {
    let target = event.target;
    target.parentElement.parentElement.remove();
    updateCartTotal();
};

const quantityChanged = event => {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
};

for (let i = 0; i < removeCartBtn.length; i++) {
    let button = removeCartBtn[i];
    button.addEventListener('click', removeCartItem);
}

let quantityInputs = document.querySelectorAll('.cart-quantity-input');
for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener('change', quantityChanged);
}

const updateCartTotal = () => {
    const cartItemContainer = document.querySelectorAll('.cart-content')[0],
        cartRows = cartItemContainer.querySelectorAll('.cart-row');
    let total = 0;


    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i],
            cartPrice = cartRow.querySelectorAll('.cart-price')[0],
            quantityCart = cartRow.querySelectorAll('.cart-quantity-input')[0],
            price = parseFloat(cartPrice.innerText.replace('руб', '')),
            quantity = quantityCart.value;
        total = total + (price * quantity);
    }
    document.querySelector('.cart-total-price').innerText = total + ' руб';
};

// очистить корзину
const cartClear = document.querySelector('#cart-clear');

cartClear.addEventListener('click', () => {
    document.querySelector('.cartwrapper').remove();
    let paragraph = document.createElement('p');
    paragraph.className = "cleared";
    paragraph.innerHTML = "<strong>Ваша корзина пуста.";
    document.querySelector('.cart').append(paragraph);
});