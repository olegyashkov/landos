'use strict';
(function(){

    $('.slider').slick({
        infinite: true,
        autoplay:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay:true
        
        responsive: [
     {
      breakpoint: 569,
      settings: {
        arrows: false,
        autoplay:true
        
      }
    }
    ]

});

    $('#checked').on("change", function() {
        if ($("#checked").is(':checked')) { 
            $('.form__btn').removeAttr('disabled');
        } else {
            $('.form__btn').attr('disabled',true);
        }
    })

    

    $('.open__btn').on('click', function(e){
        e.preventDefault();
        $('.modal').fadeIn("slow").css('display' , 'block');
    })
    $('.close').on('click' , function(){
        $('.modal').css('display' , 'none');

    })

    $('.form__btn').on('click', function(e){
        e.preventDefault();
        $('.feedback').fadeIn("slow").css('display' , 'flex');
    })
    $('.close').on('click' , function(){
        $('.feedback').fadeOut("slow").css('display' , 'none');

    })
    $('.feedback__btn').on('click' ,function(){
        $('.feedback').fadeOut("slow").css('display' , 'none');
    })

    $('#mdl__checked').on("change", function() {
        if ($("#mdl__checked").is(':checked')) { 
            $('.form__btn--white').removeAttr('disabled');
        } else {
            $('.form__btn--white').attr('disabled',true);
        }
    });

    

})();


