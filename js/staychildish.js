$(document).ready(function(){
    /* back top */
    $(".desktop-logo a").on('click', goto_top);
    $(".backtop").on('click', goto_top);
    function goto_top(){
        $("html,body").animate({
                "scrollTop":$("#homepage").offset().top-60
            },800,'easeInOutExpo');
        return false;
    }
    
    for(var i=0;i<3;i++){
        $(".scroll-page a").eq(i).click({id:i},function(e){
            var n=e.data.id+1;
            $("html,body").stop().animate({
                "scrollTop":$(".home-section").eq(n).offset().top-60},600,'easeInOutExpo');
            return false;
        });
    }
    
    /* right-nav */
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
    $(".mobile-navicon").on("click",function(){
        $(".mobile-navbar, .mobile-nav, .home-section, .darkcover, .right-nav").toggleClass("active");
    }); 
})