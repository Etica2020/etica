let respuestas = [-1,0,0,-1,1,1,0,0,0,1,-1,-1,1,1,-1,0,1,0,1,1,0,1,0,0,-1];
let respuestasIncorrectas = [];
var contador = 0;

function hideAll(){
    $(".pregunta1").hide();
    $(".pregunta2").hide();
    $(".pregunta3").hide();
    $(".pregunta4").hide();
    $(".pregunta5").hide();
    $(".pregunta6").hide();
    $(".pregunta7").hide();
    $(".pregunta8").hide();
    $(".pregunta9").hide();
    $(".pregunta10").hide();
    $(".pregunta11").hide();
    $(".pregunta12").hide();
    $(".pregunta13").hide();
    $(".pregunta14").hide();
    $(".pregunta15").hide();
    $(".pregunta16").hide();
    $(".pregunta17").hide();
    $(".pregunta18").hide();
    $(".pregunta19").hide();
    $(".pregunta20").hide();
    $(".pregunta21").hide();
    $(".pregunta22").hide();
    $(".pregunta23").hide();
    $(".pregunta24").hide();
    $(".pregunta25").hide();
    $(".respuestas").hide();
}

function hideAllAnswers(){
    $(".P2").hide();
    $(".P3").hide();
    $(".P5").hide();
    $(".P6").hide();
    $(".P7").hide();
    $(".P8").hide();
    $(".P9").hide();
    $(".P10").hide();
    $(".P13").hide();
    $(".P14").hide();
    $(".P16").hide();
    $(".P17").hide();
    $(".P18").hide();
    $(".P19").hide();
    $(".P20").hide();
    $(".P21").hide();
    $(".P22").hide();
    $(".P23").hide();
    $(".P24").hide();
}

function siguiente(pregunta, respuesta){
    hideAll();
    if (respuestas[pregunta - 1] != -1 && respuestas[pregunta - 1] != respuesta) respuestasIncorrectas.push(pregunta);
    $(".baner-content").css("padding-top", "25vh");
    switch(pregunta){
        case 1:
            $(".pregunta2").show();
            contador++;
            break;
        case 2:
            $(".pregunta3").show();
            contador++;
            break;
        case 3:
            $(".pregunta4").show();
            break;
        case 4:
            $(".pregunta5").show();
            contador++;
            break;
        case 5:
            if (respuesta == 0) $(".pregunta7").show();
            else $(".pregunta6").show();
            contador++;
            break;
        case 6:
            $(".pregunta8").show();
            contador++;
            break;
        case 7:
            if (respuesta == 0) {
                $(".pregunta12").show();
                $(".baner-content").css("padding-top", "10vh");
            }
            else {
                $(".pregunta11").show();
                $(".baner-content").css("padding-top", "10vh");
            }
            break;
        case 8:
            $(".pregunta10").show();
            contador++;
            break;
        case 9:
            if (respuesta == 0) $(".pregunta14").show();
            else $(".pregunta13").show();
            contador++;
            break;
        case 10:
            $(".pregunta9").show();
            contador++;
            break;
        case 11:
            $(".pregunta6").show();
            contador++;
            break;
        case 12:
            $(".pregunta6").show();
            contador++;
            break;
        case 13:
            $(".pregunta15").show();
            $(".baner-content").css("padding-top", "15vh");
            break;
        case 14:
            $(".pregunta15").show();
            $(".baner-content").css("padding-top", "15vh");
            break;
        case 15:
            $(".pregunta16").show();
            contador++;
            break;
        case 16:
            $(".pregunta17").show();
            contador++;
            break;
        case 17:
            $(".pregunta18").show();
            contador++;
            break;
        case 18:
            $(".pregunta19").show();
            contador++;
            break;
        case 19:
            $(".pregunta20").show();
            contador++;
            break;
        case 20:
            $(".pregunta21").show();
            contador++;
            break;
        case 21:
            $(".pregunta22").show();
            contador++;
            break;
        case 22:
            if (respuesta == 0) {
                $(".pregunta25").show();
                $(".baner-content").css("padding-top", "10vh");
            }
            else {
                $(".pregunta23").show();
                contador++;
            }
            break;
        case 23:
            $(".pregunta24").show();
            contador++;
            break;
        case 24:
            $(".pregunta25").show();
            $(".baner-content").css("padding-top", "10vh");
            break;
        case 25:
            $(".respuestas").show();
            $(".baner-content").css("padding-top", "0");
            break;
    }
}

function resultado(){
    let res = contador - respuestasIncorrectas.length;
    if (res == contador) document.getElementById("resultado").innerHTML = res + " / " + contador +". Has conseguido acertar todas las preguntas. ¡Enhorabuena!";
    else {
        document.getElementById("imagenAmzn").style.bottom = "null";
        document.getElementById("imagenAmzn").style.top = "0";
        document.getElementById("resultado").innerHTML = res + " / " + contador + " aciertos. Tus fallos:";
    }
    hideAllAnswers();
    for (var i = 0; i < respuestasIncorrectas.length; i++) {
        $(".P" + respuestasIncorrectas[i]).show();
    }
}