var color = "<div style = 'background-color:'red'; width: 150px; height: 300px;'  class='banda3' id='color3'></div>";

var primBand = 0;
var secBand = 0;

var valMult = 1;


var valtol = 5;


var valBand1 = document.getElementById("valBand1");
var valBand2 = document.getElementById("valBand2");
var valBand3 = document.getElementById("valBand3");
var valBand4 = document.getElementById("valBand4");

valBand1.innerHTML = primBand;
valBand2.innerHTML = secBand;
valBand3.innerHTML = "X"+valMult;
valBand4.innerHTML = "+-"+valtol+"%";

function cambios(){
    cambio1();
    cambio2();
    cambio3();
    cambio4();
}

function cambio1(){
   // var color1 = document.getElementById("color1").style.color = "red";
    if(onclick == true){
        document.getElementById("color1").style.color = "red";
    }

    
}

function cambio2(){
    
}

function cambio3(){
    
}

function cambio4(){
    
}


