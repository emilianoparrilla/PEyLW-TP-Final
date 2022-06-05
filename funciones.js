/* window.onload = function(){
    var audio;
    audio = getElementById('audio').play();
}     */

function modificarDiv(id){
    var div, h2;

    div = document.getElementById(id);
    div.style.float = "left";
    div.style.border = "2px solid black";
    div.style.backgroundColor = "#fcba03";        
    div.style.transition = "border .3s ease-out, background-color .3s ease-out";
    h2 = div.getElementsByTagName("h2")[0];
    h2.style.color = "#bcdde0";
    h2.style.transition = "color .3s ease-out";
}

function revertDiv(id){
    var div, h2;

    div = document.getElementById(id);
    div.style.border = "2px solid brown";
    div.style.backgroundColor = "inherit";    
    div.style.transition = "border .3s ease-out, background-color .3s ease-out";
    h2 = div.getElementsByTagName("h2")[0];
    h2.style.color = "#414a75";
    h2.style.transition = "color .3s ease-out";
}

function focusForm(id){
    var input;
    
    input = document.getElementById(id);    
    input.value = "";    
    input.style.outline = "2px solid #fcba03";
    input.style.transition = "outline .1s ease-out";
}

function blurForm(id){
    var input;

    input = document.getElementById(id);
    input.style.outline = "medium none currentcolor";
    input.style.transition = "outline .1s ease-out";
}

function funcBoton(id){
    var boton;

    boton = document.getElementById(id);
    boton.style.backgroundColor = "#cc2140";
    boton.style.color = "white";
    boton.style.border = "2px solid white";
    boton.style.transition = "background-color .3s ease-out, color .3s ease-out, border .3s ease-out";
}

function revertFuncBoton(id){
    var boton;

    boton = document.getElementById(id);
    boton.style.backgroundColor = "white";
    boton.style.color = "#a81407";
    boton.style.border = "1px solid grey";
    boton.style.transition = "background-color .3s ease-out, color .3s ease-out, border .3s ease-out";
}