(function($) {
    "use restrict";
    
   jQuery(document).ready(function($){
       
       
       
       $(".testimonial-carousel").owlCarousel({
           items: 1,
           loop: true,
           nav: false,
//           navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
           dots: true,
           autoplay: false,
       });
       
       
       
   }); // End (document).ready(function(){});
    
    
    jQuery(window).load(function(){
    
        //        jQuery(".project-list").isotope();      
        
    }); // End (window).load(function(){});
    
}(jQuery));

 