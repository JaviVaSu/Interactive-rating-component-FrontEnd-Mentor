$(document).ready(function(){
    valor = 0;

    $("#valor1").click(function(){
        $("#valor1").css({"background-color": "hsl(216, 12%, 54%)", "color" : "white"});
        $("#valor2").css({"background-color": "transparent", "color" : "hsl(217, 12%, 63%)"});
        $("#valor3").css({"background-color": "transparent", "color" : "hsl(217, 12%, 63%)"});
        $("#valor4").css({"background-color": "transparent", "color" : "hsl(217, 12%, 63%)"});
        $("#valor5").css({"background-color": "transparent", "color" : "hsl(217, 12%, 63%)"});
        valor = 1;
    });

    $("#valor2").click(function(){
        $("#valor1").css({"background-color": "transparent", "color" : "hsl(217, 12%, 63%)"});
        $("#valor2").css({"background-color": "hsl(216, 12%, 54%)", "color" : "white"});
        $("#valor3").css({"background-color": "transparent", "color" : "hsl(217, 12%, 63%)"});
        $("#valor4").css({"background-color": "transparent", "color" : "hsl(217, 12%, 63%)"});
        $("#valor5").css({"background-color": "transparent", "color" : "hsl(217, 12%, 63%)"});
        valor = 2;
    });

    $("#valor3").click(function(){
        $("#valor1").css({"background-color": "transparent", "color" : "hsl(217, 12%, 63%)"});
        $("#valor2").css({"background-color": "transparent", "color" : "hsl(217, 12%, 63%)"});
        $("#valor3").css({"background-color": "hsl(216, 12%, 54%)", "color" : "white"});
        $("#valor4").css({"background-color": "transparent", "color" : "hsl(217, 12%, 63%)"});
        $("#valor5").css({"background-color": "transparent", "color" : "hsl(217, 12%, 63%)"});
        valor = 3;
    });

    $("#valor4").click(function(){
        $("#valor1").css({"background-color": "transparent", "color" : "hsl(217, 12%, 63%)"});
        $("#valor2").css({"background-color": "transparent", "color" : "hsl(217, 12%, 63%)"});
        $("#valor3").css({"background-color": "transparent", "color" : "hsl(217, 12%, 63%)"});
        $("#valor4").css({"background-color": "hsl(216, 12%, 54%)", "color" : "white"});
        $("#valor5").css({"background-color": "transparent", "color" : "hsl(217, 12%, 63%)"});
        valor = 4;
    });

    $("#valor5").click(function(){
        $("#valor1").css({"background-color": "transparent", "color" : "hsl(217, 12%, 63%)"});
        $("#valor2").css({"background-color": "transparent", "color" : "hsl(217, 12%, 63%)"});
        $("#valor3").css({"background-color": "transparent", "color" : "hsl(217, 12%, 63%)"});
        $("#valor4").css({"background-color": "transparent", "color" : "hsl(217, 12%, 63%)"});
        $("#valor5").css({"background-color": "hsl(216, 12%, 54%)", "color" : "white"});
        valor = 5;
    });

    $("#btn-enviar").click(function(){
        $("#contenedor").css("display", "none");
        $("#contenedor-oculto").css("display", "block");

        switch(valor){
            case 1:
                $("#text").html("You selected 1 out of 5");
                break;
            case 2:
                $("#text").html("You selected 2 out of 5");
                break;
            case 3:
                $("#text").html("You selected 3 out of 5");
                break;
            case 4:
                $("#text").html("You selected 4 out of 5");
                break;
            case 5:
                $("#text").html("You selected 5 out of 5");
                break;
        }
    });

});