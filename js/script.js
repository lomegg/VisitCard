$(function() {
    console.log( "ready!" );


});

$( document ).ready(function() {

    $('.draggable').each(function(i, obj) {
        //console.log(obj);
        $(obj).data("Left", $(obj).position().left)
            .data("Top", $(obj).position().top)
            .data("Z-index", $(obj).css('z-index'));
    });

    /*$(".draggable").data("Left", $(".draggable").position().left)
        .data("Top", $(".draggable").position().top);*/

    var $wheel_activated = false;
    $( ".draggable" ).draggable({
        stack: ".stackable",
        snap: ".hr-invisible",
        scroll: false,
        start: function() {
            if (!$wheel_activated){
                $( "#box2" ).toggle( "fade", 400);
                setTimeout(function()
                {
                    $( "#box1" ).toggle( "fade", 500);
                }, 300);
                setTimeout(function()
                {
                    $( "#logo_wrench" ).toggle( "pulsate" );
                    $( "#logo_gear" ).addClass( "rotated" );
                }, 1000);
                $wheel_activated = true;
            }
        }
    });

    function returnDraggables(){
        $('.draggable').each(function(i, obj) {
            //console.log(obj);
            $(obj).css('z-index', ($(obj).data("Z-index")));
            $(obj).animate(
                { "left": $(obj).data("Left"),
                    "top": $(obj).data("Top")
                }, "slow");
        });
    };

    $(".social").bind('click', function() {
        returnDraggables();
    });
});

$(".cover").flip({axis: 'x', trigger: 'manual'});
/*$(function() {
    var coverState = true;
    var speed = 500;
    $( ".cover" ).click(function(speed) {
        if ( coverState ) {
            $( ".cover-container" ).animate({
                top: -130,
                complete: setTimeout(function(){
                    $(".cover").flip(true);
                    setTimeout(function(){
                        $(".cover-container").css('z-index',5);
                    }, 170);
                }, 500)
            }, speed );

        } else {
            $(".cover").flip(false);
            setTimeout(function(){
                $(".cover-container").css('z-index',12);
            }, 180);
            setTimeout(function(){
                $( ".cover-container" ).animate({
                    top: 0,
                }, speed );
            }, 500)

        }
        coverState = !coverState;
    });
});*/


/*Animate social strip*/
$(function() {
    /*
    var toggledOnce = false;


    $(".social").hover(function(){
        if (!toggledOnce){
            $(".social").animate({
                left: 0
            }, 1000 );
            toggledOnce = true;
        }
    });*/

    $(".social .label").click(function(){
        var offsetPix = -217;
        var pos = parseInt($(".social").css('left'));
        console.log(typeof pos);
        if (pos === 0) {
            offsetPix = offsetPix;
        } else {
            offsetPix = 0;
        }
        $(".social").animate({
            left: offsetPix
        }, 1000 );

    });

});

