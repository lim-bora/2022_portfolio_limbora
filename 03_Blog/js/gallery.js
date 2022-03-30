var galleryLi = document.querySelectorAll('.gallery');
function inset(i){
    $('.gallery').eq(i).css('box-shadow','4px 4px 5px #ccc inset');   
    $('.boredTxtBox button').eq(i).css('box-shadow','4px 4px 5px #ccc inset');   
};

function outset(i){
    $('.gallery').eq(i).css('box-shadow','0 3px 3px #BABECC');
    $('.boredTxtBox button').eq(i).css('box-shadow','0 3px 3px #BABECC');
};


var count = 0;
var AddSet = true;
$('.gallery01').click(function(){
    if(AddSet == true)
    {
        count++;
        if(count==1){
            $('.gallery02').css('left','33.33%');
            $('.gallery02').css('opacity','1');
        }
        if(count==2){
            $('.gallery03').css('left','66.66%');
            $('.gallery03').css('opacity','1');  
        }
        if(count==3){
            $('.gallery04').css('top','33.33%');
            $('.gallery04').css('left','0');
            $('.gallery04').css('opacity','1');
        }
        if(count==4){
            $('.gallery05').css('top','33.33%');
            $('.gallery05').css('left','33.33%');
            $('.gallery05').css('opacity','1');
        }
        if(count==5){
            $('.gallery06').css('top','33.33%');
            $('.gallery06').css('left','66.66%');
            $('.gallery06').css('opacity','1');
        }
        if(count==6){
            $('.gallery07').css('top','66.66%');
            $('.gallery07').css('left','0');
            $('.gallery07').css('opacity','1');
        }
        if(count==7){
            $('.gallery08').css('top','66.66%');
            $('.gallery08').css('left','33.33%');
            $('.gallery08').css('opacity','1');
        }
        if(count==8){
            $('.gallery09').css('top','66.66%');
            $('.gallery09').css('left','66.66%');
            $('.gallery09').css('opacity','1');
            AddSet = false;
            document.querySelector('.gallery01 img').src = '../icon/icons8-m-128.png';
        }
    }
    else{
        count--;
        if(count==0){
            $('.gallery02').css('left','0%');
            $('.gallery02').css('opacity','0');
            AddSet = true;
            document.querySelector('.gallery01 img').src = '../icon/icons8-plus-128.png';
        }
        if(count==1){
            $('.gallery03').css('left','0%');
            $('.gallery03').css('opacity','0');  
        }
        if(count==2){
            $('.gallery04').css('top','0');
            $('.gallery04').css('left','0');
            $('.gallery04').css('opacity','0');
        }
        if(count==3){
            $('.gallery05').css('top','0');
            $('.gallery05').css('left','0');
            $('.gallery05').css('opacity','0');
        }
        if(count==4){
            $('.gallery06').css('top','0');
            $('.gallery06').css('left','0');
            $('.gallery06').css('opacity','0');
        }
        if(count==5){
            $('.gallery07').css('top','0');
            $('.gallery07').css('left','0');
            $('.gallery07').css('opacity','0');
        }
        if(count==6){
            $('.gallery08').css('top','0');
            $('.gallery08').css('left','0');
            $('.gallery08').css('opacity','0');
        }
        if(count==7){
            $('.gallery09').css('top','0');
            $('.gallery09').css('left','0');
            $('.gallery09').css('opacity','0');
        }
    }
});

var targetList = document.querySelectorAll( '.target_img' );
var targetUrl = document.querySelectorAll( '.target_input' );
for (let i = 0; i < targetList.length; i++) {
    $('.target_img').eq(i).click(function (e) {
        targetUrl.value = targetList[i].src;
        e.preventDefault();
        $('.file').eq(i).click();
    });         
}

$('.Calendar_img').click(function (e) {
    document.querySelector(".Calendar_input").value = document.querySelector(".Calendar_img").src;
    e.preventDefault();
    $('.Cal_Img').click();
});  


function plusBtnSetting(){
    var buttonPlus = document.querySelectorAll('.galleryCM button');
    for (let z = 0; z < buttonPlus.length; z++) {
        $('.galleryCM button').eq(z).on('click', function(){
    
            if($('.galleryTxt').eq(z).css('z-index')!=2){
                $(this).toggleClass('on');
                $('.galleryTxt').eq(z).css('z-index',2);
                $('.galleryTxt').eq(z).css('transform','scale(13)');
                $('.Gbox').eq(z).css('display','inline-block');
            }
            else{
                $(this).toggleClass('on');
                $('.galleryTxt').eq(z).css('z-index',-1);
                $('.galleryTxt').eq(z).css('transform','scale(0)');
                $('.Gbox').eq(z).css('display','none');
            }
        })    
    }
}
plusBtnSetting();

