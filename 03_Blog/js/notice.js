
function boldBtn(){
   
    boxRemove();
    UploadBoxRemove();   
    var style = '';
        if(wfSel.getSelectedRange() == true)
        {
            style = 'font-weight : bold';
            wfSel.replace(wfSel.getTEXT(),style);
        }
        else
        {
            if($('.bold').hasClass('on') == true){
                TXTbtnOff();
                $('#txt').css('fontWeight','normal');
                $('#txt span').css('fontWeight','normal');
                
            }else{
                TXTbtnOn();
                $('#txt').css('fontWeight','bold');
                $('#txt span').css('fontWeight','bold');
            }
        }
}

function inclinationBtn(){
 
        boxRemove();
        UploadBoxRemove();
        var style = '';
        if(wfSel.getSelectedRange() == true)
        {
            style = 'font-style : oblique';
            wfSel.replace(wfSel.getTEXT(),style);
        }
        else
        {
            if($('.inclination').hasClass('on') == true){
                TXTbtnOff();
                $('#txt').css('fontStyle','normal');
                $('#txt span').css('fontStyle','normal');
                
            }else{
                TXTbtnOn();
                $('#txt').css('fontStyle','oblique');
                $('#txt span').css('fontStyle','oblique');
            }
        }
}

function underlineBtn(){

        boxRemove();
        UploadBoxRemove();
        var style = '';
        if(wfSel.getSelectedRange() == true)
        {
            style = 'text-decoration : underline';
            wfSel.replace(wfSel.getTEXT(),style);
        }
        else
        {
            if($('.underline').hasClass('on') == true){
                TXTbtnOff();
                $('#txt').css('textDecoration','none');
                $('#txt span').css('textDecoration','none');
    
            }else{
                TXTbtnOn();
                $('#txt').css('textDecoration','underline');
                $('#txt span').css('textDecoration','underline');
            }
        }   
}

function linethroughBtn(){

        boxRemove();
        UploadBoxRemove();
        var style = '';
        if(wfSel.getSelectedRange() == true)
        {
            style = 'text-decoration : line-through';
            wfSel.replace(wfSel.getTEXT(),style);
        }
        else
        {
            if($('.linethrough').hasClass('on') == true){
                TXTbtnOff();
                $('#txt').css('textDecoration','none');
                $('#txt span').css('textDecoration','none');
            }else{
                TXTbtnOn();
                $('#txt').css('textDecoration','line-through');
                $('#txt span').css('textDecoration','line-through');
            }
        }
}

function subBtn(){

        boxRemove();
        UploadBoxRemove();
        var style = '';
        if(wfSel.getSelectedRange() == true)
        {
            style = 'vertical-align : sub';
            wfSel.replace(wfSel.getTEXT(),style);
        }
        else
        {
            if($('.sub').hasClass('on') == true){
                TXTbtnOff();
                $('#txt').css('verticalAlign','baseline');
            }else{
                TXTbtnOn();
                $('#txt').css('verticalAlign','sub');
                $('#txt span').css('verticalAlign','baseline');
            }
        }
}

function superBtn(){

        boxRemove();
        UploadBoxRemove();
        var style = '';
        if(wfSel.getSelectedRange() == true)
        {
            style = 'vertical-align : super';
            wfSel.replace(wfSel.getTEXT(),style);
        }
        else
        {
            if($('.super').hasClass('on') == true){
                TXTbtnOff();
                $('#txt div').css('verticalAlign','baseline');
            }else{
                TXTbtnOn();
                $('#txt div').css('verticalAlign','super');
                $('#txt span').css('verticalAlign','baseline');
            }
        }
}

var rotate = 1;
function rotateRightBtn(){
        TXTbtnOn();
        boxRemove();
        UploadBoxRemove();
        $('#txt img').css({'transform':'rotate('+90 * rotate +'deg)'});
        rotate++;
}

function rotateLeftBtn(){
        TXTbtnOn();
        boxRemove();
        UploadBoxRemove();
        $('#txt img').css({'transform':'rotate('+ -90 * rotate +'deg)'});
        rotate--;
}

function uploadImg(){
        boxRemove();
        if($('#imageFileOpenInput').css('display') == 'block')
    {
        $('#imageFileOpenInput').css('display','none');
        TXTbtnOff();
    }
    else
    {
        $('#imageFileOpenInput').css('display','block');
        TXTbtnOn();
    }
        $('#videoFileOpenInput').css('display','none');
}

function uploadVideo(){
        boxRemove();
        if($('#videoFileOpenInput').css('display') == 'block')
    {
        $('#videoFileOpenInput').css('display','none');
        TXTbtnOff();
    }
    else
    {
        $('#videoFileOpenInput').css('display','block');
        TXTbtnOn();
    }
        $('#imageFileOpenInput').css('display','none');
}

const fontSizeColor = document.querySelectorAll('.fontsizeBox > ul > li');
for (let i = 0; i < fontSizeColor.length; i++) {
    $(fontSizeColor[i]).mouseover(function(){
        $(fontSizeColor).css('color','#222');
        $(fontSizeColor).css('fontWeight',100);
        $(fontSizeColor[i]).css('color','#4179B5');
        $(fontSizeColor[i]).css('fontWeight','bold');
    })
}

function fontSizeSelect(fontSize)
{
    TXTbtnOff();
    switch (fontSize) {
        case 11:
            var style = '';
            if(wfSel.getSelectedRange() == true)
            {
                style = 'font-size : 11';
                wfSel.replace(wfSel.getTEXT(),style);
            }
            else
            {
                $('#txt').css('fontSize',11);
                $('#txt span').css('fontSize',11);
            }
            boxRemove();
            break;
        case 13:
            var style = '';
            if(wfSel.getSelectedRange() == true)
            {
                style = 'font-size : 13';
                wfSel.replace(wfSel.getTEXT(),style);
            }
            else
            {
                $('#txt').css('fontSize',13);
                $('#txt span').css('fontSize',13);
            }
            boxRemove();
            break;
        case 15:
            var style = '';
            if(wfSel.getSelectedRange() == true)
            {
                style = 'font-size : 15';
                wfSel.replace(wfSel.getTEXT(),style);
            }
            else
            {
                $('#txt').css('fontSize',15);
                $('#txt span').css('fontSize',15);
            }
            boxRemove();
            break;
        case 19:
            var style = '';
            if(wfSel.getSelectedRange() == true)
            {
                style = 'font-size : 19';
                wfSel.replace(wfSel.getTEXT(),style);
            }
            else
            {
                $('#txt').css('fontSize',19);
                $('#txt span').css('fontSize',19);
            }
            boxRemove();
            break;
        case 24:
            var style = '';
            if(wfSel.getSelectedRange() == true)
            {
                style = 'font-size : 24';
                wfSel.replace(wfSel.getTEXT(),style);
            }
            else
            {
                $('#txt').css('fontSize',24);
                $('#txt span').css('fontSize',24);
            }
            boxRemove();
            break;
        case 28:
            var style = '';
            if(wfSel.getSelectedRange() == true)
            {
                style = 'font-size : 28';
                wfSel.replace(wfSel.getTEXT(),style);
            }
            else
            {
                $('#txt').css('fontSize',28);
                $('#txt span').css('fontSize',28);
            }
            boxRemove();
            break;
        case 30:
            var style = '';
            if(wfSel.getSelectedRange() == true)
            {
                style = 'font-size : 30';
                wfSel.replace(wfSel.getTEXT(),style);
            }
            else
            {
                $('#txt').css('fontSize',30);
                $('#txt span').css('fontSize',30);
            }
            boxRemove();
            break;
        case 34:
            var style = '';
            if(wfSel.getSelectedRange() == true)
            {
                style = 'font-size : 34';
                wfSel.replace(wfSel.getTEXT(),style);
            }
            else
            {
                $('#txt').css('fontSize',34);
                $('#txt span').css('fontSize',34);
            }
            boxRemove();
            break;
        case 38:
            var style = '';
            if(wfSel.getSelectedRange() == true)
            {
                style = 'font-size : 38';
                wfSel.replace(wfSel.getTEXT(),style);
            }
            else
            {
                $('#txt').css('fontSize',38);
                $('#txt span').css('fontSize',38);
            }
            boxRemove();
            break;
        default:
            break;
    }
}


function textTransform(txtTrans)
{
    TXTbtnOff();
    switch (txtTrans) {
        case 1:
            var style = '';
            $('#trans').attr('src','./icon/icons8Text60.png');
            if(wfSel.getSelectedRange() == true)
            {
                style = 'text-transform : capitalize;';
                wfSel.replace(wfSel.getTEXT(),style);
            }
            else
            {
                $('#txt').css('textTransform','capitalize');
            }         
            boxRemove();
            break;
        case 2:
            var style = '';
            $('#trans').attr('src','./icon/icons8-capital-60.png');
            if(wfSel.getSelectedRange() == true)
            {
                style = 'text-transform : uppercase;';
                wfSel.replace(wfSel.getTEXT(),style);
            }
            else
            {
                $('#txt').css('textTransform','uppercase');
            }               
            boxRemove();
            break;
        case 3:
            var style = '';
            $('#trans').attr('src','./icon/icons8-small-2-60.png');
            if(wfSel.getSelectedRange() == true)
            {
                style = 'text-transform : lowercase;';
                wfSel.replace(wfSel.getTEXT(),style);
            }
            else
            {
                $('#txt').css('textTransform','lowercase');
            }            
            boxRemove();
            break;
        default:
            break;
    }
}

function front(frontbtn){
    TXTbtnOff();

    switch (frontbtn) {
        case 1:
            $('#front').attr('src','./icon/iconmonstr-text-12-240.png');
            $('#txt').css('textAlign','left');
            boxRemove();
            break;
        case 2:
            $('#front').attr('src','./icon/iconmonstr-text-13-240.png');
            $('#txt').css('textAlign','center');
            boxRemove();
            break;
        case 3:
            $('#front').attr('src','./icon/iconmonstr-text-14-240.png');
            $('#txt').css('textAlign','right');
            boxRemove();
            break;
        case 4:
            $('#front').attr('src','./icon/iconmonstr-text-15-240.png');
            $('#txt').css('textAlign','justify');
            boxRemove();
            break;        
        default:
            break;
    }
}

function titleStyle(title)
{
    TXTbtnOff();

    switch (title) {
        case 1:
            var style = '';
            $('#titleStyle').attr('src','./icon/fontnormal.png');
            if(wfSel.getSelectedRange() == true)
            {
                style = 'font-size : 13px; font-weight : 300;';
                wfSel.replace(wfSel.getTEXT(),style);
            }
            else
            {
                $('#txt').css('fontSize','13px');
                $('#txt').css('fontWeight','300');
            }
            boxRemove();
            break;
        case 2:
            var style = '';
            $('#titleStyle').attr('src','./icon/fontTitle.png');
            if(wfSel.getSelectedRange() == true)
            {
                style = 'font-size : 20px; font-weight : bold;';
                wfSel.replace(wfSel.getTEXT(),style);
            }
            else
            {
                $('#txt').css('fontSize','20px');
                $('#txt').css('fontWeight','bold');
            }
            boxRemove();
            break;
        default:
            break;
    }
}

function titleNumber(number)
{
    TXTbtnOff();

    switch (number) {
        case 1:
            var style = '';
            $('#titleNumber').attr('src','./icon/iconmonstr-text-21-240.png');
            if(wfSel.getSelectedRange() == true)
            {
                style = 'list-style-type : decimal;';
                wfSel.liReplace(wfSel.getTEXT(),style);
            }
            else
            {
                // $('#txt div').contents().unwrap().wrap( '<li></li>' );
                // $('#txt div').css('listStyleType','decimal');
            }
            boxRemove();
            break;
        case 2:
            var style = '';
            $('#titleNumber').attr('src','./icon/iconmonstr-text-20-240.png');
            if(wfSel.getSelectedRange() == true)
            {
                style = 'list-style-type : disc;';
                wfSel.liReplace(wfSel.getTEXT(),style);
            }
            else
            {
                // $('#txt div').contents().unwrap().wrap( '<li></li>' );
                // $('#txt div').css('listStyleType','disc');
            }
            boxRemove();
            break;
        default:
            break;
    }
}

function enlarge(enl){
    TXTbtnOff();

    switch (enl) {
        case 1:
            $('#enlargement').attr('src','./icon/icons8-enlarge-60.png');
            $('#titleBox').css('width',1400);
            $('#txtBox').css('width',1400);
            $('.OK').css('width',1400);
            $('.txtOptionButton > ul > li > ul > li > input').css('padding','10px 33px');
            $('#titleStyle').css('padding','0px 23px');
            $('#txt').css('fontSize','16px');
            $('#imageFileOpenInput').css('right',-36);
            $('#imageFileOpenInput').css('width',300);
            $('#videoFileOpenInput').css('right',50);
            $('#videoFileOpenInput').css('width',300);
            boxRemove()
            break;
        case 2:
            $('#enlargement').attr('src','./icon/icons8-compress-60.png');
            $('#titleBox').css('width',800);
            $('#txtBox').css('width',800);
            $('.OK').css('width',800);
            $('.txtOptionButton > ul > li > ul > li > input').css('padding','10px 15px');
            $('#titleStyle').css('padding','4px 8px');
            $('#txt').css('fontSize','13px');
            $('#imageFileOpenInput').css('right',-100);
            $('#imageFileOpenInput').css('width',250);
            $('#videoFileOpenInput').css('right',-50);
            $('#videoFileOpenInput').css('width',250);
            boxRemove();
            break;        
    
        default:
            break;
    }
}

function enlargeOpen(){
    var enlargementBox = document.querySelector('.enlargementBox');

    UploadBoxRemove();

    if($('.enlargementBox').css('display') == 'block')
    {
        $('.enlargementBox').css('display','none');
        TXTbtnOff();
    }
    else
    {
        $('.enlargementBox').css('display','block');
        TXTbtnOn();
    }
    
    $('.boxCm').not(enlargementBox).css('display','none');
}

function transOpen(){
    var textTrans = document.querySelector('.textTrans');

    UploadBoxRemove();

    if($('.textTrans').css('display') == 'block')
    {
        $('.textTrans').css('display','none');
        TXTbtnOff();
    }
    else
    {
        $('.textTrans').css('display','block');
        TXTbtnOn();
    }

    $('.boxCm').not(textTrans).css('display','none');
}

function fontsizeOpen(){
    var fontsizeBox = document.querySelector('.fontsizeBox');

    UploadBoxRemove();

    if($('.fontsizeBox').css('display') == 'block')
    {
        $('.fontsizeBox').css('display','none');
        TXTbtnOff();
    }
    else
    {
        $('.fontsizeBox').css('display','block');
        TXTbtnOn();
    }

    $('.boxCm').not(fontsizeBox).css('display','none');
}

function frontOpen(){
    var frontBox = document.querySelector('.frontBox');

    UploadBoxRemove();
    

    if($('.frontBox').css('display') == 'block')
    {
        $('.frontBox').css('display','none');
        TXTbtnOff();
    }
    else
    {
        $('.frontBox').css('display','block');
        TXTbtnOn();
    }

    $('.boxCm').not(frontBox).css('display','none');
}

function titleStyleOpen(){
    var titleStyleBox = document.querySelector('.titleStyleBox');

    UploadBoxRemove();

    $('#titleStyle').css('backgroundColor','#F3F1F1');

    if($('.titleStyleBox').css('display') == 'block')
    {
        $('.titleStyleBox').css('display','none');
        TXTbtnOff();
    }
    else
    {
        $('.titleStyleBox').css('display','block');
        TXTbtnOn();
    }

    $('.boxCm').not(titleStyleBox).css('display','none');
}

function titleNumberOpen(){
    var titleNumberBox = document.querySelector('.titleNumberBox');

    UploadBoxRemove();

    if($('.titleNumberBox').css('display') == 'block')
    {
        $('.titleNumberBox').css('display','none');
        TXTbtnOff();
    }
    else
    {
        $('.titleNumberBox').css('display','block');
        TXTbtnOn();
    }

    $('.boxCm').not(titleNumberBox).css('display','none');
}

