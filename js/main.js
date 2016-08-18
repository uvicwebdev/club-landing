!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document, "script", "twitter-wjs");
$(function() {
    function materialripple() {
        $('.ripple, .rippleblack').on('click', function (event) {
            var $div = $('<div/>'),
            btnOffset = $(this).offset(),
            xPos = event.pageX - btnOffset.left,
            yPos = event.pageY - btnOffset.top;

            $div
                .addClass('circle')
                .css({
                    top: yPos - 15,
                    left: xPos - 15
                })
                .appendTo($(this));

            window.setTimeout(function(){
                $div.remove();
            }, 2000);
        });
    }

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 800);
                return false;
            }
        }
    });


    var clicked = false;
    $(".changeimage").mouseleave(function() {
        if (!clicked) $(".shrugimg2").hide();
        $(".shrugimg").show();
    });
    $(".changeimage").mouseenter(function() {
        if (!clicked) $(".shrugimg").hide();
        $(".shrugimg2").show();
    });
    /*
    $(".changeimage").click(function() {
        $(".shrugimg").hide();
        $(".shrugimg2").show();
        clicked = true;
    });
    */


    function myclick(selector, floating, menu_thing) {
        if (menu_thing) {
            $(".website-mask").fadeToggle();
        }
        $(selector).fadeToggle();
        var top = $(window).scrollTop();
        var left = $(window).scrollLeft();
        if (!floating){
            $('body,html').css('overflow', 'hidden');
        } else {
            $('body,html').css('overflow', 'auto');
        }
        if (menu_thing) {
            $(selector).css({top: top, right : left}).animate({
                'margin-right' : (floater ? -400 : 0)
            }, 500);
        }
        return !floating;
    }

    var floater = false;
    function theslider() {
        $('.triggermenu').click(function() {
            floater = myclick('nav', floater, true);
        });
    }
    $(document).keyup(function(e) {
        if ((e.keyCode == 27) && (floater === true)) {
            floater = myclick('nav', floater, true);
        }
    });

    var youtube_floater = false;
    var youtube_url = 'https://www.youtube.com/embed/Fpgj04Tp4rs?autoplay=1&showinfo=0&rel=0&modestbranding=1'
    function theyoutubebutton() {
        $('.triggeryoutube').click(function() {
            youtube_floater = myclick('.website-mask2,.yt-popup', youtube_floater);
            document.getElementById('youtubevid').src = youtube_floater ? youtube_url : '';
        });
    }
    $(document).keyup(function(e) {
        if ((e.keyCode == 27) && (youtube_floater === true)) {
            youtube_floater = myclick('.website-mask2,.yt-popup', youtube_floater);
            document.getElementById('youtubevid').src = youtube_floater ? youtube_url : '';
        }
    });

    var l;
    $(window).on('load resize', function() {
        window.clearInterval(l);
        if ($(window).width() < 780) {
            l = window.setInterval(function() {
                var elem1 = $(".shrug-guy .col-6.shrugslide1");
                var elem2 = $(".shrug-guy .col-6.shrugslide2");
                elem1.removeClass("shrugslide1");
                elem2.removeClass("shrugslide2");
                elem1.addClass("shrugslide2");
                elem2.addClass("shrugslide1");
            }, 6000);
        } else {
        }
    });




    theslider();
    theyoutubebutton();
    materialripple();

});
