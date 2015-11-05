$( document ).ready(function() {
    //setting basic variables

    //var $wheelActivated = false;
    //var $coverFlipped = false;

    // setting cover as Flippable;
    //$(".cover").flip({axis: 'x', trigger: 'manual'});
    //$("#card").on('flip:change',function(){
       // $coverFlipped = !$coverFlipped;
    });

 /*   $( ".draggable" ).draggable({
        stack: ".stackable",
        snap: ".hr-invisible",
        scroll: false,
        start: function() {
            //Logo animation
            $cardsMoved = true;
            if (!$wheelActivated){
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
                $wheelActivated = true;
            };
        }
    });*/


/*    // Record cards position to return to
    $('.draggable').each(function(i, obj) {
        //console.log(obj);
        $(obj).data("Left", $(obj).position().left)
            .data("Top", $(obj).position().top)
            .data("Z-index", $(obj).css('z-index'));
    });*/

 /*   //Return cards back to place
    function returnDraggables(){
        $('.draggable').each(function(i, obj) {
            //console.log(obj);
            $(obj).css('z-index', parseInt($(obj).css('z-index') + 50));
            $(obj).animate(
                { "left": $(obj).data("Left"),
                    "top": parseInt($(obj).data("Top")) - 80
                }, "slow", function(){
                    $(obj).css('z-index', ($(obj).data("Z-index")));
                    $(obj).animate({ "left": $(obj).data("Left"),
                        "top": $(obj).data("Top")
                    }, "slow");  
                });
        });
        $cardsMoved = false;

    }*/
/*

    $(".social").bind('click', function() {
        if ($cardsMoved) {
            returnDraggables();
        }
    });


*/

/*Animate social strip*/
    //save your social position, it's important
    //$(".social").data("Left", $(".social").position().left);
/*
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

*/