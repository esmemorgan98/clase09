$(document).ready(function () {
    
    $('a:nth-child(1)').click(function (){
        //alert ('Hola');
        $('#mensaje').show(1500);
    });

    $('a:nth-child(2)').click(function (){
        $('.miMensaje').hide(1200);
    });

    $('a:nth-child(3)').click(function (){
        $('.miMensaje').toggle(1200);
    });

});