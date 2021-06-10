const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    spaceBetween: 5,
    slidesPerView: 2,
    freeMode: true,
    loop: true,
    loopAdditionalSlides: 5,
    speed: 500,

    autoplay:{
        delay: 8000
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // screen size
        640: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            freeMode: false,
        }
    }

  });