$(function(){
    
    $('h2').click(function(){
        $(this).hide(3000);
    });
    //Efekt hide i show
    $('p').hide(3000).show(3000);
});


$(function(){
    //Efekt fadeOut i fadeIn
    $('h1').fadeOut(3000).fadeIn(3000);
    
    
    $(function(){
    //Efekt slideUp i slideDown
    $('h1').slideUp(3000).slideDown(3000);
        
        function animacja() {
            console.log('Zakończono pierwszą animację. Zaraz startuje druga');
            $('h3').animate({
                'font-size': '1em',
                'margin-left': '100px',
            });
        
    $('h3').animate({
        'font-size': '3em',
        'margin-left': '100px'
    }, 2000, animacja);
        
});