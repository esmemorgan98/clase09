$(document).ready(function () {

    //Arreglo para la lista de tarjetas
    let listadoTarjetas = [{'tit': 'Café Molido',
                            'srcIni' : 'resources/images/cafe_molido.png',
                           'srcFin': 'resources/images/molido_mini.png' }, 
                           {'tit':'Cappuccino',
                           'srcIni' : 'resources/images/capuchino.png' ,
                           'srcFin': 'resources/images/capuchino_mini.png'}, 
                           {'tit': 'Café Mocca',
                           'srcIni' : 'resources/images/cafe_mocca.png',
                           'srcFin': 'resources/images/mocca_mini.png' }, 
                           {'tit': 'Bebida',
                           'srcIni' : 'resources/images/cafe_bebida.png',
                           'srcFin': 'resources/images/cafe_bebida_mini.png'}, 
                           {'tit': 'Café Negro',
                           'srcIni' : 'resources/images/cafe_negro.png',
                           'srcFin': 'resources/images/cafe_negro_mini.png'}];

    for (let i=0; i < listadoTarjetas.length; i++){

        let imagenIni = listadoTarjetas[i].srcIni;
        let titArticle = listadoTarjetas[i].tit;
        let smallImage = listadoTarjetas[i].srcFin;

        /*let textoHtml = '<article class=\"miTarjeta\">' +
                        '<figure> ' +
                        '<img src=\"' + imagenIni + '\" alt=\"\">' +
                       '<figcaption>' + titArticle + '</figcaption> ' +
                        '</figure> ' +
                       ' <p>Lorem ipsum dolor sit, <br> amet consectetur adipisicing elit. <br>Consequatur, id earum neque<br> labore quo alias voluptatum <br>voluptatem delectus animi ipsum.</p>' +
                    '</article>  ';*/

        let textoHtml = `
            <article class="miTarjeta">
            <figure>
            <img src=${imagenIni} alt="" class="bigImage">
            <img src=${smallImage} alt="" class="smallImage">
            </figure>
           <div class="containerText">
           <h3>${titArticle}</h3>
           <p>Lorem ipsum dolor sit, <br> amet consectetur adipisicing elit. <br>Consequatur, id earum neque<br> labore quo alias voluptatum <br>voluptatem delectus animi ipsum.</p>
           </div>
            </article>
        `;
        
        $('#listaTarjetas').append(textoHtml);
    }

    // Funcionalida de cuando la pantalla cambia de tamaño - Ancho
    $(window).resize(function (){
        let anchoPantalla = window.innerWidth;
        if (anchoPantalla < 920) {
            $('#lines').show();
            $('#menuHorizontal').hide();
            $('body').addClass("changeBackgroundColor");
            $('#listaTarjetas article p').hide();
            $('.bigImage').hide();
            $('.smallImage').show();
        } else{
            $('#lines').hide();
            $('#menuVertical').hide();
            $('body').removeClass("changeBackgroundColor");
            $('#listaTarjetas article p').show();
            $('.smallImage').hide();
            $('.bigImage').show();
        }
        
            
    });

    $('#lines').click(function (){
        //alert("esta funcionando");
        let menuVertical = document.getElementById('menuVertical');
        //alert(menuVertical);
        if (window.getComputedStyle(menuVertical).display === 'none'){
            $('#menuVertical').show();
        } else{
            $('#menuVertical').hide();
        }
    });


    

    
});

