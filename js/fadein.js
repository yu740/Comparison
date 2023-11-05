// index.html index_contents
jQuery(function($) {
$(window).on('load scroll', function (){

  var box = $('.index_contents');
  var animated = 'animated';
  
  box.each(function(){
  
    var boxOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(scrollPos > boxOffset - wh + 100 ){
      $(this).addClass(animated);
    }
  });
  });
})

// contact_banner
jQuery(function($) {
    $(window).on('load scroll', function (){
    
      var box = $('.contact_banner');
      var animated = 'animated';
      
      box.each(function(){
      
        var boxOffset = $(this).offset().top;
        var scrollPos = $(window).scrollTop();
        var wh = $(window).height();
    
        if(scrollPos > boxOffset - wh + 100 ){
          $(this).addClass(animated);
        }
    });
  });
})

// recruit_banner
jQuery(function($) {
    $(window).on('load scroll', function (){
  
    var box = $('.recruit_banner');
    var animated = 'animated';
    
    box.each(function(){
    
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(scrollPos > boxOffset - wh + 100 ){
        $(this).addClass(animated);
      }
    });
  });
})