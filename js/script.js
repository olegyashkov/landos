'use strict';
(function(){

    $('#checked').on("change", function() {
        if ($("#checked").is(':checked')) { 
            $('.form__btn').removeAttr('disabled');
        } else {
            $('.form__btn').attr('disabled',true);
        }
    })

    // $('#checkbox-agree').on("change", function() {
    //     if ($("#checkbox-agree").is(':checked')) { 
    //         $('.btn-send').removeAttr('disabled');
    //     } else {
    //         $('.btn-send').attr('disabled',true);
    //     }
    // })

    $('.open__btn').on('click', function(e){
        e.preventDefault();
        $('.modal').css('display' , 'block');
    })
    $('.close').on('click' , function(){
        $('.modal').css('display' , 'none');
    })

})();


