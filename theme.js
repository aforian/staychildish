$(document).ready(function(){
    /*owltheme*/
    $("#owl-demo").owlCarousel({
        itemsCustom : [
            [1000, 3],
            [768, 2],
            [479, 1],
            [0, 1]
        ],
        singleItem : false,
        itemsScaleUp : false
    });
    
    var advice = $("#video-advice");
    advice.owlCarousel({
        items : 4,
        itemsCustom : false,
        itemsDesktop : [1000, 3],
        itemsTablet: [768, 2],
        itemsMobile : [479, 1],
        itemsTabletSmall: false,
        singleItem : false,
        itemsScaleUp : false,
        autoPlay: true
    });
     $(".advice-next").click(function(){
        advice.trigger('owl.next');
      })
    $(".advice-prev").click(function(){
        advice.trigger('owl.prev');
      })
})
    