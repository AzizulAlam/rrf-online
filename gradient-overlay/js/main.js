(function($) {
    "use restrict";
    
   jQuery(document).ready(function($){
    
//    $(".video-play-btn").magnificPopup({
//       type:'video', 
//    });
    
   $(".hero-slider-area").owlCarousel({
       items:   1,
       loop:    true,
       dots:    true,
       nav:     true,
       navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
       autoplay: false,
//       animateOut: 'fadeOut',
   });
       
       
   }); 
    
    jQuery(window).load(function(){
    
        //    $().();
        
    });
    
}(jQuery));

