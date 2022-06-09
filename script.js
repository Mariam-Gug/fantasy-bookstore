

// fixing navigation when scrolling

window.onscroll = () =>{
    if(window.scrollY > 80) {
        document.getElementById('nav-bar').classList.add('header-active');
    } else {
        document.getElementById('nav-bar').classList.remove('header-active');
    }

    // fadeOut()
};


// loader image

let loader = document.getElementById('loading');

window.onload = function() {
    setTimeout(function() {
        loader.style.display = 'none';
    }, 3000)
}


// search button responsive

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

// burger bar

let navigation = document.getElementById('nav-bar');
let toggleButton = document.getElementById('toggleBurger');

toggleButton.addEventListener('click', function() {
    navigation.classList.toggle('activeNav');
    toggleButton.classList.toggle('pressed');
})


// sign in form


    // sign in form

    let loginForm = document.querySelector('.login-form-container');

    document.querySelector('#login-btn').onclick = () =>{
      loginForm.classList.toggle('active');
    }
    
    document.querySelector('#close-login-btn').onclick = () =>{
      loginForm.classList.remove('active');
      document.querySelectorAll('.error-text').innerHTML = '';
      signUpForm.classList.remove('active');
      singInForm.classList.remove('not-display');
    }
    
    
    
    // sing up form
    
    
    // sign up show
    
    let createAccount = document.getElementById('create-account');
    let signUpForm = document.getElementById('registration');
    let singInForm = document.getElementById('sign-in');
    
    createAccount.addEventListener('click', function() {
        signUpForm.classList.add('active');
        singInForm.classList.add('not-display');
    })

    
    
    
    // registration validation
    
    
    document.getElementById('registration').addEventListener('submit', function(event) {
        event.preventDefault();
    
        let errors = {};
        let form = event.target;
    
        // username
        let username = document.getElementById('username').value;
    
        if (username.length < 4 || username == '') {
            errors.username = 'Please enter at least 4 symbols';
        };
    
        // mail
        let mail = document.getElementById('email').value;
        if (mail == '') {
            errors.mail = 'Please enter your email';
        }
    
        // password
        let password = document.getElementById('password').value;
        let password2 = document.getElementById('password2').value;
    
        if(password != password2 || password == '') {
            errors.password = 'Please enter at least 6 symbols';
            errors.password2 = 'Passwords do not match';
        };
    
        // checkbox
        let agree = document.getElementById('agree').checked;
        if(!agree) {
            errors.agree = 'You have not agreed to the terms and conditions';
        };
    
        // radio
        let age = false;
    
        form.querySelectorAll('[name = "age"]').forEach(element => {
            if (element.checked) {
                age = true;
            }
        });
    
    
        if (!age) {
            errors.age = 'Please select your race';
        }
    
        // console.log(errors);
    
        form.querySelectorAll('.error-text').forEach(item => {
            item.innerHTML = '';
        });
        
        for (let item in errors) {
            let errorSpan = document.getElementById('error_' + item);
    
            if(errorSpan) {
                errorSpan.textContent = errors[item];
            }
        }
    
        if (Object.keys(errors).length == 0) {
            form.submit();
        }
        
    });
    
    
        // show/hide password
        let passwordShow = document.getElementById('password');
        let toggleIconEye = document.getElementById('toggleIcon');
        let passwordShow2 = document.getElementById('password2');
        let toggleIconEye2 = document.getElementById('toggleIcon2');
    
        showHidePassword1 = () => {
            if (passwordShow.type =='password') {
                passwordShow.setAttribute('type', 'text');
                toggleIconEye.classList.add('fa-eye-slash');
            } else {
                toggleIconEye.classList.remove('fa-eye-slash');
                passwordShow.setAttribute('type', 'password');
            }
        };
    
        showHidePassword2 = () => {
            if (passwordShow2.type == 'password') {
                passwordShow2.setAttribute('type', 'text')
                toggleIconEye2.classList.add('fa-eye-slash');
            } else {
                passwordShow2.setAttribute('type', 'password');
                toggleIconEye2.classList.remove('fa-eye-slash');
            }
        }
    
        toggleIconEye.addEventListener('click', showHidePassword1);
        toggleIconEye2.addEventListener('click', showHidePassword2);
    
    
    
        // mail validation
        function validation() {
            let emailField = document.getElementById('email').value;
            let emailSpan = document.getElementById('error_mail');
            let emailStructure = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
            if (emailField.match(emailStructure)) {
                emailSpan.innerHTML = 'Your email is valid';
                emailSpan.style.color = 'MediumSpringGreen';
            } else {
                emailSpan.innerHTML = 'Your email is invalid';
            }
        }



// slider array

let data = [
    {
        id: 1,
        imageUrl: 'https://i0.wp.com/joeabercrombie.com/wp-content/uploads/2019/05/Heroes_Cover-wrap.jpg?fit=4799%2C2762&ssl=1',
        url: '#'
    },
    {
        id: 2,
        imageUrl: 'https://wallpaperaccess.com/full/838377.jpg',
        url: '#'
    },
    {
        id: 3,
        imageUrl: 'https://wallpaperaccess.com/full/1401668.jpg',
        url: '#'
    },
    {
        id: 4,
        imageUrl: 'https://wallpaperaccess.com/full/6169945.jpg',
        url: '#'
    },
    {
        id: 5,
        imageUrl: 'https://wallpaperaccess.com/full/3220005.jpg',
        url: '#'
    },
    {
        id: 6,
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/5c6ddc644d546e70437481eb/1589404880277-FJT6G1YSMTAE02VP24MR/Stunning-Original-Art.jpg?format=1500w',
        url: '#'
    },
    {
        id: 7,
        imageUrl: 'https://wallpaperaccess.com/full/5787979.jpg',
        url: '#'
    },
    {
        id: 8,
        imageUrl: 'https://wallpaperaccess.com/full/5625161.jpg',
        url: '#'
    },
    {
        id: 9,
        imageUrl: 'https://wallpaperaccess.com/full/6170007.jpg',
        url: '#'
    }
]

let leftArrow = document.getElementById('left-arrow');
let rightArrow = document.getElementById('right-arrow');
let sliderContent = document.getElementById('slider-content');
let dotsList = document.getElementsByClassName('dot');

let sliderIndex = 0;

// creating a tag
function createATag(item) {
    let aTag = document.createElement('a');
    aTag.setAttribute('href', item.url);
    aTag.setAttribute('target', '_blank');
    aTag.classList.add('slide');

    return aTag;
}

// creating img tag
function createImgTag(item) {
    let imgDiv = document.createElement('div');
    imgDiv.classList.add('image-box');
    imgDiv.style.backgroundImage = 'url('+item.imageUrl+')';

    return imgDiv;
}

function createDots() {
    let dots = document.createElement('div');
    dots.classList.add('dots');

    data.forEach( (element) => {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-id', element.id - 1);
        dot.onclick = function(event) {
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            setSlider();
        }
        dots.appendChild(dot);
    })

    return dots;
}

function setSlider() {
    sliderContent.innerHTML = ' ';
    let slideItem = createATag(data[sliderIndex]);
    let imgDiv = createImgTag(data[sliderIndex]);
    let dots = createDots(data[sliderIndex]);

    slideItem.appendChild(imgDiv);
    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);

    currentDotActive();
    console.log(slideItem);
}

function currentDotActive() {
    dotsList[sliderIndex].classList.add('active');
}

function leftArrowClick() {
    if (sliderIndex <=0 ) {
        sliderIndex = data.length - 1;
        setSlider();
        return;
    }
    sliderIndex --;
    setSlider();
}

function rightArrowClick() {
    if (sliderIndex >= data.length - 1) {
        sliderIndex = 0;
        setSlider();
        return;
    }
    sliderIndex ++;
    setSlider();
}

leftArrow.addEventListener('click', leftArrowClick);
rightArrow.addEventListener('click', rightArrowClick);

setInterval( () => {
    rightArrowClick();
}, 3000);

setSlider();


// reviews section

let mainWrapperPost = document.getElementById('slider-absolute');


// sending request to server
function ajax(url, callback) {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', function() {
        let data = JSON.parse(request.responseText);
        callback(data);
    });

    request.send();
}


ajax('https://jsonplaceholder.typicode.com/comments', function(data) {
    printData(data);
})


function printData(data) {
    data.forEach(element => {
        createPost(element);
    });
}


// creating comments
function createPost(item) {
    let swiperSlider = document.createElement('div');
    swiperSlider.classList.add('swiper-slide');
    swiperSlider.setAttribute('id', 'comment-slider');

    let divWrapper = document.createElement('div');
    divWrapper.classList.add('posts');

    let ratingStars = document.createElement('div');
    ratingStars.classList.add('rating-stars');
    
    let h5Tag = document.createElement('h5');
    h5Tag.innerText = item.email;
    h5Tag.classList.add('comment-user');

    let pTag = document.createElement('p');
    pTag.innerText = item.body;
    pTag.classList.add('comment-body');

    divWrapper.appendChild(ratingStars);
    divWrapper.appendChild(h5Tag);
    divWrapper.appendChild(pTag);
    swiperSlider.appendChild(divWrapper);

    mainWrapperPost.appendChild(swiperSlider);

    console.log(divWrapper);
}

let swiper2 = new Swiper('.comment-swiper', {
    slidesPerView: 4,
    navigation: {
      nextEl: '#next-button2',
      prevEl: '#prev-button2',
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
  });


// reviews section ends



// bestseller swiper Selection
let swiper = new Swiper('.books-slider', {
    slidesPerView: 4,
    navigation: {
      nextEl: '#next-button',
      prevEl: '#prev-button',
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
  });



