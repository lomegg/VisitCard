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