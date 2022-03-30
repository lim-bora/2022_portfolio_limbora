
$( document ).ready( function() {
    /*PC카트 옵션창 on/off*/ 
    $('.pc_cart').click(function(){
        $('.pc_cart aside').toggleClass('pcCart_asideON');
    });

    /*모바일 푸터 아코디언*/ 
    $( '.Mfooter_content .footernav div').click( function() {
        $('.Mfooter_content .footernav div ul').slideUp();
        $(this).find('i').toggleClass('active');
        if($(this).find('ul').css('display') == 'none')
        $(this).find('ul').slideDown();
    } );

    /*모바일 네비*/ 
    $('#Mtop-nav nav #nav-M ul li.m_slide').click(function(){
        $(this).toggleClass('active');
        $('header nav').toggleClass('active');
        $('.slideDown-nav').toggleClass('active');
        $('#Mtop-nav nav #nav-M ul li.m_cart').toggleClass('active');
    });

    $('.searchBox input').click(function(){
        $('header nav').addClass('search');
        $('.slideDown-nav').addClass('search');
        $('.M_search .searchX').addClass('active');
        $('.searchplusTXT').addClass('active');
        $('.navbasicTXT').css('display','none');
    });
 
    $('.M_search .searchX').click(function(){
        $('header nav').removeClass('search');
        $('.slideDown-nav').removeClass('search');
        $(this).removeClass('active');
        $('.searchplusTXT').removeClass('active');
        $('.navbasicTXT').css('display','block');
    });




} );