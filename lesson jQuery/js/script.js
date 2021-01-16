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

        $('.overlay').slideDown('slow', function() {
            $('.overlay').css('display', 'block');
        });
        
    }); 
        

    
    $('.close').on('click', function() {
        $('.overlay').slideUp('slow', function() {
            $('.overlay').css('display', 'none');
        });
    });

    
               
});
