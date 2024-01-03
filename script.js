var swiper = new Swiper('.swiper1',{
    
    direction: 'vertical',

    autoplay: true,
    
    loop: true,
    
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    },
    breakpoints:{
        640:{
            slidesPerView:1,
        },
    },

});
var swiper = new Swiper('.swiper2',{
    
    direction: 'horizontal',

    freeMode: true,

    slidesPerView:3,

    spaceBetween: 30,

    breakpoints:{
        840:{
            slidesPerView:3,
        },
        640:{
            slidesPerView:2,
        },
        340:{
            slidesPerView:1
        },
    },

});