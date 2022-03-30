var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    threshold:10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      activeIndexChange: function () {
        var $this = this.realIndex;
        $('nav').find('ul li a').eq($this).click();
      }
    }
  });
  var isActive = false;
  document.addEventListener('mousewheel', function(event) {//mousewheel=event
    let _direction = event.wheelDelta
    let content4_scroll = $('.content4').scrollLeft();
    if(isActive == false && !$('body').hasClass('open'))
    {
      isActive = true;
      if(_direction < 0)//내렸을때
      {
        if(swiper.realIndex == 3)
        {
          if(Math.round(content4_scroll) == ($('.content4').prop("scrollWidth") - parseInt($(".content4").css('width'))))
          {
            if((swiper.realIndex + 1) < $('.swiper-slide').length)//다음번 인덱스가 전체갯수보다 작으면
            {
              $('.swiper-pagination-bullet').eq(swiper.realIndex + 1).click();
              $('nav').find('ul li a').eq(swiper.realIndex).click();
              setTimeout(function() {
                isActive = false;
              }, 500);
            }
          }
          else{
            $('.content4').scrollLeft(content4_scroll + 100);
            isActive = false;
          }
        }
        else{
          if((swiper.realIndex + 1) < $('.swiper-slide').length)//다음번 인덱스가 전체갯수보다 작으면
          {
            $('.swiper-pagination-bullet').eq(swiper.realIndex + 1).click();
            $('nav').find('ul li a').eq(swiper.realIndex).click();
            setTimeout(function() {
              isActive = false;
            }, 500);
          }
        }
      }
      else{//올렸을때
        if(swiper.realIndex == 3)
        {
          if(content4_scroll == 0)
          {
            if((swiper.realIndex) > 0)
            {
              $('.swiper-pagination-bullet').eq(swiper.realIndex - 1).click();
              $('nav').find('ul li a').eq(swiper.realIndex).click();
              setTimeout(function() {
                isActive = false;
              }, 500);
            }

          }
          else{
              $('.content4').scrollLeft(content4_scroll - 100);
              isActive = false;
          }
        }
        else{
        if((swiper.realIndex) > 0)
          {
            $('.swiper-pagination-bullet').eq(swiper.realIndex - 1).click();
            $('nav').find('ul li a').eq(swiper.realIndex).click();
            setTimeout(function() {
              isActive = false;
            }, 500);
          }
        }
      }  
    }
  });

  for (let i = 0; i < $('nav').find('ul li a').length; i++) {
    $('nav').find('ul li a').eq(i).click(function(){
      if(!$('body').hasClass('open'))
      {
        $('.swiper-pagination-bullet').eq(i).click();
      }
    });
  }


  /* Initialize Swiper */
  var swiper3 = new Swiper(".mySwiper3", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });

  var swiper4 = new Swiper(".mySwiper4", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });

  var swiper5 = new Swiper(".mySwiper5", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });

  var swiper6 = new Swiper(".mySwiper6", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });

  var swiper6 = new Swiper(".mySwiper7", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });