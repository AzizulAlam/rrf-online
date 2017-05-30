(function($) {
    "use restrict";
    
   jQuery(document).ready(function($){
       
       
       $(".testimonial-slides").owlCarousel({
       items:   1,
       loop:    true,
       dots:    true,
//       nav:     true,
//       navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
       autoplay: false,
   });
       
            
       
    // To Activate Magnific Popup Video Play
       
            $(".video-play-btn").magnificPopup({
                type: 'video', 
            });
      
       
   }); // End (document).ready(function(){});
    
    
    jQuery(window).load(function(){
    
                
    }); // End (window).load(function(){});
    
}(jQuery));

 