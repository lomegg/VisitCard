$(function() {
    console.log( "ready!" );


});

$(function() {
    var $wheel_activated = false;
    $( ".cards .card" ).draggable({
        stack: ".cards .stackable",
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