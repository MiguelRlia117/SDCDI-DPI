//Función de Jquery para darle funcionalidad al menu de la barra de navegación

jQuery('document').ready(function($){

    var butt=$('.idmen'),   //Variables que van a modificar el estado de las clases html
    menu=$('.navbar div.bar div');
    
    butt.click(function(){  //Función que trabaja sobre el boton de la barra de navegación

        if(menu.hasClass('show')){
            menu.removeClass('show');
        }
        else{
            menu.addClass('show');
        }

    });    
});