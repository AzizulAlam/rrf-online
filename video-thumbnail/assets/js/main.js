(function($) {
    "use restrict";
    
   jQuery(document).ready(function($){
       
            
        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


	
       
    // To Activate Magnific Popup Video Play
       
            $(".video-play-btn").magnificPopup({
                type: 'video', 
            });
      
       
    // To Activate Magnific Popup Image Gallery
    // HTML Markup: <a class="image-gallary" href="img/gallery-image-01.jpg"></a>
       
            $(".image-gallary").magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true,
                },
            });
       
       
    
       
   }); // End (document).ready(function(){});
    
    
    jQuery(window).load(function(){
    
         
        
    }); // End (window).load(function(){});
    
}(jQuery));

 