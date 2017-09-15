function addClassIfVisible(elCls, classesToAdd) {
    var elTop = $(elCls).offset().top - window.innerHeight + 150,
    docTop = $(document).scrollTop();

    var isVis = elTop  < docTop;
    if(isVis){
        jQuery(elCls)
            .css({"visibility":"visible","animation-duration":".8s"})
            .addClass(classesToAdd);
    }
}


jQuery(window).on('scroll',function(){
    addClassIfVisible('.video-bg', 'option fadeInUp animated');
    addClassIfVisible('#firstBlock', 'option fadeInUp animated');
    addClassIfVisible('#secBlock', 'option fadeInUp animated');
    addClassIfVisible('.thirdBlock', 'option fadeInUp animated');
    addClassIfVisible('.fourthBlock', 'option fadeInUp animated');
    addClassIfVisible('.fifthBlock', 'option fadeInUp animated');
});

$(window).on('load scroll', function () {
    var scrolled = $(this).scrollTop();
    // $('.bg-header-img img').css({
    //     'transform': 'translate3d(0, ' + -(scrolled * -0.1) + 'px, 0)'
    // //     //     'opacity': 1 - scrolled / 640
    // });
    $('.bg-header').css({'transform': 'translate3d(0, ' + -(scrolled * 0.2) + 'px, 0)',"opacity":1 - scrolled / 1200}) ;// parallax (25% scroll rate)
    // $('#catcher-clip').css('opacity',1 - scrolled / 1200);
    // $('.bg-header-content-bottom').css({
    //     'transform': 'translate3d(0, ' + -(scrolled * -0.1) + 'px, 0)'
    //
    // })
});





