(function($) {
    "use restrict";
    
   jQuery(document).ready(function($){
       
       
       $(".case-studies-carousel").owlCarousel({
           items: 3,
           margin: 30,
           loop: true,
           dots: true,
           nav: false,
           autoplay: false,
       });
       
       $(".testimonial-carousel").owlCarousel({
           items: 1,
           loop: true,
           dots: true,
           nav: false,
           autoplay: false,
       });
       
       
       
       
   }); // End (document).ready(function(){});
    
    
    jQuery(window).load(function(){
    
        //        jQuery(".project-list").isotope();      
        
    }); // End (window).load(function(){});
    
}(jQuery));

 