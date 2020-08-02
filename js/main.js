'use strict';

const images = document.querySelectorAll(".navigation-images"),
    cart = document.querySelector('.cart'),
    header = document.querySelector('.header'),
    container = document.querySelector('.container'),
    overlay = document.querySelector('.overlay');

for (let i = 0; i < images.length; i++) {
    let buttons = images[i];
    buttons.addEventListener('mouseenter', () => {
        cart.style.visibility = "visible";
        overlay.style.visibility = "visible";
        overlay.style.opacity = '1';
    });
}

container.addEventListener('click', event => {
    if (event.target === container || event.target === overlay) {
        cart.style.visibility = 'hidden';
        overlay.style.visibility = 'hidden';
    }
});




// tabs

const tabs = () => {
    const tabHeader = document.querySelector('.cart-header-list'),
        tab = tabHeader.querySelectorAll('.cart-menu-tab'),
        tabContent = document.querySelectorAll('.cart-tab');

    const toggleTabContent = index => {
        for (let i = 0; i < tabContent.length; i++) {
            if (index === i) {
                tab[i].classList.add('active-tab');
                tabContent[i].classList.remove('d-none');
            } else {
                tab[i].classList.remove('active-tab');
                tabContent[i].classList.add('d-none');
            }
        }
    };
    tabHeader.addEventListener('click', event => {
        let target = event.target;
        if (target.classList.contains('cart-menu-tab')) {
            tab.forEach((item, index) => {
                if (item === target) {
                    toggleTabContent(index);
                }
            });
        }
    });
};
tabs();