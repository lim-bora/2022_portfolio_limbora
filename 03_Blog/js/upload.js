function uploadImgPreview() {

    let fileInfo = document.getElementById("imageFileOpenInput").files[0];

    let reader = new FileReader();
    let img = null;

    reader.onload = function() {

        img = document.createElement('img');
        img.src = reader.result;
        img.draggable = 'false';
        img.dataPopoverUpdate ="pos=6|loaded=true";
        document.querySelector('.en-media-image').appendChild(img);
        $('#imageFileOpenInput').hide();
        
    };          

    if( fileInfo ) {

        reader.readAsDataURL( fileInfo );
        
    }
    

}

function uploadVideoPreview() {

    let fileInfo = document.getElementById("videoFileOpenInput").files[0];

    let reader = new FileReader();
    let video = null;

    reader.onload = function() {

        video = document.createElement('video');
        video.src = reader.result;
        video.draggable = 'false';
        video.dataPopoverUpdate ="pos=6|loaded=true";
        document.querySelector('.en-media-image').appendChild(video);
        $('#videoFileOpenInput').hide();
    };          

    if( fileInfo ) {

        reader.readAsDataURL( fileInfo );
        
    }
    

}


$('.OKbtn').click(function(){

    var confirmUp = confirm("등록하시겠습니까?");

    if(confirmUp){

        alert('등록완료');
        window.location.replace('notice.html');
    }else{

        alert('등록실패');
    }

});

function uploadImgGallery(i) {

    let fileInfo =  document.querySelectorAll(".file")[i].files[0];

    let reader = new FileReader();

    reader.onload = function() {
        var img = document.querySelectorAll('.target_img');
        img[i].src = reader.result;
        $('.target_img').eq(i).css('padding','0');
    };          

    if( fileInfo ) {

        reader.readAsDataURL( fileInfo );
        
    }
    

}

function uploadImgCalendar() {

    let fileInfo =  document.querySelector(".Cal_Img").files[0];

    let reader = new FileReader();

    reader.onload = function() {
        var img = document.querySelector('.Calendar_img');
        img.src = reader.result;
        $('.Calendar_img').css('padding','0');
    };          

    if( fileInfo ) {

        reader.readAsDataURL( fileInfo );
        
    }
    

}
