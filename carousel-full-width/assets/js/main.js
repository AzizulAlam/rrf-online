(function($) {
    "use restrict";
    
   jQuery(document).ready(function($){
       
       
       
       $(".popular-product-carousel").owlCarousel({
           items: 3,
           margin: 30,
           loop: true,
           nav: false,
           dots: true,
           autoplay: false,
       });
       
       
   }); // End (document).ready(function(){});
    
    
    jQuery(window).load(function(){
    
        //        jQuery(".project-list").isotope();      
        
    }); // End (window).load(function(){});
    
}(jQuery));

 