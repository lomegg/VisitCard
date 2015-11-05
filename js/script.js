//Obsolete but reusable code
/*$( document ).ready(function() {
    //setting basic variables

    //var $wheelActivated = false;
    //var $coverFlipped = false;

    $( ".draggable" ).draggable({
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