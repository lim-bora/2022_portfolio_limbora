function TXTbtnOn(){
    const TXTbtn = document.querySelectorAll('.TXTbtn');

    for(let btn = 0; btn < 16; btn++){
        $(TXTbtn[btn]).click(function(){
            $(TXTbtn).eq(btn).addClass('on');
        })
    }
}
function TXTbtnOff(){
    const TXTbtn = document.querySelectorAll('.TXTbtn');

    for(let btn = 0; btn < 16; btn++){
        $(TXTbtn[btn]).click(function(){
            $(TXTbtn).removeClass('on');
        })
    }
}

function boxRemove(){
    var boxCm = document.querySelectorAll('.boxCm');
    $('.boxCm').css('display','none');
}

function UploadBoxRemove(){
    $('.UploadBox').css('display','none');
}


const categoryOn = document.querySelectorAll('.categorySection > ul > li');
for (let i = 0; i < categoryOn.length; i++) {
    $(categoryOn[i]).click(function(){
        $(categoryOn).css('color','#5b5b5b');
        $(categoryOn).css('text-shadow','0px 0px #fff');
        $(categoryOn).css('font-size','24px');

        $(categoryOn[i]).css('color','#D18181');
        $(categoryOn[i]).css('text-shadow','-2px 0px #BABAB9');
        $(categoryOn[i]).css('font-size','25px');    
        $(categoryOn[i]).css('transition','0.3s');   
    })
}


function noticeOn(){
    $('.noticeCM').hide();
    $('.notice').css('display','block');
}
function boredOn(){
    $('.noticeCM').hide();
    $('.bored').css('display','block');
}
function album01On(){
    $('.noticeCM').hide();
    $('.album01').css('display','block');
}
function album02On(){
    $('.noticeCM').hide();
    monthAni.play();
    $('.album02').css('display','block');
}


var browserZoomLevel = 100 + (100 - Math.round(Math.floor(window.devicePixelRatio*10) * 10));
$('body').css('zoom', ( browserZoomLevel )+'%');