
function printResult() {
    var boredtxt = document.querySelector('.resultBox');
    var boradPrint = document.getElementById('print').value;
    clickCount = 0;

        clickCount++;

        var div = document.createElement('div');
        var result = document.createElement('div');
        result.className='result';
        div.className='div';
        boredtxt.appendChild(div);
        div.appendChild(result);
        result.innerText = boradPrint;

        var OpenCheck = document.createElement('div');
        var onCheck01 = document.createElement('div');
        var onCheck02 = document.createElement('div');
        var onCheck03 = document.createElement('div');
        var resultClose = document.createElement('div');
        var closebtn01 = document.createElement('div');
        var closebtn02 = document.createElement('div');
        OpenCheck.className='OpenCheck';
        onCheck01.className='onCheck01';
        onCheck02.className='onCheck02';
        onCheck03.className='onCheck03';
        result.appendChild(OpenCheck);
        OpenCheck.appendChild(onCheck01);
        OpenCheck.appendChild(onCheck02);
        OpenCheck.appendChild(onCheck03);

        $('#reset')[0].reset();
        
        $(OpenCheck).click(function(){
            resultClose.className='resultClose';
            result.after(resultClose);
            $(result).css('width','86%');
            $(resultClose).css('opacity','1');
            $(onCheck01).css('transform','translateY(9px)');
            $(onCheck02).css('transform','scale(2)');
            $(onCheck03).css('transform','translateY(-9px)');
            $(result).css('box-shadow','0 3px 3px #BABECC');

            closebtn01.className='closebtn01';
            closebtn02.className='closebtn02';
            resultClose.appendChild(closebtn01);
            resultClose.appendChild(closebtn02);

            $(resultClose).click(function(){
                $(resultClose).css('opacity','0');
                $(result).css('width','96%');
                $(onCheck01).css('transform','translateY(0px)');
                $(onCheck02).css('transform','scale(0)');
                $(onCheck02).css('transform','translateY(0px)');
                $(onCheck03).css('transform','translateY(0px)');
                $(result).remove();
                $(resultClose).remove();
            })
            $(div).mouseleave(function(){
                $(resultClose).css('opacity','0');
                $(result).css('width','96%');
                $(onCheck01).css('transform','translateY(0px)');
                $(onCheck02).css('transform','scale(0)');
                $(onCheck02).css('transform','translateY(0px)');
                $(onCheck03).css('transform','translateY(0px)');
            })
        })
}


