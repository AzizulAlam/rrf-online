(function($) {
    "use restrict";
    
   jQuery(document).ready(function($){
    
      
//        	var s = skrollr.init();
       
//       $(".video-play-btn").magnificPopup({
//           type: 'video', 
//        });
       
 // Note: Where Image Will Loaded, there after call the image load function then masonry functionshould call to window load function()   
       
       $(".product-list").masonry();  
       
       $(".homepage-slides").owlCarousel({
           items: 1,
           loop: true,
           dots: false,
           nav: true, 
           navText: ["<i class='fa fa-long-arrow-left'> </i>", "<i class='fa fa-long-arrow-right'> </i>"],
           autoplay: false,
       });
       
       
       $(".featured-product-slides").owlCarousel({
           items: 1,
           loop: true,
           dots: true,
           nav: false, 
           autoplay: false,
       });
       
       
   }); 
    
    jQuery(window).load(function(){
    
       
        
    });
    
}(jQuery));
