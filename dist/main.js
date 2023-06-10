if(window.screen.width <= 768){
    document.querySelectorAll(".menu-parent button").forEach(item => {
        item.addEventListener("click", function(e){
            item.closest(".group").classList.toggle("opened");
            
        })
    })
}

document.querySelector(".burger").addEventListener("click", function(e){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      
    document.querySelector(".menu").classList.toggle("opened");
    document.querySelector("html").classList.toggle("overflow-hidden")
})
document.querySelectorAll(".language #dropdown li a").forEach(item => {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelectorAll(".language #dropdown li a").forEach(link => link.classList.remove("selected"));
        this.classList.add("selected");
        document.querySelector(".language-value").innerHTML = this.getAttribute("data-value");


    })
})

document.querySelector(".language").addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("opened");
    if (window.screen.width <= 768) {
        document.querySelector("body").classList.toggle("overflow-hidden");
    }
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

})
const myElement = document.querySelector('.language');
document.addEventListener('mousedown', function (event) {
    if (!myElement.contains(event.target)) {
        myElement.classList.remove('opened');
    }
});






if(document.querySelector(".main-slider")){
    const swiper = new Swiper('.main-slider', {

        slidePerView: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.pagination',
            type: 'bullets',
            clickable: true,
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.arrow-right',
            prevEl: '.arrow-left',
        },
    
    });
}

if(document.querySelector(".swiper-development")){
    const swiperDevelopment = new Swiper('.swiper-development', {

        slidesPerView: 5,
        spaceBetween: 24,
      
        pagination: {
            el: '.dev-pagination',
            type: 'bullets',
            clickable: true,
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.development-header .arrow-right',
            prevEl: '.development-header .arrow-left',
        },
    
        breakpoints:{
            0:{
                slidesPerView: 1,
            },
    
            540:{
                slidesPerView: 3,
            },
            768:{
                slidesPerView: 4,
            },
    
            1024:{
                slidesPerView: 5
            }
        }
    
    });
}


if(document.querySelector(".swiper-development2")){
    const swiperDevelopment = new Swiper('.swiper-development2', {

        slidesPerView: 6,
        spaceBetween: 24,
      
        pagination: {
            el: '.dev-pagination',
            type: 'bullets',
            clickable: true,
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.development-header .arrow-right',
            prevEl: '.development-header .arrow-left',
        },
    
        breakpoints:{
            0:{
                slidesPerView: 1,
            },
    
            540:{
                slidesPerView: 3,
            },
            768:{
                slidesPerView: 4,
            },
    
            1024:{
                slidesPerView: 5
            },
            1200:{
                slidesPerView: 6
            }
        }
    
    });
}


document.querySelectorAll(".step-slider").forEach((slider,index) => {
    slider.closest(".step-content").classList.add(`slider-${index}`);
    document.querySelectorAll(`.slider-${index} [data-text]`).forEach(function(item, index){
        if(index != 0){
            item.style.display = "none";
        }
    });
   
    new Swiper(slider, {
        slidesPerView: 1,
        autoheight: true,
        pagination: {
            el: `.slider-${index} .step-slider__pagination`,
            type: 'fraction'
        },
        navigation: {
            nextEl: `.slider-${index} .arrow-right`,
            prevEl: `.slider-${index} .arrow-left`,
        },

        breakpoints:{
            0:{
                pagination: {
                    el: `.slider-${index} .step-slider__pagination-2`,
                    type: 'bullets'
                },
            },

            1024:{
                pagination: {
                    el: `.slider-${index} .step-slider__pagination`,
                    type: 'fraction'
                },
            }
        },

        on: {
            slideChange: function () {
                // Получение индекса текущего слайда
                var activeIndex = this.activeIndex;
        
                // Получение всех элементов с классом slide-text
                var slideTexts = document.querySelectorAll(`.slider-${index} [data-text]`);
        
                // Перебор элементов slide-text
                slideTexts.forEach(function(slideText) {
                // Получение значения атрибута data-text элемента
                var textIndex = slideText.getAttribute('data-text');
                
                // Если индекс элемента совпадает с индексом активного слайда,
                // то отображаем его, иначе скрываем
                if (textIndex == activeIndex + 1) {
                    slideText.style.display = 'block';
                } else {
                    slideText.style.display = 'none';
                }
                });
            },
        },

    });
})



document.querySelectorAll(".additions-img__wrap").forEach(item => {
    item.querySelector(".show-all").addEventListener("click", function(e){
        e.preventDefault();
        item.querySelector(".additions-img").classList.add("opened");
        this.remove();
    })
})




if(document.querySelector(".additional-slider.swiper")){
    new Swiper('.additional-slider.swiper', {
        slidesPerView: 4,
        spaceBetween: 24,
        navigation: {
            nextEl: `.additional-slider__nav .arrow-right`,
            prevEl: `.additional-slider__nav .arrow-left`,
        },

        pagination: {
            el: `.additiona-slider__pagination`,
            type: 'bullets'
        },

        breakpoints:{
            0:{
                slidesPerView: 2,
                spaceBetween: 20
            },
            768:{
                slidesPerView: 3,
                spaceBetween: 20
            },
            991:{
                slidesPerView: 4,
                spaceBetween: 24
            }
        }


      
    });
}


if(document.querySelector(".patents__slider")){
        new Swiper('.patents__slider', {
            slidesPerView: 6,
            spaceBetween: 24,
            navigation: {
                nextEl: `.patents__slider-nav .arrow-right`,
                prevEl: `.patents__slider-nav .arrow-left`,
            },
    
            pagination: {
                el: `.patents__slider-pagination`,
                type: 'bullets'
            },
    
            breakpoints:{
                0:{
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                768:{
                    slidesPerView: 4,
                    spaceBetween: 20
                },
                991:{
                    slidesPerView: 6,
                    spaceBetween: 24
                }
            }
    
    
          
        });
}


if(document.querySelector(".mass-media .swiper")){
    new Swiper('.mass-media .swiper', {
        slidesPerView: 6,
        spaceBetween: 24,
        navigation: {
            nextEl: `.mass-media .arrow-right`,
            prevEl: `.mass-media .arrow-left`,
        },

        pagination: {
            el: `.mass-media-pagination`,
            type: 'bullets'
        },

        breakpoints:{
            0:{
                slidesPerView: 1,
                spaceBetween: 20
            },
            768:{
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024:{
                slidesPerView: 3,
                spaceBetween: 24
            },
            1200:{
                slidesPerView: 4,
                spaceBetween: 24
            }
        }


      
    });
}


if(document.querySelector(".publications .swiper")){
    new Swiper('.publications .swiper', {
        slidesPerView: 6,
        spaceBetween: 24,
        navigation: {
            nextEl: `.publications .arrow-right`,
            prevEl: `.publications .arrow-left`,
        },

        pagination: {
            el: `.publications-pagination`,
            type: 'bullets'
        },

        breakpoints:{
            0:{
                slidesPerView: 1,
                spaceBetween: 20
            },
            768:{
                slidesPerView: 3,
                spaceBetween: 20
            },
            991:{
                slidesPerView: 6,
                spaceBetween: 24
            }
        }


      
    });
}


if(document.querySelector(".step-slider__subslider")){
    new Swiper('.step-slider__subslider', {
        slidesPerView: 1,
        navigation: {
            nextEl: `.right`,
            prevEl: `.left`,
        },
       
    });
}


if(document.querySelector(".documents-slider")){
    document.querySelectorAll(".documents-slider").forEach(doc => {
        const arrowRight = doc.closest(".documents").querySelector(".arrow-right")
        const arrowLeft = doc.closest(".documents").querySelector(".arrow-left")
        const pagination = doc.closest(".documents").querySelector(".documents-pagination")
        new Swiper(doc, {
            slidesPerView: 6,
            spaceBetween: 24,
            navigation: {
                nextEl: arrowRight,
                prevEl: arrowLeft,
            },
            pagination:{
                el: pagination
            },
    
            breakpoints:{
                0:{
                    slidesPerView: 1
                },
                540:{
                    slidesPerView: 3
                },
                991:{
                    slidesPerView: 4,
                },
                1200:{
                    slidesPerView: 6
                }
            }
           
        });
    })
  
}


if(document.querySelector(".documents-slider-5")){
    document.querySelectorAll(".documents-slider-5").forEach(doc => {
        const arrowRight = doc.closest(".documents").querySelector(".arrow-right")
        const arrowLeft = doc.closest(".documents").querySelector(".arrow-left")
        const pagination = doc.closest(".documents").querySelector(".documents-pagination")
        new Swiper(doc, {
            slidesPerView: 5,
            spaceBetween: 24,
            navigation: {
                nextEl: arrowRight,
                prevEl: arrowLeft,
            },
            pagination:{
                el: pagination
            },
    
            breakpoints:{
                0:{
                    slidesPerView: 1
                },
                540:{
                    slidesPerView: 3
                },
                991:{
                    slidesPerView: 4,
                },
                1200:{
                    slidesPerView: 5
                }
            }
           
        });
    })
  
}

if(document.querySelector(".documents-slider--mobile")){
    if(window.screen.width < 768){
        new Swiper('.documents-slider--mobile', {
            slidesPerView: 6,
            spaceBetween: 24,
            navigation: {
                nextEl: `.documents .arrow-right`,
                prevEl: `.documents .arrow-left`,
            },
            pagination:{
                el: '.documents-pagination'
            },
    
            breakpoints:{
                0:{
                    slidesPerView: 1,
                    spaceBetween: 16,
                },
                540:{
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                991:{
                    slidesPerView: 4,
                    spaceBetween: 16,
                },
                1200:{
                    slidesPerView: 6,
                    spaceBetween: 24
                }
            }
           
        });
    }
 
}



if(document.querySelector(".conclusions__slider")){
    new Swiper('.conclusions__slider', {
        slidesPerView: 6,
        spaceBetween: 24,
        navigation: {
            nextEl: `.conclusions .arrow-right`,
            prevEl: `.conclusions .arrow-left`,
        },
        pagination:{
            el: '.conclusions-pagination'
        },

        breakpoints:{
            0:{
                slidesPerView: 1
            },
            768:{
                slidesPerView: 2
            },
            991:{
                slidesPerView: 3,
            },
          
        }
       
    });
}


if(document.querySelector(".awards__slider")){
    new Swiper('.awards__slider', {
        slidesPerView: 6,
        spaceBetween: 24,
        navigation: {
            nextEl: `.awards__slider-nav .arrow-right`,
            prevEl: `.awards__slider-nav .arrow-left`,
        },

        pagination: {
            el: `.awards__slider-pagination`,
            type: 'bullets'
        },

        breakpoints:{
            0:{
                slidesPerView: 1,
                spaceBetween: 20
            },
            540:{
                slidesPerView: 4,
                spaceBetween: 20
            },
            991:{
                slidesPerView: 6,
                spaceBetween: 24
            }
        }


      
    });
}




if(document.querySelector(".product-slider")){
    new Swiper('.product-slider', {
        slidesPerView:1,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        navigation: {
            nextEl: `.product-slider .arrow-right`,
            prevEl: `.product-slider .arrow-left`,
        },

        pagination: {
            el: `.product-slider-pagination`,
            type: 'bullets'
        },

     

      
    });
}