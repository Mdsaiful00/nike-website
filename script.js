let shoppingBox = document.querySelector('.shopping-box');
let cartBtn = document.querySelector('#cart-btn');
let searchBox = document.querySelector('.search-box');
let accountForm = document.querySelector('.account-form');
let loginBtn = document.querySelector('.account-form .login-btn');
let registerBtn = document.querySelector('.account-form .register-btn');
let navBar = document.querySelector('.navbar');
let menuBars = document.querySelector('#menu-bars');


cartBtn.addEventListener('click', () => {
    cartBtn.classList.toggle('fa-times');
                       shoppingBox.classList.toggle('active');
                                     searchBox.classList.remove('active');
               accountForm.classList.remove('active');
               navBar.classList.remove('active');

});

document.querySelector('#search-btn').onclick = () => {
              searchBox.classList.add('active');
                       accountForm.classList.remove('active');
    navBar.classList.remove('active');
                      shoppingBox.classList.remove('active');

};
document.querySelector('#colse-btn').onclick = () => {
                         searchBox.classList.remove('active');
};
document.querySelector('#user-btn').onclick = () => {
                        accountForm.classList.add('active');
                                navBar.classList.remove('active');
                                        navBar.classList.remove('active');
                                 shoppingBox.classList.remove('active');
                         searchBox.classList.remove('active');
};
document.querySelector('#close-form').onclick = () => {
    accountForm.classList.remove('active');
};

window.onscroll = () => {
                   navBar.classList.remove('active');
                    accountForm.classList.remove('active');
                                                 searchBox.classList.remove('active')
                                shoppingBox.classList.remove('active')
}
loginBtn.onclick = () => {
    loginBtn.classList.add('active');

    registerBtn.classList.remove('active');

    document.querySelector('.account-form .login-form').classList.add('active');

    document.querySelector('.account-form .register-form').classList.remove('active');

};
registerBtn.onclick = () => {
              loginBtn.classList.remove('active');
                  registerBtn.classList.add('active');

                  document.querySelector('.account-form .login-form').classList.remove('active');
                        document.querySelector('.account-form .register-form').classList.add('active');

            };

let slides = document.querySelectorAll('.slides-container');
let index = 0;

function next() {
    slides[index].classList.remove('active');
                  index = (index + 1) % slides.length;
    slides[index].classList.add('active');
};
function prev() {
    slides[index].classList.remove('active');
                index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
};


document.querySelectorAll('.featured-image-1').forEach(image_1 => {
           image_1.addEventListener('click', () => {
                          var src = image_1.getAttribute('src');
                                document.querySelector('.big-image-1').src = src;
    })
})

           document.querySelectorAll('.featured-image-2').forEach(image_2 => {
    image_2.addEventListener('click', () => {
                            var src = image_2.getAttribute('src');
                  document.querySelector('.big-image-2').src = src;
    })
})

document.querySelectorAll('.featured-image-3').forEach(image_3 => {
    image_3.addEventListener('click', () => {
                             var src = image_3.getAttribute('src');
                                  document.querySelector('.big-image-3').src = src;
    }) 
})