(function($) {
    "use restrict";
    
   jQuery(document).ready(function($){
    
      
//        	var s = skrollr.init();
       
//       $(".video-play-btn").magnificPopup({
//           type: 'video', 
//        });
       
 // Note: Where Image Will Loaded, there after call the image load function then masonry functionshould call to window load function()   
       
       $(".product-list").masonry();  
       
       
   }); 
    
    jQuery(window).load(function(){
    
       
        
    });
    
}(jQuery));

 