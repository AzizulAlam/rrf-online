(function($) {
    "use restrict";
    
   jQuery(document).ready(function($){
       
            
        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


			
			
    // To Activate Stick a Div(#sticker) on Top   
            var s = $("#sticker");
            var pos = s.position();                    
                $(window).scroll(function() {
                var windowpos = $(window).scrollTop();
                    if (windowpos > pos.top) {
                        s.addClass("stick");
                    } else {
                        s.removeClass("stick"); 
                    }
                });
    
    // To Activate Parallax Effect  
            var s = skrollr.init();
     
       
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
       
       
    // To Activate Isotop 
    // HTML Markup: Shown in index.html file
       
            $(".project-title li").on('click', function(){
            
                $(".project-title li").removeClass("active");
                $(this).addClass("active");
            
                var selector = $(this).attr('data-filter');
           
                $(".project-list").isotope({
                    filter: selector
                });
            });
       
       
   }); // End (document).ready(function(){});
    
    
    jQuery(window).load(function(){
    
        //        jQuery(".project-list").isotope();      
        
    }); // End (window).load(function(){});
    
}(jQuery));

 