let preguntas=[1, 2, 3, 4, 5, 6, 7, 9]; //Preguntas que se han hecho
let preguntasNegativas=[]; //Preguntas que se han contestado negativamente
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
    $(".respuestas").hide();
}

function eligeTest(numeroPregunta){
    if(preguntas.length == 0){
        preguntaReal = 0;
    }else{
        preguntaReal = numeroPregunta;
        if(numeroPregunta == undefined){
            numeroPregunta = Math.trunc((Math.random()*10) % preguntas.length);
            preguntaReal = preguntas[numeroPregunta];
        }
    }
    hideAll();
    switch(preguntaReal){
        case 0:
            $(".respuestas").show();
        break;
        case 1:
            $(".pregunta1").show();
        break;
        case 2:
            $(".pregunta2").show();
        break;
        case 3:
            $(".pregunta3").show();
        break;
        case 4:
            $(".pregunta4").show();
        break;
        case 5:
            $(".pregunta5").show();
        break;
        case 6:
            $(".pregunta6").show();
        break;
        case 7:
            $(".pregunta7").show();
        break;
        case 8:
            $(".pregunta8").show();
        break;
        case 9:
            $(".pregunta9").show();
        break;
    }
    preguntas.splice(numeroPregunta, 1); //Elimina el elemento elegido del array
}

function eligeTestNegativo(pregunta, sigPregunta){
    preguntasNegativas.push(pregunta);
    eligeTest(sigPregunta);
}