$(function(){
    //Wybieranie elementu z kolekcji za pomocą metody eq()
    $('body').find('p').eq(1).css('color', 'green');
    
    //Pętla each dodająca do paragrafów klase z kolejnym numerem
    $('p').each(function(index){
        $(this).addClass('paragraf-' + index);
    });
});