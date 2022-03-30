/*nav animation*/
var nav = $('nav');
var line = $('<div />').addClass('line');

line.appendTo(nav);

var active = nav.find('.active p');
var pos = 0;
var wid = 0;

if(active.length) {
  pos = active.position().left
  wid = active.width();
  line.css({
    left: pos,
    width: wid,
    top:'61px'
  });
}

nav.find('ul li a').click(function(e) {
  e.preventDefault();
  if(!$('body').hasClass('open'))
  {
    active = nav.find('.active p');
    if(active.position() !== undefined)
    pos = active.position().left;
    wid = active.width();
    if(!$(this).parent().hasClass('active') && !nav.hasClass('animate')) {
      
      nav.addClass('animate');

      var _this = $(this);

      nav.find('ul li').removeClass('active');

      var position = _this.parent().position();
      var width = _this.find('p').width();

      if(position.left >= pos) {
        line.animate({
          width: ((position.left - pos) + width)
        }, 300, function() {
          line.animate({
            width: width,
            left: position.left + 27
          }, 150, function() {
            nav.removeClass('animate');
          });
          _this.parent().addClass('active');
        });
      } else {
        line.animate({
          left: position.left,
          width: ((pos - position.left) + wid)
        }, 300, function() {
          line.animate({
            width: width,
            left: position.left + 27
          }, 150, function() {
            nav.removeClass('animate');
          });
          _this.parent().addClass('active');
        });
      }

      pos = position.left;
      wid = width;
    }
  }
});

/*****SKILL_chart*****/
$(window).ready(function(){
    draw(95, '.pie-chart1', 'rgb(155 129 201)');
    draw(92, '.pie-chart2', 'rgb(155 129 201)');
    draw(30, '.pie-chart3','rgb(155 129 201)');
    draw(50, '.pie-chart4','rgb(155 129 201)');
    draw(80, '.pie-chart5','rgb(155 129 201)');
});

function draw(max, classname, colorname){
    var i=1;
    var func1 = setInterval(function(){
    if(i<max){
        color1(i,classname,colorname);
        i++;
    } else{
        clearInterval(func1);
    }
    },10);
}
function color1(i, classname,colorname){
    $(classname).css({
        "background":"conic-gradient("+colorname+" 0% "+i+"%, #ffffff "+i+"% 100%)"
    });
}

function replay(){
    draw(95, '.pie-chart1', 'rgb(155 129 201)');
    draw(92, '.pie-chart2', 'rgb(155 129 201)');
    draw(30, '.pie-chart3','rgb(155 129 201)');
    draw(50, '.pie-chart4','rgb(155 129 201)');
    draw(80, '.pie-chart5','rgb(155 129 201)');
  }

  for (let a = 0; a < $(".skillBox_left").find('ul li').length; a++) {
      $(".skillBox_left").find('ul li').eq(a).click(function(){
        $('.pie-chart').hide();
        $('.pie-chart').eq(a).show();
        $(".skillBox_left").find('ul li a').removeClass("underlined");
        $(".skillBox_left").find('ul li a').eq(a).addClass("underlined");
      });
  }


/*****DISIGN_MODAL*****/
  $( document ).ready(function() {

    for (let i = 0; i < $('.trigger').length; i++) {
      $('.trigger').eq(i).on('click', function() {
        $('.modal-wrapper').toggleClass('open');
       $('.page-wrapper').toggleClass('blur-it');
       $('body').toggleClass('open');
       switch (i) {
         case 0:
          $('.modal-wrapper').find('.content img').attr('src','./img/design01.jpg');
           break;
         case 1:
          $('.modal-wrapper').find('.content img').attr('src','./img/design02.jpg');
           
           break;
         case 2:
          $('.modal-wrapper').find('.content img').attr('src','./img/design03.jpg');
           break;
         case 3:
          $('.modal-wrapper').find('.content img').attr('src','./img/design04.jpg');
           break;
         case 4:
          $('.modal-wrapper').find('.content img').attr('src','./img/design05.jpg');
           break;
         case 5:
          $('.modal-wrapper').find('.content img').attr('src','./img/design06.jpg');
           break;
         case 6:
          $('.modal-wrapper').find('.content img').attr('src','./img/design07.jpg');
           break;
         case 7:
          $('.modal-wrapper').find('.content img').attr('src','./img/design08.jpg');
           break;
         case 8:
          $('.modal-wrapper').find('.content img').attr('src','./img/design09.jpg');
           break;
         case 9:
          $('.modal-wrapper').find('.content img').attr('src','./img/design10.jpg');
           break;
         case 10:
          $('.modal-wrapper').find('.content img').attr('src','./img/design11.jpg');
           break;
         case 11:
          $('.modal-wrapper').find('.content img').attr('src','./img/design12.jpg');
           break;

         default:
           break;
       }
        return false;
     });
    }
  });

  /*DISIGN_tab*/ 
  for (let v = 0; v < $('.content5 .btnBox').find('ul li').length; v++) {
    $('.content5 .btnBox').find('ul li').eq(v).click(function(){
      $(".TabBox").hide();
      $(".TabBox").eq(v).show();
    });
  }


  for (let q = 0; q < $('.leftBox').find('ul li').length; q++) {
    $('.leftBox').find('ul li').eq(q).click(function(){
      $(".hf").hide();
      $(".hf").eq(q).show();
      $('.leftBox').find('ul li').removeClass("mouseon");
      $('.leftBox').find('ul li').eq(q).addClass("mouseon");
    });
  }

  for (let q = 0; q < $('.leftBox2').find('ul li').length; q++) {
    $('.leftBox2').find('ul li').eq(q).click(function(){
      $(".ap").hide();
      $(".ap").eq(q).show();
      $('.leftBox2').find('ul li').removeClass("mouseon");
      $('.leftBox2').find('ul li').eq(q).addClass("mouseon");
    });
  }


  $('.rightBox .hiddentxt span').click(function() {
    $(this).parent().parent().parent().find('.txtshow').toggleClass('is-open');
    $(this).toggleClass('bgGray');
  });







