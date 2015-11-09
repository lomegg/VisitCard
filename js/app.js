var app = angular.module('lomegg', []);

app.controller('CardsController', function(){
    var cardsCtrl = this;
    this.coverState = true; //true is closed, false is open
    this.speed = 500;
    this.cardsMoved = false;
    this.socialPosition = $(".social").position().left;
    this.pullSocial = function(){
        if (parseInt($(".social").css('left')) === 0) {
            cardsCtrl.offsetPix = cardsCtrl.socialPosition;
        } else {
            cardsCtrl.offsetPix = 0;
        }
        $(".social").animate({
            left: cardsCtrl.offsetPix
        }, this.speed );
        if (cardsCtrl.cardsMoved){
            cardsCtrl.returnDraggables();
        }
    };
    //flippin on click, with animation and slide!
    this.flipOver = function(){
        if ( cardsCtrl.coverState ) {
            $( ".cover-container" ).animate({
                top: -130,
                complete: setTimeout(function(){
                    $(".cover").flip(true);
                    setTimeout(function(){
                        $(".cover-container").css('z-index',5);
                        if(!$('.cover .back p').is(":visible")){ cardsCtrl.toggleCardsAdvise(); }
                    }, 170);
                }, 500)
            }, cardsCtrl.speed );
        } else {
            $(".cover").flip(false);
            setTimeout(function(){
                $(".cover-container").css('z-index',15);
            }, 180);
            setTimeout(function(){
                $( ".cover-container" ).animate({
                    top: 0,
                }, cardsCtrl.speed );
            }, 500)

        }
        this.coverState = !this.coverState;
    };

    this.toggleCardsAdvise = function(){
        $('.cover .back p').fadeToggle("slow", "linear");
    };

    //Return cards back to place
    this.returnDraggables =  function(){
        var delayTime = 0;
        if (cardsCtrl.coverState){
            delayTime = 1000;
            console.log('coverState is ' + cardsCtrl.coverState + ' delayTime is ' + delayTime );
            cardsCtrl.flipOver();
        };
        setTimeout(function(){
            $('.draggable').each(function(i, obj) {
                var delayTime = 0;
                //console.log(obj);
                $(obj).css('z-index', parseInt($(obj).css('z-index') + 50));

                console.log('coverState is ' + cardsCtrl.coverState + ' delayTime is ' + delayTime );
                

                    $(obj).animate(
                        { "left": $(obj).data("Left"),
                            "top": parseInt($(obj).data("Top")) - 80
                        }, 500, function(){
                            $(obj).css('z-index', ($(obj).data("Z-index")));
                            $(obj).animate({ "left": $(obj).data("Left"),
                                "top": $(obj).data("Top")
                            }, 500, function(){
                                if (!cardsCtrl.coverState) {
                                    cardsCtrl.flipOver();
                                }
                            });
                        });
            });
        }, delayTime);
        cardsCtrl.cardsMoved = false;
        if (cardsCtrl.tooltipState){cardsCtrl.toggleTooltip(300)};
        };

    $(".cover").flip({axis: 'x', trigger: 'manual'});


    $( ".draggable" ).draggable({
        stack: ".stackable",
        snap: ".card",
        scroll: false,
        start: function() {
            //Logo animation
            cardsCtrl.cardsMoved = true;
            if (!cardsCtrl.tooltipState){cardsCtrl.toggleTooltip(900)};
            if($('.cover .back p').is(":visible")){ cardsCtrl.toggleCardsAdvise(); }
        }
    });

    // Record cards position to return to
    $('.draggable').each(function(i, obj) {
        //console.log(obj);
        $(obj).data("Left", $(obj).position().left)
            .data("Top", $(obj).position().top)
            .data("Z-index", $(obj).css('z-index'));
    });


    //tooltips
    this.tooltipState = false;
    this.toggleTooltip = function(speed) {
        $( ".tooltip" ).fadeToggle( speed, "linear" );
        cardsCtrl.tooltipState = !cardsCtrl.tooltipState;
    };


    //toggle
    this.hideMe = function($event){
        $event.fadeToggle( speed, "linear" );
    };

    //show cardholder as soon as loaded
    $( "#cardholder" ).animate({
        top:0
    }, 1500, 'easeOutCirc' );


    //labels functions
    this.skillsHeader = "My skills";
    this.changeSkillsHeader = function(label){
        cardsCtrl.skillsHeader =  label.name + " - " + label.description;
    };


    //labels for last card
    this.labels = [
        {
            name: 'Ruby',
            description: 'Ruby language',
            image: 'img/logos/ruby.png'
        },
        {
            name: 'Ruby on Rails',
            description: 'Ruby on Rails MVC framework',
            image: 'img/logos/rails.png'
        },
        {
            name: 'MongoDB',
            description: 'NoSQL database',
            image: 'img/logos/mongodb.png'
        },
        {
            name: 'JavaSript',
            description: 'JavaScript language',
            image: 'img/logos/js.png'
        },
        {
            name: 'CoffeeScript',
            description: 'a Javascript helper language',
            image: 'img/logos/coffee.png'
        },
        {
            name: 'NodeJS',
            description: 'Javascript-based back-end platform',
            image: 'img/logos/node-js.png'
        },
        {
            name: 'AngularJS',
            description: 'Front-end MVC framevork',
            image: 'img/logos/angular-js.jpg'
        },
        {
            name: 'GIT',
            description: 'Version Control System',
            image: 'img/logos/git.jpg'
        },
        {
            name: 'HTML 5',
            description: 'HyperText Markup Language 5',
            image: 'img/logos/html.jpg'
        },
        {
            name: 'SLIM',
            description: 'Template language',
            image: 'img/logos/slim.jpg'
        },
        {
            name: 'HAML',
            description: 'Template language',
            image: 'img/logos/haml.jpg'
        },
        {
            name: 'CSS 3',
            description: 'Cascading Style Sheets 3',
            image: 'img/logos/css.jpg'
        },
        {
            name: 'Sass',
            description: 'CSS based styling language',
            image: 'img/logos/sass.jpg'
        },
        {
            name: 'LESS',
            description: 'CSS based styling language',
            image: 'img/logos/less.png'
        },
        {
            name: 'Bootstrap',
            description: 'mobile first front-end framework',
            image: 'img/logos/bootstrap.jpg'
        }
    ];
});

