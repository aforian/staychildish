  /* loading page */
$(window).bind('load',function(){
        $("#loading").fadeOut(800);
        $("#loading-icon").fadeOut(800);
    });

$(document).ready(function(){
    /* click url */
    $('a').click(function(e){
        if(this.getAttribute("target") != "_blank" && !$(this).hasClass('samepage') ){
            e.preventDefault();                   // prevent default anchor behavior
            var goTo = this.getAttribute("href"); // store anchor href
            $("#loading").fadeIn(600);
            setTimeout(function(){
                 window.location = goTo;
            },600);   
        }
    }); 
    
    /* back top */
    $(".backtop").on('click', goto_top);
    function goto_top(){
        $("html,body").animate({
                "scrollTop":$(".home-section").eq(0).offset().top
            },800,'easeInOutExpo');
        return false;
    }
    
    /* srcoll next page */
    for(var i=0;i<3;i++){
        $(".scroll-page a").eq(i).click({id:i},function(e){
            var n=e.data.id+1;
            $("html,body").stop().animate({
                "scrollTop":$(".home-section").eq(n).offset().top-60},600,'easeInOutExpo');
            return false;
        });
    }
    
    /* right-nav & backtop */
    for(var i=0;i<4;i++){
        $(".right-nav ul li").eq(i).on('click',{id:i},function(e){
            var n=e.data.id;
            $("html,body").stop().animate({
                "scrollTop":$(".home-section").eq(n).offset().top-60},800,'easeInOutExpo');
        });
    }
    $(window).scroll(function(){
        for(var i=0;i<4;i++){
            var j=i+1; 
            if( $(window).scrollTop() >= $(".home-section").eq(i).offset().top-80 && $(window).scrollTop() < $(".home-section").eq(j).offset().top ){
                $(".right-nav ul li").css({"background-color":"#454545"});
                $(".right-nav ul li").eq(i).css({"background-color":"#676697"});
                if(i>0){
                    $(".backtop").addClass("active");
                }else{
                    $(".backtop").removeClass("active");
                }
            }; 
        }
    });
    
    /* mobile-nav */
    $(".mobile-closeicon").on("click", mobilemenu); 
    $(".mobile-navicon").on("click", mobilemenu); 
    function mobilemenu(){
        $(".mobile-navbar, .mobile-nav, .home-section, .right-nav").toggleClass("active");
        $(".darkcover").fadeToggle();
    }
    
    /*owltheme*/
    $("#owl-demo").owlCarousel({
        items : 3,
        itemsCustom : false,
        itemsDesktop : [1000,3],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        singleItem : false,
        itemsScaleUp : false,

      });

})