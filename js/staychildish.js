  /* loading page */
$(window).load(function(){
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
                "scrollTop":$("body").offset().top
            },800,'easeInOutExpo');
        return false;
    }
    
    /* srcoll next page */
    for(var i=0;i<4;i++){
        $(".scroll-wrap a").eq(i).click({id:i},function(e){
            var n=e.data.id+1;
            $("html,body").stop().animate({
                "scrollTop":$(".home-section").eq(n).offset().top-60},600,'easeInOutExpo');
            return false;
        });
    }
    
    /* right-nav & backtop */
    for(var i=0;i<5;i++){
        $(".right-nav ul li").eq(i).on('click',{id:i},function(e){
            var n=e.data.id;
            $("html,body").stop().animate({
                "scrollTop":$(".home-section").eq(n).offset().top-60},800,'easeInOutExpo');
        });
    }
    $(window).scroll(function(){
        for(var i=0;i<5;i++){
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
        $("#darkcover").fadeToggle();
    }
    
    
    /*quiz begin & next page*/
    var bar_width= 0, page_num=0;
    var point, totalpoint;

    $("#quiz-begin").click(function(){
        $(".quiz-entry").fadeOut(800);
        nextpage();
    })
    $("#next-question").click(function(){
        var item = $(":radio:checked").length;
        if(item == page_num){
            nextpage();
        }
        else{
            $(":radio").parent().css({"background-color":"#ffcbbe"});
            $(":radio:checked").parent().css({"background-color":"#fff"});
        }
        
    })
    
    function nextpage(){
        $(":radio").parent().css({"background-color":"#fff"});
        $("html,body").animate({
            "scrollTop":$("body").offset().top
        },400);
        $(".quiz-question").hide();
        for(i=page_num;i<(page_num+3);i++){
            $(".quiz-question").eq(i).fadeIn(800);
        }
        page_num+=3;
        
        if(page_num>=$(".quiz-question").length){
                $("#next-question").hide();
                $("#submit").show();
        }
    }
    
    /*progress bar*/
    for(var i=1;i<=10;i++){
        $('input[name="q'+i+'"]:radio').change({id:i},function(e){
            n=e.data.id;
            progressbar();
            $('input[name="q'+n+'"]:radio').unbind('change');
        })
    }
    function progressbar(){
        bar_width+=10;
        $(".quiz-progress").css({"left":bar_width+"%"});
    }
    
    /*count point*/
    $("#submit").click(function(){
        totalpoint = 0;
        for(var i=1;i<=10;i++){
            point = $('input[name="q'+i+'"]:checked').val();
            totalpoint = totalpoint + Number(point);
        }
        alert("你的童理心指數是："+totalpoint );
        return totalpoint;
    });
    
    /*owltheme*/
    $("#owl-demo").owlCarousel({
        itemsCustom : [
            [1000,3],
            [768,2],
            [479,1],
            [0,1]
        ],
        singleItem : false,
        itemsScaleUp : false,
    });
    
    var advice = $("#video-advice");
    advice.owlCarousel({
        items : 4,
        itemsCustom : false,
        itemsDesktop : [1000,3],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        singleItem : false,
        itemsScaleUp : false,
        autoPlay: true,
    });
     $(".advice-next").click(function(){
        advice.trigger('owl.next');
      })
    $(".advice-prev").click(function(){
        advice.trigger('owl.prev');
      })
})