// burger bar


let navigation = document.getElementById('list');
let toggleButton = document.getElementById('toggleBurger');

toggleButton.addEventListener('click', function() {
    navigation.classList.toggle('activeNav');
    toggleButton.classList.toggle('pressed');
})




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



// bestseller swiper Selection
let swiper = new Swiper('.books-slider', {
    slidesPerView: 4,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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



// reviews section

