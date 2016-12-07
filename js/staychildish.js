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
    var section_num = $(".home-section").length-1;
    for(var i=0;i<5;i++){
        $(".right-nav ul li").eq(i).on('click',{id:i},function(e){
            var n=e.data.id;
            $("html,body").stop().animate({
                "scrollTop":$(".home-section").eq(n).offset().top-60},800,'easeInOutExpo');
        });
    }
    $(window).scroll(function(){
        for(var i=0;i<section_num;i++){
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
    var point, totalpoint, result_img, result_text;

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
        return item;
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
    
    /*result point*/
    $("#submit").click(function(){
        var alldone = $('input[name="q10"]:checked').val();
        if(alldone){
            getresult();
        }
        else{
            $(":radio").parent().css({"background-color":"#ffcbbe"});
        }
    });
    
    function getresult(){
        totalpoint = 0;
        for(var i=1;i<=10;i++){
            point = $('input[name="q'+i+'"]:checked').val();
            totalpoint = totalpoint + Number(point);
        }
        $("#result-point").html("你的童理心指數是："+totalpoint+"分！" );
        
        if(totalpoint<10){
            result_img = 1;
            result_text = "現在的你還在灰暗的街道中游走。換個心境思考或回憶小時候，或許你就能找到童真樂園的入口！";
        }else if(totalpoint>=10 && totalpoint<20){
            result_img = 2;
            result_text = "你是個即將踏入童理心樂園世界的人！希望未來的你能夠在童理心樂園發現更多美好，相信你能夠更快樂！";
        }else if(totalpoint>=20 && totalpoint<30){
            result_img = 3;
            result_text = "恭喜你已經進入童理心童真遊樂園！請享受與珍惜生活上的一切，偶爾放鬆發現生活上的小趣事，也許就能更有趣的生活！";
        }else{
            result_img = 4;
            result_text = "恭喜你已經進入童理心童真遊樂園！你具有滿滿的童理心能夠享受生活，請繼續保持現有的童真狀態！";
        }
        $(".result-img img").attr("src", "images/result/postcard0"+result_img +".jpg");
        $("#result-text").html(result_text);
        $(".quiz-wrap").fadeOut(500);
        $(".quiz-result").delay(500).fadeIn(500);
    }
    
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