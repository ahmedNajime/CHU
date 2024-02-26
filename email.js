


    
let band= document.getElementById("container2");
var bouton = document.getElementById("monBouton");
var div    = document.getElementById("EX");
var num1= Math.trunc(89*Math.random()+10);
var num2= Math.trunc(89*Math.random()+10);
var num3= Math.trunc(89*Math.random()+10);
var affich= Math.trunc(3*Math.random()+1);
var div1= num1.toString()+' '+num2.toString()+' '+num3.toString();
bouton.addEventListener("click", function() { alert( div1); });

let text1=num1.toString(); 
document.getElementById("boit1").innerHTML=text1;
let text2=num2.toString(); 
document.getElementById("boit2").innerHTML=text2;
let text3=num3.toString(); 
document.getElementById("boit3").innerHTML=text3;
band.style.visibility="hidden";

if (affich==1){document.getElementById("boit1").innerHTML=''}
if (affich==2){document.getElementById("boit2").innerHTML=''}
if (affich==3){document.getElementById("boit3").innerHTML=''}

if (isHidden(band)) {
    band.style.visibility="hidden";
} else {
    console.log("L'élément est visible.");
}
function senemail(){
 Email.send({
     SecureToken : "02547f81-6bd0-4411-ba7b-d3bb19253117",
     To : div.value,//"2022nemich@gmail.com",
     From : "2024nemich@gmail.com",
     Subject : "MESSAGE DE AUTHENTIFICATION",
     Body :`<html>
     <head>
     </head>
     <body>
      <div> <form target="_blank" onsubmit=
                 "try {return window.confirm(&quot;You are submitting information to an external page.\nAre you sure?&quot;);}
                 catch (e) {return false;}">
                 <label><font size =20 color="#ff9900" style="background-color:rgb(255,229,153)">${text1}</font></label>
                 <label><font size =20 color="#ff9900" style="background-color:rgb(255,229,153)">${text2}</font></label>
                 <label><font size =20 color="#ff9900" style="background-color:rgb(255,229,153)">${text3}</font></label>
     
               </form> </div>
     </body>
     </html>`  
    
    
    //div1.valueOf(div1),
     
              }).then(band.style.visibility="visible",                 //message => alert(message)
               );
         }
///