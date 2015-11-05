$(function() {
    console.log( "ready!" );


});

$( document ).ready(function() {

    var $wheel_activated = false;
    $( ".draggable" ).draggable({
        stack: ".stackable",
        snap: ".hr-invisible",
        scroll: false,
        start: function() {
            //Logo animation
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


    // Record cards position to return to
    $('.draggable').each(function(i, obj) {
        //console.log(obj);
        $(obj).data("Left", $(obj).position().left)
            .data("Top", $(obj).position().top)
            .data("Z-index", $(obj).css('z-index'));
    });


    //Return cards back to place
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

/*Animate social strip*/
$(function() {

    //save your social position, it's important
    $(".social").data("Left", $(".social").position().left);

    $(".social .label").click(function(){
        var offsetPix = $(".social").data("Left");
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

