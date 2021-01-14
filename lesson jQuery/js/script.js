$(document).ready(function() {
    $('#1').on('click', function() {
        $('.modal').fadeIn('slow', function() {
            $('.modal').css('display', 'block');
        });
        
        
    });

    $('.close').on('click', function() {
        $('.modal').fadeToggle('slow', function() {
            $('.modal').css('display', 'none');
        });
        

    });
      
    $('#1').on('click', function() {
        $('.overlay').css('display', 'block');
    });
  
        

    
    $('.close').on('click', function() {
        $('.overlay').css('display', 'none');
    });

    
               
});
