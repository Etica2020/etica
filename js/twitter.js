var arrayUso = [];
var numPreguntas=9;

function hideAll(){
    for(let i=1;i<=numPreguntas;i++){
        $(".pregunta"+i).hide();
    }
    $(".respuestas").hide();
 
}

function hideAllAnswers(){

    for(let i=1;i<=numPreguntas;i++){
        $(".P"+i).hide();
    }

}

function siguiente(pregunta,sigPregunta, respuesta){
    hideAll();
    if(respuesta==1){ 
            if(sigPregunta!=-1){ 
                 $(".pregunta"+sigPregunta).show(); 
            } 
            else{ 
                $(".respuestas").show(); 
            }
        
    }
    else if(respuesta==0){ 
            arrayUso.push(pregunta); 
            if(sigPregunta!=-1){ 
                $(".pregunta"+sigPregunta).show(); 
            } 
            else
            { 
            $(".respuestas").show(); 
            }
    
    }
}



function resultado(){
  let result = numPreguntas - arrayUso.length;
  if (result == numPreguntas) document.getElementById("resultado").innerHTML ="Has conseguido "+ numPreguntas +" / "+numPreguntas+" respuestas correctas. Has acertado todas las preguntas. ¡Enhorabuena!";
  else document.getElementById("resultado").innerHTML = "Has conseguido "+ result + " / "+numPreguntas+" respuestas correctas. Soluciones";
   hideAllAnswers();
    for (var i = 0; i < arrayUso.length; i++) {
        $(".P" + arrayUso[i]).show();
    }
}