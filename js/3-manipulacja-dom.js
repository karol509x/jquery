'use strict';

$(function(){
    //Pobieranie tekstu
    var tekstParagrafuPierwszego = $('#paragraf').text();
    console.log(tekstParagrafuPierwszego);
    
    //Dodawanie tesktu
    $('.paragraf').text(tekstParagrafuPierwszego);
    
    //Dodawanie HTML
    $('.paragrafnext').html('To jest <strong>paragraf</strong> z dodanym <br> HTML');
    
    //Dodanie treści na końcu selektora
     $('.paragrafnext').append('Treść na końcu selektora');
    
    //Dodanie tresci za selektorem
    $('.paragrafnext').after('Treść za selektorem');
    
    //Usuwanie elementu i jego zawartości 
    $('strong').remove();
    
    //Usuwanie tylko zawartości elementu
    $('.paragraf').empty();
    
    //Dodawanie klasy
    $('h1').addClass('blue');
    
    //Dodanie atrybutu 
    $('h1').attr('imie', 'Marcin');
});