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







