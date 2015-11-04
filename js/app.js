var app = angular.module('lomegg', []);

app.controller('CardsController', function(){
    this.coverState = true;
    this.speed = 500;
    this.flip = function(){
        if ( this.coverState ) {
            $( ".cover-container" ).animate({
                top: -130,
                complete: setTimeout(function(){
                    $(".cover").flip(true);
                    setTimeout(function(){
                        $(".cover-container").css('z-index',5);
                    }, 170);
                }, 500)
            }, this.speed );

        } else {
            $(".cover").flip(false);
            setTimeout(function(){
                $(".cover-container").css('z-index',12);
            }, 180);
            setTimeout(function(){
                $( ".cover-container" ).animate({
                    top: 0,
                }, this.speed );
            }, 500)

        }
        this.coverState = !this.coverState;
    };
});