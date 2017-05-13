(function($) {
    "use restrict";
    
   jQuery(document).ready(function($){
    
//    $(".video-play-btn").magnificPopup({
//       type:'video', 
//    });
    
       
   $(".homepage-slides").owlCarousel({
       items: 1,
       loop: true,
       nav: true,
       dots: false,
       autoplay: false,
       navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
       
   });
       
       
   }); 
    
    jQuery(window).load(function(){
    
        //    $().();
        
    });
    
}(jQuery));

