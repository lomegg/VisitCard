$(function() {
    console.log( "ready!" );

    $( "#box2" ).toggle( "fade", 800);
    setTimeout(function()
    {
        $( "#box1" ).toggle( "fade", 1700);
    }, 800);
    setTimeout(function()
    {
        $( "#logo_wrench" ).toggle( "pulsate" );
        $( "#logo_gear" ).addClass( "rotated" );
    }, 2000);
});
