window.addEventListener("load", function () {
    setTimeout(() => {
    loader = document.querySelector(".loader");
    loader.style.opacity = "0";
    loader.style.transition = "opacity 2s ease";
    setTimeout(() => {
        loader.style.display = "none";
    }, 2000);
    }, 2000);
});

var btn__mostrar = document.querySelector(".video__mostrar");
var btn__ocultar = document.querySelector(".video__ocultar");
function show__video() {
    var video__contenedor = document.querySelector(".video__contenedor");
    var video = document.querySelector(".video");
    if ((video__contenedor.style.display = "none")) {
        video__contenedor.style.display = "flex";
        video__contenedor.style.opacity = "0";
        video__contenedor.style.transition = "opacity .5s ease";
        video.style.display = "block";
        video.style.transition = "transform .5s ease";
        setTimeout(() => {
            video.style.transform = "scale(1)";
            video__contenedor.style.opacity = "1";
        }, 0);
    }
}
function hide__video() {
    var video__contenedor = document.querySelector(".video__contenedor");
    var video = document.querySelector(".video");
    if ((video__contenedor.style.display = "flex")) {
        video.style.transform = "scale(0)";
        video__contenedor.style.transition = "opacity .5s ease";
        video__contenedor.style.opacity = "0";
        setTimeout(() => {
            video.style.display = "none";
            video__contenedor.style.display = "none";
        }, 500);
    }
}
btn__mostrar.addEventListener("click", show__video);
btn__ocultar.addEventListener("click", hide__video);

window.onload = menu__scroll();

function menu__scroll() {
    if (screen.width >= 680) {
        $('#aviso').hide(0);
        $('menu__movil').hide(0);
        $(window).scroll(function(){
            var windowHeight = $(window).scrollTop();
            var contenido2 = $("#contenido2").offset();
            contenido2 = contenido2.top;
            if(windowHeight >= contenido2  ){
                $('#aviso').fadeIn(500);
            }else{
                $('#aviso').fadeOut(500);
            }
        });
        $(window).resize(function () {
            if ($(window).width() >= 680 && screen.width >= 680) {
                $('#aviso').hide(0);
                $('menu__movil').hide(0);
                $(window).scroll(function(){
                    var windowHeight = $(window).scrollTop();
                    var contenido2 = $("#contenido2").offset();
                    contenido2 = contenido2.top;
                    if(windowHeight >= contenido2  ){
                        $('#aviso').fadeIn(500);
                    }else{
                        $('#aviso').fadeOut(500);
                    }
                });
            } else {
                $('#aviso').show();
            }
        });
    } else {
        $('#aviso').show(0);
        $(window).resize(function () {
            if ($(window).width() > 680) {
                $('#aviso').hide(0);
                $('menu__movil').hide(0);
                $(window).scroll(function(){
                    var windowHeight = $(window).scrollTop();
                    var contenido2 = $("#contenido2").offset();
                    contenido2 = contenido2.top;
                    if(windowHeight >= contenido2  ){
                        $('#aviso').fadeIn(500);
                    }else{
                        $('#aviso').fadeOut(500);
                    }
                });
            } else {
                $('#aviso').show();
            }
        });
    }
}

var menu__mostrar = document.querySelector(".menu__boton");
var menu__ocultar = document.querySelector(".movil__cerrar");
$('#menu__movil').hide(0);
function show__menu() {
    var menu__movil = document.querySelector(".menu__movil");

    if ((menu__movil.style.display = "none")) {
        $('#menu__movil').fadeIn(500);
        $('#menu__movil').show(0);
    }
}
function hide__menu() {
    var menu__movil = document.querySelector(".menu__movil");

    if ((menu__movil.style.display = "flex")) {
        $('#menu__movil').fadeOut(500);
    }
}
menu__mostrar.addEventListener("click", show__menu);
menu__ocultar.addEventListener("click", hide__menu); 